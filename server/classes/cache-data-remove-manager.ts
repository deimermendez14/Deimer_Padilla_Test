import { LRUCache } from "../lru-cache";

export class CacheDataRemoveManager<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public remove(key: K): void {
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
