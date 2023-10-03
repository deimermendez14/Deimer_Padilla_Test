import { IGeoLRUCache } from '../models/geo-lru-cache.model';

export const testGeoLRUCache = ({ geoLRUCache }: IGeoLRUCache) => {
  geoLRUCache.printCacheSnapshot('First');

  geoLRUCache.get('a');

  geoLRUCache.printCacheSnapshot('Second');

  geoLRUCache.put('z', 60, 35.682839, 139.759455);

  geoLRUCache.printCacheSnapshot('Third');
};
