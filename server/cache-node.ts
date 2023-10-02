/**
 * Created by Deimer Mendez 29/9/23
 * @author : Deimer Mendez <mendezd@utb.edu.co>
 * @date : 29/9/23
 */

export class CacheNode<K, V> {
  key: K | null;
  value: V | null;
  previous: CacheNode<K, V> | null;
  next: CacheNode<K, V> | null;
  expirationTime: number;
  latitude: number;
  longitude: number;

  constructor(
    key: K | null,
    value: V | null,
    prev: CacheNode<K, V> | null,
    next: CacheNode<K, V> | null,
    expirationTime: number,
    latitude: number,
    longitude: number
  ) {
    this.key = key;
    this.value = value;
    this.previous = prev;
    this.next = next;
    this.expirationTime = expirationTime;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
