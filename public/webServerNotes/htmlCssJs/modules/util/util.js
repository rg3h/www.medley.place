// @fileoverview module util.js

export {
  sleep,                // await sleep(100) sleeps for 100 ms
};

// use: await sleep(100); // sleep for 100 ms
/*export*/ function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
