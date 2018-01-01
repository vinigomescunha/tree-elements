var RouteComponent = (function () {
  function init(routes) {
    console.log(routes)
    setRoutes(routes);
    routeComponent();
    addEventListener();
  }
  function setRoutes(routes) {
    this.routes = routes;
  }
  function routeComponent(href) {
    href = href || window.location.hash;
    var routeContent = this.routes[href] || this.routes['default'];
    buildComponent(routeContent);
  }
  function buildComponent(contents) {
    document.body.innerHTML = '';
    for (var i in contents) {
      document.body.appendChild(contents[i]);
    }
  }
  function isFormElement(elementName) {
    return ['INPUT', 'SELECT', 'TEXTAREA', 'OPTION', 'BUTTON'].indexOf(elementName) !== -1;
  }
  function addEventListener() {
    document.addEventListener('click', function (thisDocument, evMouseEvent) {
      var d = thisDocument || evMouseEvent;
      // skip event listenet case form element
      if(isFormElement(d.target.tagName)) return;
      var href = d.target.getAttribute('href');
      routeComponent(href);
    });
  }
  return {
    init: init
  }
})();

// get routes data from json
function routesFromJson(userRoutes) {
  // mode no-cors to localhost
  return fetch('assets/data/routes-content.json', { mode: 'no-cors' }).then(function (response) {
    return response.json();
  }).then(function (routes) {
    var components = userRoutes(routes);
    RouteComponent.init(components)
  });
}
// get routes data from js file
function routesFromFilejs(downloadJson, userRoutes) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'assets/data/routes-content.js';
  script.onload = function () {
    function donwloadJSON() {
      var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(routes));
      var elem = document.createElement('a');
      elem.setAttribute("href", data);
      elem.setAttribute("download", "routes-content.json");
      elem.click();
    }
    if (downloadJson) {
      donwloadJSON(); // export js routes to use as json, uncomment to use
    }
    var components = userRoutes(routes);
    RouteComponent.init(components)
  };
  document.getElementsByTagName('head')[0].appendChild(script);
}