import { GeoLRUCache } from ".";

export class CacheReplicaManager<K, V> {
  private cache: GeoLRUCache<K, V>;

  constructor(cache: GeoLRUCache<K, V>) {
    this.cache = cache;
  }

  addReplica(instance: GeoLRUCache<K, V>): void {
    this.cache.replication.push(instance);
  }
}
