// @fileoverview module date.js an example module

export {
  createDateEle               // create an HTML element with the date in it
};

/*export*/ function createDateEle(parent, className) {
  let date = new Date();

  let ele = document.createElement('div');
  ele.appendChild(document.createTextNode(date.toDateString()));
  className ? ele.classList.add(className) : null;
  parent ? parent.appendChild(ele) : null;

  return ele;
}
