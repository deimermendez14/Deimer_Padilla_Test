import { calculateDistance } from '../utilities/calculate-distance';
import { LRUCache } from '../lru-cache';

export class CacheNearbyFinder<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public getNearby(
    latitude: number,
    longitude: number,
    maxDistance: number
  ): V[] {
    const nearbyElements: V[] = [];

    for (const [key, node] of this.cache.cacheMap.entries()) {
      const distance = calculateDistance(
        latitude,
        longitude,
        node.latitude,
        node.longitude
      );

      if (distance <= maxDistance) {
        const value = this.cache.get(key);

        if (value !== null) {
          nearbyElements.push(value);
        }
      }
    }

    return nearbyElements;
  }
}
