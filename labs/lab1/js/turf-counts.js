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
var parsedData;
var myFeatures;
var ptsWithin;

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

    if(type == 'marker') { //Means "if the user drops a marker on the map, then..."
      //Task 3 (commented out, but works when not commented):
      //var buffer = turf.buffer(myFeatures.toGeoJSON(), 1, {units: 'kilometers'}); //"...create a 1 km buffer around that marker they drop, call it 'buffer' in the code, and then..."
      //myFeatures = L.geoJSON(buffer); //..."finally make a geoJSON of that buffer and add it to the map"
      //End of Task 3

      //Task 4:
      var bufferDistance = $('#distance').val(); //Gets user inputted distance number and stores it in this variable
      var bufferUnits = $('#units').val(); //Gets user inputted unit type (ex. miles, kilometers, etc.) and stores it in this variable
      var units = {units: bufferUnits}; //Puts the user inputted unit type into the turf buffer command below.

      var buffer = turf.buffer(myFeatures.toGeoJSON(), bufferDistance, units); //Makes it so the user can control the buffer length and unit type. I originally tried it as say "turf.buffer(myFeatures.toGeoJSON(), bufferDistance, units: "bufferUnits")" but JavaScript kept thinking this would mean say draw a buffer of "1 bufferUnits" if the user would put 1 for bufferDistance for example. However, doing it using the options variable makes it work. I found out how to do it from http://turfjs.org/docs/#buffer basically
      myFeatures = L.geoJSON(buffer);
      //End of Task 4
    }

    map.addLayer(myFeatures);

    //Task 2:
    ptsWithin = turf.pointsWithinPolygon(parsedData, myFeatures.toGeoJSON()); //Means "define the previously undefined variable called ptswithin as how many points there are within the user-drawn rectangle"
    console.log(ptsWithin.features.length); //Means "log to the console the length of the array that has the points that fall within the user-drawn rectangle (i.e. the number of points that fall within the user-drawn rectangle)"
    //End of Task 2
});


//Task 1:
$.ajax("https://www.rideindego.com/stations/json/").done(function(data) { //The data in https://www.rideindego.com/stations/json/ is pre-parsed, so there's no need to parse it again
  parsedData = data; //Puts the data in that link into the previously empty parsedData variable
  bikeLayer = L.geoJson(parsedData) //Basically renames parsedData (the bike station points) to bikeLayer so it can be referenced more logically later)
  bikeLayer.addTo(map) //Maps the points
})
//End of Task 1
