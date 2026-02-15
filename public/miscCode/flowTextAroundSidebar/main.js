/**
 * @fileoverview main.js entry point into javascript
 */
import {formatDate, updateOnTheMinute} from './modules/date/date.js';

window.addEventListener('load', main);
async function main() {
  updateOnTheMinute(updateTitleDateEle);
}

function updateTitleDateEle() {
  let dateEle = document.getElementsByClassName('titleDate');
  dateEle.length > 0 ? dateEle[0].innerText = formatDate('DD MMM YY') : null;
}
