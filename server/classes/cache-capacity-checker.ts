import { LRUCache } from '../lru-cache';

export class CacheCapacityChecker<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public isFull(): boolean {
    return this.cache.size === this.cache.capacity;
  }
}
