let appMap = null;
let appView = null;

function loadMapModules() {
  return new Promise((resolve, reject) => {
    require([
      "esri/Map",
      "esri/views/MapView",
      "esri/widgets/Home",
      "esri/widgets/Compass",
      "esri/widgets/Locate"
    ], function (Map, MapView, Home, Compass, Locate) {
      resolve({ Map, MapView, Home, Compass, Locate });
    }, reject);
  });
}

async function initializeMap() {
  const { Map, MapView, Home, Compass, Locate } = await loadMapModules();

  appMap = new Map({
    basemap: "gray-vector"
  });

  appView = new MapView({
    container: "viewDiv",
    map: appMap,
    center: [-54, -14],
    zoom: 4
  });

  const homeWidget = new Home({
    view: appView
  });

  const compassWidget = new Compass({
    view: appView
  });

  const locateWidget = new Locate({
    view: appView
  });

  appView.ui.add(homeWidget, "top-left");
  appView.ui.add(compassWidget, "top-left");
  appView.ui.add(locateWidget, "top-left");

  return appView;
}