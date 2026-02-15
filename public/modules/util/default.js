// @fileoverview modules/util/default.js -- shows the date
import {formatDate, updateOnTheMinute} from '../date/date.js';

window.addEventListener('load', updateDate);

// main entry point for the app
async function main() {
  let dateContainer = document.getElementsByClassName('dateContainer')[0];
  dateContainer ? updateOnTheMinute(updateDate) : null;
} // main()


/* private*/ function updateDate() {
  const DATE_FORMAT = 'DDDD, DD MMMM YYYY, HH:NN AMPM';
  let dateContainer = document.getElementsByClassName('dateContainer')[0];
  dateContainer ? dateContainer.innerHTML = formatDate(DATE_FORMAT) : null;
}
