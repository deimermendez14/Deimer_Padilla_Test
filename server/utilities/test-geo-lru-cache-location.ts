import { IGeoLRUCache } from "../models/geo-lru-cache.model";

export const testGeoLRUCacheLocation = ({ geoLRUCache }: IGeoLRUCache) => {
  const nearbyElements = geoLRUCache.getNearby(40.7128, -74.006, 5000);

  console.log(`the nearest value(s) is ${nearbyElements}`);
};
