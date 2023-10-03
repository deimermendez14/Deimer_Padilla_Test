import { GeoLRUCache } from './geo-lru-cache';

export class CacheCapacityChecker<K, V> {
  private cache: GeoLRUCache<K, V>;

  constructor(cache: GeoLRUCache<K, V>) {
    this.cache = cache;
  }

  isFull(): boolean {
    return this.cache.size === this.cache.capacity;
  }
}
