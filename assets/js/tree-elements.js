/**
   * TreeElements - return node of elements
   * {
   * tag string - required
   * class string - optional
   * attrs object:  - optional attributes of node
   * properties object: NodeProperties - optional properties of node
   * childs: array[]: TreeElementsObject  - optional
   * }
   */
  var TreeElements = (function TreeElements(data) {
    var element;
    if (data && data.tag)
      element = document.createElement(data.tag);
    else {
      console.info('Tag is required in', data);
      return;
    }
    element.className = data.class ? data.class : '';
    if (data.attrs) {
      for (var i in data.attrs) {
        element.setAttribute(i, data.attrs[i]);
      }
    }
    if (data.properties) {
      for (var i in data.properties) {
        element[i] = data.properties[i];
      }
    }
    if (data.childs) {
      for (var i in data.childs) {
        var child = data.childs[i];
        element.appendChild(TreeElements(child)(child.id || 'node-' + i));
      }
    }
    function clone(id) {
      var el = element.cloneNode(true);
      el.id = id;
      return el;
    }
    return clone;
  });
