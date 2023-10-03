import {
  CacheCapacityChecker,
  CacheDataGetManager,
  CacheDataPutManager,
  CacheDataRemoveManager,
  CacheNearbyFinder,
  CacheNode,
  CacheReplicaManager,
} from '.';

export class GeoLRUCache<K, V> {
  cacheMap: Map<K, CacheNode<K, V>> = new Map<K, CacheNode<K, V>>();
  mostRecentlyUsed: CacheNode<K, V> = new CacheNode<K, V>(
    null,
    null,
    null,
    null,
    0,
    0,
    0
  );
  leastRecentlyUsed: CacheNode<K, V> = this.mostRecentlyUsed;
  capacity: number;
  size: number = 0;
  expirationTimeMs: number;
  replication: GeoLRUCache<K, V>[] = [];

  constructor(capacity: number, expirationTimeMs: number) {
    this.capacity = capacity;
    this.expirationTimeMs = expirationTimeMs;
  }

  isFull(): boolean {
    const capacityChecker = new CacheCapacityChecker(this);
    return capacityChecker.isFull();
  }

  put(key: K, value: V, latitude: number, longitude: number) {
    const putManager = new CacheDataPutManager(this);
    return putManager.put(key, value, latitude, longitude);
  }

  get(key: K) {
    const getManager = new CacheDataGetManager(this);
    return getManager.get(key);
  }

  getRemoveManager(): CacheDataRemoveManager<K, V> {
    return new CacheDataRemoveManager(this);
  }

  addReplica(instance: GeoLRUCache<K, V>) {
    const getReplicaManager = new CacheReplicaManager(this);
    return getReplicaManager.addReplica(instance);
  }

  getNearby(latitude: number, longitude: number, maxDistance: number) {
    const getNearby = new CacheNearbyFinder(this);
    return getNearby.getNearby(latitude, longitude, maxDistance);
  }

  replicateDataToOtherInstances(
    key: K,
    value: V,
    latitude: number,
    longitude: number
  ) {
    for (const instance of this.replication) {
      instance.put(key, value, latitude, longitude);
    }
  }

  printCacheSnapshot(message: string): void {
    let aux: CacheNode<K, V> | null = this.mostRecentlyUsed;
    console.log(`${message}`);
    while (aux) {
      console.log(`--> ${aux.key}`);

      aux = aux.previous;
    }
  }
}
