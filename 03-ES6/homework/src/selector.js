let traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }
    for (let i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }
  traverse(startEl);
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

let selectorTypeMatcher = function (selector) {
  if (selector.startsWith("#")) {
    return "id";
  } else if (selector.startsWith(".")) {
    return "class";
  } else if (selector.includes(".")) {
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;

  if (selectorType === "id") {
    matchFunction = function (element) {
      return element.id === selector.substring(1);
    };
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      return element.classList.contains(selector.substring(1));
    };
  } else if (selectorType === "tag.class") {
    let parts = selector.split(".");
    let tagName = parts[0];
    let className = parts[1];
    matchFunction = function (element) {
      return (
        element.tagName.toLowerCase() === tagName &&
        element.classList.contains(className)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    };
  }

  return matchFunction;
};

let $ = function (selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
