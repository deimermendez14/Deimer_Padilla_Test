import { GeoLRUCache } from '../cache';
import { IGeoLRUCache } from '../models/geo-lru-cache.model';

export const testGeoLRUCacheReplication = ({ geoLRUCache }: IGeoLRUCache) => {
  const geoLRUCache2 = new GeoLRUCache<string, number>(5, 5000);

  geoLRUCache.addReplica(geoLRUCache2);

  geoLRUCache.put('p', 1, 0.1, 0.2);

  geoLRUCache2.put('m', 1, 0.1, 0.2);

  geoLRUCache.printCacheSnapshot('Cache Instance 1:');

  console.log('Cache Instance 2:');
  geoLRUCache2.printCacheSnapshot('2');
};
