import { LRUCache } from "../lru-cache";

export class CacheReplicaManager<K, V> {
  private cache: LRUCache<K, V>;

  constructor(cache: LRUCache<K, V>) {
    this.cache = cache;
  }

  public addReplica(instance: LRUCache<K, V>): void {
    this.cache.replication.push(instance);
  }
}
