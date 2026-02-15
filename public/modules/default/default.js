//@fileoverview: default.js
import {prettyDate, updateOnTheMinute} from '../util/util.js';

async function defaultMain() {
  updateOnTheMinute(showDate);
}

function showDate() {
  let dateEle = document.getElementsByClassName('titleDate');
  if (dateEle.length > 0) {
    dateEle[0].innerHTML = prettyDate(null, false, false, false);
  }
}

defaultMain();
