// @fileoverview module html.js exports several HTML functions.

// table of contents of exported functions in alphabetical order
export {
  CHECKMARK_SYM,
  EDIT_SYM,
  HAMBURGER_SYM,
  MENU_SYM,
  SPACE_SYM,
  X_SYM,
  addClassNameOrList,
  attachToDom,
  createDiv,
  createElement,
  createImg,
  createTextNode,
  getFirstText,
  getFirstTextNode,
  insertAsFirst,
  moveChildNodes,
  setText,
};


/*export*/ const CHECKMARK_SYM = '\u2713';
/*export*/ const EDIT_SYM      = '\u270E';
/*export*/ const HAMBURGER_SYM = '\u2261';
/*export*/ const MENU_SYM      = '\u2261';
/*export*/ const SPACE_SYM     = '\u00A0';
/*export*/ const X_SYM         = '\u2717';


// add a classname or list of class names (string or array)
/*export*/ function addClassNameOrList(element, classNameOrList) {
  if (element) {
    let newClassList = [];
    if (typeof classNameOrList === 'string') {
      newClassList = classNameOrList.split(' ');
    } else if (Array.isArray(classNameOrList)) {
      newClassList = classNameOrList;
    }

    for (let i = 0, count = newClassList.length; i < count; ++i) {
      let token = newClassList[i];
      if (token && token.length > 0) {
        element.classList.add(token);
      }
    }
  }

  return element;
}


// move all of the elements of ele to the new root, usually the document.body
/*export*/ function attachToDom(ele, newRoot=document.body) {
  while (ele.firstChild) {
    newRoot.appendChild(ele.firstChild);
  }
}


/*export*/ function createDiv (parent, opt_classNameOrList, text) {
  let element = createElement('div', parent, opt_classNameOrList);
  text ? setText(element, text) : null;
  return element;
}


/*export*/ function createElement(elementName, parent, opt_classNameOrList) {
  let element = document.createElement(elementName);
  addClassNameOrList(element, opt_classNameOrList);
  parent ? parent.appendChild(element) : null;
  return element;
}


/*export*/ function createImg (parent, classNameOrList, url, waitForIt=false) {
  if (waitForIt) {
    const img = new Image();
    return new Promise((resolve, reject) => {
      let element = createElement('img', parent, classNameOrList);
      element.onload = () => resolve(element);
      element.onerror = reject;
      element.src = url;
    });
  } else {
    let element = createElement('img', parent, classNameOrList);
    element.src = url;
    return element;
  }
}


/*export*/ function createTextNode(element, text) {
  let textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return textNode;
}


// gets the text string value of the first text node
/*export*/ function getFirstText(element) {
  let textNode = getFirstTextNode(element);
  return textNode ? textNode.nodeValue : null;
}

/*export*/ function getFirstTextNode(element) {
  for (let node in element.childNodes) {
    if (element.childNodes[node].nodeType === Node.TEXT_NODE) {
      return element.childNodes[node];
    }
  }
  return null;
}

/*export*/ function insertAsFirst(parent, element) {
  if (parent) {
    parent.insertBefore(element, parent.firstChild);
  }
}

// moves all the children from parentSrc under parentDestination
// does nothing if either are null
/*export*/ function moveChildNodes(parentSrc, parentDestination) {
  if (!parentSrc || !parentDestination) { return; }
  while (parentSrc.firstChild) {
    parentDestination.appendChild(parentSrc.firstChild);
  }
}

// sets the first text node or appends if the flag is set
/*export*/ function setText(element, text, append=false) {
  if (append) {
    createTextNode(element, text);
  } else {
    let textNode = getFirstTextNode(element);
    if (textNode) {
      textNode.nodeValue = text;
    } else {
      createTextNode(element, text);
    }
  }
}
