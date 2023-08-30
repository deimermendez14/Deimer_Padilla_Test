interface CacheEntry {
  value: any;
  timestamp: number;
}

interface Region {
  name: string;
  cache: Map<string, CacheEntry>;
}

class GeoLRUCache {
  private regions: Map<string, Region> = new Map();

  constructor() {}

  async set(key: string, value: any, regionName: string): Promise<void> {
    const timestamp = Date.now();
    const entry: CacheEntry = { value, timestamp };

    let region = this.regions.get(regionName);
    if (!region) {
      region = { name: regionName, cache: new Map() };
      this.regions.set(regionName, region);
    }

    region.cache.set(key, entry);

    // Simulate real-time replication to other regions

    this.replicateToOtherRegions(key, entry, regionName);
  }

  async get(key: string, regionName: string): Promise<any | null> {
    const region = this.regions.get(regionName);
    if (region && region.cache.has(key)) {
      const entry = region.cache.get(key) ?? { value: "", timestamp: 0 };

      // Update the timestamp to reflect that the item was accessed recently

      entry.timestamp = Date.now();

      // Simulate replicating the update to other regions

      this.replicateToOtherRegions(key, entry, regionName);

      return entry.value;
    }

    return null;
  }

  replicateToOtherRegions(
    key: string,
    entry: CacheEntry,
    currentRegion: string
  ) {
    const otherRegions = Array.from(this.regions.keys()).filter(
      (region) => region !== currentRegion
    );

    otherRegions.forEach((regionName) => {
      const region = this.regions.get(regionName);
      if (region) {
        region.cache.set(key, entry);
        console.log(
          `Replicating value ${key}:${entry.value} in region ${region.name}`
        );
      }
    });
  }
}

// Example usage
const main = async () => {
  const cache = new GeoLRUCache();

  await cache.set("user:123", { name: "John Doe" }, "us-west");
  await cache.set("product:456", { name: "Product A" }, "us-east");

  const user = await cache.get("user:123", "us-west");
  const product = await cache.get("product:456", "us-east");

  console.log("User:", user);
  console.log("Product:", product);
};

main();
