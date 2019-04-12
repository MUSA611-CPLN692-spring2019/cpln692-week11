/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [38.906876, -77.040035],
  zoom: 8
});
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var url = 'https://api.openaq.org/v1/latest?country=US&parameter=so2&limit=1000&has_geo=true&order_by=value';
var jsondata;
var refined;

var greenIcon = L.icon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
    iconSize:     [58, 58], // size of the icon
});

var redIcon = L.icon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
    iconSize:     [58, 58], // size of the icon
});

var ordinaryIcon = L.icon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/orange-blank.png',
    iconSize:     [38, 38], // size of the icon
});

$.ajax(url).done(function(res) {
  jsondata = res;
  refined = jsondata.results.map(function(dat) {
    return {
      loation: dat.location,
      city: dat.city,
      coords: dat.coordinates,
      measure: dat.measurements[0].value,
      unit: dat.measurements[0].unit
    };
  });

  refined.forEach(function(ref) {
    L.marker([ref.coords.latitude, ref.coords.longitude],{icon: ordinaryIcon}).bindPopup('<b>City: </b>'+ ref.city + '<br> <b>SO2 Value: </b>'+ ref.measure+ ' '+ ref.unit).addTo(map);
  });

  var lowest = jsondata.results[Object.keys(jsondata.results)[0]];
  var highest = jsondata.results[Object.keys(jsondata.results)[jsondata.results.length-1]];
  L.marker([lowest.coordinates.latitude,lowest.coordinates.longitude],{icon: greenIcon}).bindPopup('<b>Lowest City: </b>'+ lowest.city + '<br> <b>SO2 Value: </b>'+ lowest.measurements[0].value+ ' '+ lowest.measurements[0].unit).addTo(map);
  L.marker([highest.coordinates.latitude,highest.coordinates.longitude],{icon: redIcon}).bindPopup('<b>Highest City: </b>'+ highest.city + '<br> <b>SO2 Value: </b>'+ highest.measurements[0].value+ ' '+ highest.measurements[0].unit).addTo(map);
});





/* =====================
Lab 2: Additional API exploration

The goal of the lab is to learn how to interact with a new API, plot data, and
pose and answer a simple question.


There are countless great providers that expose data through an API.
Although many services provide free access, many of them require authentication.

In this lab, we will explore a great open access API that does not require authentication.

Open AQ Platform API
An API for open air quality data.

https://docs.openaq.org/#api-_

We will pose an example question for you, but feel free to explore another topic
or pose your own question, so long as you can pull data from an API and plot it on a map.

Question: Can you identify the city that has the best air quality
and the city that has the worst air quality for a country of your choice?
There are several metrics of air quality, including (pm25, so2, and o3).

Read about their methodlogy here:
https://medium.com/@openaq/where-does-openaq-data-come-from-a5cf9f3a5c85


Suggested approach:
I would start testing in chrome and/or postman to quickly
iterate on your inquiry

1. Type an api call into the browser URL:

e.g.:
https://api.openaq.org/v1/locations

Test your ability to modify the API call, example:

https://api.openaq.org/v1/locations?city[]=Lisboa
or
https://api.openaq.org/v1/locations?city[]=Lisboa&limit=3
or
https://api.openaq.org/v1/measurements?country=HU


2. Use ajax in the console to make that call. Inspect the results.

3. Try to map one point (the results are not a geojson unfortunately,
(that'd be too easy...) But they do have a lat/long values.
We have mapped data like this plenty of times before with a
_.forEach or the built in JavaScript ES6 forEach method.
Then try to map all the points:

Your command should like something like:

DATA.THEFEATUREKEY.forEach((x)=> L.marker....

4. Then you can sort by a pollution value and choose the highest and lowest
city based on the value.





 ===================== */
