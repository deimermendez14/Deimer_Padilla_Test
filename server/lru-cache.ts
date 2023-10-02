import { CacheNode } from './cache-node';
import { CacheCapacityChecker } from './classes/cache-capacity-checker';
import { CacheDataGetManager } from './classes/cache-data-get-manager';
import { CacheDataPutManager } from './classes/cache-data-put-manager';
import { CacheDataRemoveManager } from './classes/cache-data-remove-manager';
import { CacheNearbyFinder } from './classes/cache-nearby-finder';
import { CacheReplicaManager } from './classes/cache-replica-manager';


export class LRUCache<K, V> {
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
  replication: LRUCache<K, V>[] = [];

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

  addReplica(instance: LRUCache<K, V>) {
    const getReplicaManager = new CacheReplicaManager(this);
    getReplicaManager.addReplica(instance);
  }

  getNearby(latitude: number, longitude: number, maxDistance: number) {
    const getNearby = new CacheNearbyFinder(this);
    return getNearby.getNearby(latitude, longitude, maxDistance);
  }

  printCacheSnapshot(): void {
    let aux: CacheNode<K, V> | null = this.mostRecentlyUsed;

    while (aux) {
      console.log('-->' + aux.key);

      aux = aux.previous;
    }
  }
}

