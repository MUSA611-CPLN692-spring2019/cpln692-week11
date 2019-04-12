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
var ptsWithin;
var bikeCount;
var parsedData;

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

// Event which is run every time Leaflet draw creates a new layer
map.on('draw:created', function (e) {
    if(myFeatures) {
      map.removeLayer(myFeatures);
    }

    var type = e.layerType; // The type of shape
    layer = e.layer; // The Leaflet layer for the shape
    var id = L.stamp(layer); // The unique Leaflet ID for the layer
    myFeatures = layer;

//check if it is a marker, if it is, make a buffer of it; if it is not, keep it
    var radius = $('#size').val();
    if(type == 'marker'){
      var buffer = turf.buffer(myFeatures.toGeoJSON(), radius, {units: 'miles'});
      myFeatures = L.geoJSON(buffer);
    }

    map.addLayer(myFeatures);

    ptsWithin = turf.pointsWithinPolygon(parsedData, myFeatures.toGeoJSON());
    $('found').text(ptsWithin.features.length);
});


//Codes start from here
//add point
//var point = turf.point([-75.15, 39.95]);
//L.geoJSON(point).addTo(map);

//create buffer of the point
//var buffered = turf.buffer(point, 2, {units: 'miles'});
//var bufferLayer = L.geoJSON(buffered).addTo(map);

//remove
//map.removeLayer(bufferLayer);
//buffered with steps
//var bufferedWithSteps = turf.buffer(point, 2, {units: 'miles', steps:2});
//L.geoJSON(bufferedWithSteps).addTo(map);



//var points = turf.featureCollection([
//  turf.point([-63.601226, 44.642643]),
//  turf.point([-63.591442, 44.651436]),
//  turf.point([-63.580799, 44.648749]),
//  turf.point([-63.573589, 44.641788]),
//  turf.point([-63.587665, 44.64533]),
//  turf.point([-63.595218, 44.64765])
//]);


//searchwithin
//var searchWithin = turf.polygon([[
//    [-46.653,-23.543],
//    [-46.634,-23.5346],
//    [-46.613,-23.543],
//    [-46.614,-23.559],
//    [-46.631,-23.567],
//    [-46.653,-23.560],
//    [-46.653,-23.543]
//]]);



//define layer then remove more easily (though not running here?)
// var pointsLayer = L.geoJSON(points).addTo(map);
// var searchLayer = L.geoJSON(searchWithin).addTo(map);

// map.removeLayer(pointsLayer);
// map.removeLayer(searchLayer);

//add data
$.ajax("https://www.rideindego.com/stations/json/").done(function(dat){
//when data need parse
//parsedData = Json.parse(dat);
parsedData = dat;

bikeLayer = L.geoJson(parsedData);
bikeLayer.addTo(map);

//count within rectangles you draw
//var ptsWithin = turf.pointsWithinPolygon(parsedData, myFeatures.toGeoJSON());

//log count of points
//console.log(ptsWithin.features.length);

});


//search points within searchWithin Polygon, then add them to map
//var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);
//ptsWithinLayer = L.geoJson(ptsWithin);
//ptsWithinLayer.addTo(map);
