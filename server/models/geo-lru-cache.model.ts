import { GeoLRUCache } from '../cache';

export interface IGeoLRUCache {
  geoLRUCache: GeoLRUCache<string, number>;
}
