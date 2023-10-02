import { CacheNode } from '../cache-node';
import { LRUCache } from '../lru-cache';

export class CacheDataPutManager<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public put(key: K, value: V, latitude: number, longitude: number) {
    if (this.cache.cacheMap.has(key)) {
      return;
    }

    const expirationTime = Date.now() + this.cache.expirationTimeMs;
    const node = new CacheNode<K, V>(
      key,
      value,
      this.cache.mostRecentlyUsed,
      null,
      expirationTime,
      latitude,
      longitude
    );

    if (this.cache.mostRecentlyUsed) {
      this.cache.mostRecentlyUsed.next = node;
      this.cache.mostRecentlyUsed = node;
    }

    this.cache.cacheMap.set(key, node);

    if (this.cache.isFull()) {
      if (this.cache.leastRecentlyUsed) {
        this.cache.cacheMap.delete(this.cache.leastRecentlyUsed.key!);
        this.cache.leastRecentlyUsed = this.cache.leastRecentlyUsed.next!;
        this.cache.leastRecentlyUsed.previous = null;
      }
    } else {
      if (this.cache.size === 0) {
        this.cache.leastRecentlyUsed = node;
      }
      this.cache.size++;
    }

    for (const instance of this.cache.replication) {
      instance.put(key, value, latitude, longitude);
    }
  }
}
