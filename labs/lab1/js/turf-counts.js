/* =====================
Lab 1: Turf.js + Leaflet Draw

This lab will continue from Week10 Lab 1 - Task 3 with the Draw functionality
filled in. But make sure you understand the utilization of Leaflet Draw to
enable the creation and ability to reference rectangles as layers.

Task 1: Add a dataset that has points to the map. You can use the indego bike json API
or a (geoJSON) dataset of your choice. Use ajax + leaflet + geojson as we've done before.

https://www.rideindego.com/stations/json/



Task 2: Use Turf.js to count the points under the rectangle the user draws.

Take a look here: http://turfjs.org/docs/#pointsWithinPolygon
Log the number of intersecting points to the console when the user draws a new
rectangle


Task 3: Add a 1km buffer when a marker is created

When a user adds a marker to the map, use turf to create a 1km buffer on that marker.
Take a look here: http://turfjs.org/docs/#buffer


Task 4: Enable user input so the user can define the distance of the buffer

      - Add an <INPUT> element to your index.html
      - Replace the 1km hardcoded buffer with a jQuery call the enables the user
        to define the distance of the buffer

Task 5: Add an alert that tells the user how many points intersect within the
buffer


## Stretch goal 1: Use the Mapbox isochrone api to count how many bike stations
are within a 10 minute bike ride of City Hall

Take a look here: https://docs.mapbox.com/api/navigation/#isochrone



## Stretch goal 2: Use the Mapbox geocoding API to enable user defined input
 of a location in Philadelphia to determine the starting location rather
 than using leaflet draw to place a marker


===================== */



// Global Variables
var myFeatures;

// Initialize Leaflet Draw
var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: false,
    circle: false,
    circlemarker: false,
    marker: true,
    rectangle: true,
  }
});

map.addControl(drawControl);

/*
Task 1: Add a dataset that has points to the map. You can use the indego bike json API
or a (geoJSON) dataset of your choice. Use ajax + leaflet + geojson as we've done before.

https://www.rideindego.com/stations/json/
*/
var bikes;
$.ajax({
  url: "https://www.rideindego.com/stations/json/"
}).done(function(response) {
  bikes = response;
  layerBikes = L.geoJSON(response, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    }
  });
  layerBikes.addTo(map);
})

/*
Task 2: Use Turf.js to count the points under the rectangle the user draws.

Take a look here: http://turfjs.org/docs/#pointsWithinPolygon
Log the number of intersecting points to the console when the user draws a new
rectangle
*/

var getSelection = (layer) => {
  var feature = layer.toGeoJSON();
  var ptsWithin = turf.pointsWithinPolygon(bikes, feature);
  var layerSelection = L.geoJSON(ptsWithin);
  /*
  Task 5: Add an alert that tells the user how many points intersect within the
  buffer
  */
  alert(ptsWithin['features'].length);
  layerSelection.addTo(map);
}

/*
Task 3: Add a 1km buffer when a marker is created

When a user adds a marker to the map, use turf to create a 1km buffer on that marker.
Take a look here: http://turfjs.org/docs/#buffer
*/
var createBuffer = (marker) => {
  var point = marker.toGeoJSON();
  /*
  Task 4: Enable user input so the user can define the distance of the buffer

        - Add an <INPUT> element to your index.html
        - Replace the 1km hardcoded buffer with a jQuery call the enables the user
          to define the distance of the buffer
  */
  radius = $('#buffer-r').val()
  console.log(radius);
  buffer = turf.buffer(point, radius, {
    units: 'kilometers'
  })
  var layerBuffer = L.geoJSON(buffer);
  map.addLayer(layerBuffer);
  return layerBuffer;
}

/*
## Stretch goal 1: Use the Mapbox isochrone api to count how many bike stations
are within a 10 minute bike ride of City Hall

Take a look here: https://docs.mapbox.com/api/navigation/#isochrone

*/
var getCoord = (marker) => {
  var lng = marker.getLatLng()['lng'];
  var lat = marker.getLatLng()['lat']
  return coords = lng + "," + lat;
}

var layerSelection;

var createIsochrones = (marker) => {
  token = "pk.eyJ1IjoiZW1pbHlodSIsImEiOiJjanRraXBjYjAwMDZiNDRxbHg3cDlwbHA5In0.Z8oZamlBpJF4Sv58aC1c_A";
  $.ajax({
    url: "https://api.mapbox.com/isochrone/v1/mapbox/cycling/" +  getCoord(marker) + "?contours_minutes=10&contours_colors=6706ce&polygons=true&access_token=" + token,
    success: function(polygon) {
      var geometry = polygon['features'][0]['geometry']['coordinates'][0];
      _.each(geometry, function(coord){
        coord.reverse();
      })
      layerSelection = L.polygon(geometry, {color: 'red'});
      map.addLayer(layerSelection);
      getSelection(layerSelection);
    }
  })
}


// Event which is run every time Leaflet draw creates a new layer
map.on('draw:created', function(e) {
  if (myFeatures) {
    map.removeLayer(myFeatures);
  }
  var type = e.layerType; // The type of shape
  layer = e.layer; // The Leaflet layer for the shape
  var id = L.stamp(layer); // The unique Leaflet ID for the layer
  myFeatures = layer;
  map.addLayer(myFeatures);
  if (type == 'marker') {
    //layerSelection = createBuffer(myFeatures);
    createIsochrones(myFeatures)
    //map.addLayer(layerSelection)
  }
  if (type == 'rectangle') {
    layerSelection = layer;
    getSelection(layerSelection);
  }
});
