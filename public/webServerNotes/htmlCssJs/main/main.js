/**
 * @fileoverview jsProjTemplate client/main/main.js -- app main entry point
 */
import {createDateEle} from '../modules/date/date.js'; // module import example

window.addEventListener('load', main);           // start after HTML has loaded
window.addEventListener('unload', function(){}); // break back button cache


// main entry point
async function main() {
  // create a disconnected root so we can add everything w/o incurring renders
  let root = document.createElement('div');

  createDateEle(root, 'date');

  // now move the root's children to the html document
  while (root.firstChild) {
    document.body.appendChild(root.firstChild);
  }

} // main()
