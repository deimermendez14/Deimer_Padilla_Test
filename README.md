# Project Test README

## Description
This repository contains the required test that demonstrates my skills in fullstack development. For questions A and B, I took the opportunity to show my frontend skills and created an interactive interface that shows the solutions to the proposed exercises. For question C I developed a program containing a TypeScript implementation of a least recently used (LRU) geodistributed cache with real-time data replication. The cache is designed to optimize data access and minimize latency, especially in distributed systems.

## Instructions questions A and B
Follow these steps to explore the frontend interface and its features:

```
cd client
npm install
npm run dev

```

Interact with the interface to see the visual representation of the exercise solutions.

## Technologies Used
- HTML
- CSS
- TypeScript
- ReactJs
- MaterialUI
- Vite

## Screenshots
Here are some screenshots of the frontend interface:

### Question A
[![image1.png](https://i.postimg.cc/SKbbfqs5/image1.png)](https://postimg.cc/21GtCsnF)

### Question B

- Basic Version Comparison
- Handling Extra Version Parts
- Handling Non-Numeric Characters
- Comparing Equal Versions
- Comparing Long Versions

[![edge-case.png](https://i.postimg.cc/mr0HPv5b/edge-case.png)](https://postimg.cc/Jy5ng28g)

[![image2.png](https://i.postimg.cc/W3f9S683/image2.png)](https://postimg.cc/G8GJmDZw)

## Instructions question C

For this question I have created a geo lru cache, I have added the functions update, get, replicate, expiration time and localization for different uses.

To test I have created utilities and called them in the main function main. running this file in console will show the different results of these functionalities.


- Test 1: Demonstrate the basic definition and function of lru cache.

- Test 2: Replication of elements from different instances

- Test 3: Obtaining location by latitude and longitude. Example of a use case 

- Test 4: Demostart expiration time



```
cd server
ts-node main.ts

```

## Technologies Used
- TypeScript
- NodeJs

View the implementation of the proposed solution


## License
This project is licensed under the [MIT License](LICENSE).
