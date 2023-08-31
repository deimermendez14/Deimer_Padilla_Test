/**
Created by Deimer Mendez 29/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 29/8/23
*/

import { GeoLRUCache } from "./geo-lru-cache";

const main = async () => {
  const cache = new GeoLRUCache();

  await cache.set("user:123", { name: "John Doe" }, "us-west");

  const user = await cache.get("user:123", "us-west");

  console.log("User:", user);
};

main();
