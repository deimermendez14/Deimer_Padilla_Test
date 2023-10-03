/**
Created by Deimer Mendez 29/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 29/8/23
*/

import { GeoLRUCache } from './cache/geo-lru-cache';
import {
  testGeoLRUCache,
  testGeoLRUCacheExpirationTime,
  testGeoLRUCacheLocation,
  testGeoLRUCacheReplication,
} from './utilities';

const main = async () => {
  const geoLRUCache = new GeoLRUCache<string, number>(5, 5000);
  geoLRUCache.put('a', 10, 40.7128, -74.006);
  geoLRUCache.put('b', 20, 34.0522, -118.2437);
  geoLRUCache.put('c', 30, 51.5074, -0.1278);
  geoLRUCache.put('d', 40, 48.8566, 2.3522);
  geoLRUCache.put('e', 50, 35.682839, 139.759455);

  testGeoLRUCache({ geoLRUCache });

  testGeoLRUCacheReplication({ geoLRUCache });

  testGeoLRUCacheLocation({ geoLRUCache });

  await testGeoLRUCacheExpirationTime({ geoLRUCache });
};

main();
