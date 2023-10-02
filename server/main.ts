/**
Created by Deimer Mendez 29/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 29/8/23
*/

import { LRUCache } from "./lru-cache";

const main = async () => {


};




main();





// const cache = new LRUCache<string, number>(5, 5000);

// cache.put('a', 10, -40.7128, -74.006);
// cache.put('b', 20, 34.0522, -118.2437);
// cache.put('c', 30, 51.5074, -0.1278);
// cache.put('d', 40, 48.8566, 2.3522);
// cache.put('e', 50, 35.682839, 139.759455);

// console.log('Cache Snapshot (Before Waiting):');

// cache.printCacheSnapshot();

// setTimeout(() => {
//   cache.get('a');

//   cache.get('b');

//   console.log('Cache Snapshot (After 3 seconds):');

//   cache.printCacheSnapshot();
// }, 3000);

// setTimeout(() => {
//   cache.get('c');

//   cache.get('d');

//   cache.get('e');

//   console.log('Cache Snapshot (After 7 seconds):');
//   cache.printCacheSnapshot();
// }, 7000);

// const nearbyElements = cache.getNearby(40.7128, -74.006, 5000);

// console.log('Elementos cercanos a Nueva York:', nearbyElements);

// // Crear una instancia de LRUCache
// const cacheInstance1 = new LRUCache<string, number>(5, 5000);

// // Crear otra instancia de LRUCache
// const cacheInstance2 = new LRUCache<string, number>(5, 5000);

// // Agregar cacheInstance2 como réplica de cacheInstance1
// cacheInstance1.addReplica(cacheInstance2);

// cacheInstance1.put('a', 1, 0.1, 0.2);

// // Agregar un dato a cacheInstance1
// cacheInstance2.put('b', 1, 0.1, 0.2);

// // Mostrar el estado de cacheInstance1
// console.log('Cache Instance 1:');
// cacheInstance1.printCacheSnapshot();

// // Mostrar el estado de cacheInstance2 (debería reflejar el mismo dato replicado)
// console.log('Cache Instance 2:');
// cacheInstance2.printCacheSnapshot();