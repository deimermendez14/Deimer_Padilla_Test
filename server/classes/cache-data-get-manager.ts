import { LRUCache } from "../lru-cache";

export class CacheDataGetManager<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public get(key: K): V | null {
    const temp = this.cache.cacheMap.get(key);

    if (!temp) {
      return null;
    }

    if (temp.expirationTime < Date.now()) {
      const removeManager = this.cache.getRemoveManager();
      removeManager.remove(key);
      return null;
    }

    if (temp.key === this.cache.mostRecentlyUsed?.key) {
      console.log(this.cache.mostRecentlyUsed.key, 'Here');
      return this.cache.mostRecentlyUsed?.value;
    }

    const nextNode = temp.next;
    const previousNode = temp.previous;

    if (temp.key === this.cache.leastRecentlyUsed?.key) {
      this.cache.leastRecentlyUsed = this.cache.leastRecentlyUsed.next!;
      this.cache.leastRecentlyUsed.previous = null;
    } else {
      if (nextNode && previousNode) {
        previousNode.next = nextNode;
        nextNode.previous = previousNode;
      }
    }

    temp.previous = this.cache.mostRecentlyUsed;
    this.cache.mostRecentlyUsed.next = temp;
    this.cache.mostRecentlyUsed = temp;
    this.cache.mostRecentlyUsed.next = null;

    return temp.value;
  }
}
