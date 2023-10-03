import { IGeoLRUCache } from '../models/geo-lru-cache.model';

export const testGeoLRUCacheExpirationTime = async ({
  geoLRUCache,
}: IGeoLRUCache) => {
  geoLRUCache.printCacheSnapshot('Initial Values');

  setTimeout(() => {
    geoLRUCache.get('a');

    geoLRUCache.get('c');

    geoLRUCache.printCacheSnapshot('Cache Snapshot (After 3 seconds):');
  }, 3000);

  setTimeout(() => {
    geoLRUCache.get('d');

    geoLRUCache.get('e');

    geoLRUCache.get('z');

    geoLRUCache.printCacheSnapshot('Cache Snapshot (After 7 seconds):');
  }, 7000);
};
