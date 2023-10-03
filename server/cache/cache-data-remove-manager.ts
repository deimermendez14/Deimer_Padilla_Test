import { GeoLRUCache } from './geo-lru-cache';

export class CacheDataRemoveManager<K, V> {
  private cache: GeoLRUCache<K, V>;

  constructor(cache: GeoLRUCache<K, V>) {
    this.cache = cache;
  }

  remove(key: K): void {
    const node = this.cache.cacheMap.get(key);

    if (node) {
      if (node.previous) {
        node.previous.next = node.next;
      } else {
        this.cache.leastRecentlyUsed = node.next!;
        this.cache.leastRecentlyUsed.previous = null;
      }

      if (node.next) {
        node.next.previous = node.previous;
      }

      this.cache.cacheMap.delete(key);
      this.cache.size--;
    }
  }
}
