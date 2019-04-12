/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [32.222037, -110.889200], //Changed to Tuscon because this is the city I chose
  zoom: 10 //Captures all 9 of Tuscon's points
});
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


/* var url = '';
var jsondata;
$.ajax(url).done(function(res) {
  jsondata = res;
}); */


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

//Task 1:
//Typed the URL "https://api.openaq.org/v1/locations?city[]=Tucson" into my browser for this task


//Task 2:
/* $.ajax("https://api.openaq.org/v1/locations?city[]=Tucson").done(function(data) {
  parsedData = data;
  console.log(parsedData);
}) */ //This whole batch of code works when uncommented, but it is commented out so rest of tasks after this work


//Task 3:
/* $.ajax("https://api.openaq.org/v1/locations?city[]=Tucson").done(function(data) {
  parsedData = data;
  //console.log(parsedData.results[0].coordinates.latitude); //Briefly ran this to see the path to get to the latitude and longitude

  for (i = 0; i < parsedData.results.length; i++) { //Defines i as being betwee 0 (the first array element containing the first point) and parsedData.results.length, which points to the last array element containing the last point without having to look for what number element in the array this is, i++ keeps adding 1 to i
      L.marker([parsedData.results[i].coordinates.latitude, parsedData.results[i].coordinates.longitude]).addTo(map);
  } //Loops through all the points for Tuscon and maps them

}) */ //This whole batch of code works when uncommented, but it is commented out so rest of tasks after this work


//Task 4:
//QUESTION I WANT TO ANSWER: what is the most polluted station in Tuscon?

$.ajax("https://api.openaq.org/v1/locations?city[]=Tucson").done(function(data) {
 parsedData = data;
//console.log(parsedData); //Examines structure to see where the pollutants are (they are in "parameters")

 for (i = 0; i < parsedData.results.length; i++) {
   var lengths = parsedData.results[i].parameters.length; //Amount ("length") of parameters = how many parameters detected at a station I'm assuming
   //console.log(lengths); // Running this command shows that the maximum number of pollutants found at a station is 3
 }

 for (i = 0; i < parsedData.results.length; i++) {
   if(parsedData.results[i].parameters.length == 3){
     L.circleMarker([parsedData.results[i].coordinates.latitude, parsedData.results[i].coordinates.longitude]).addTo(map).bindPopup('This is the most polluted Tuscon station.'); //Means "if number of pollutants found at a station = 3 and only 3, give it a circle marker and this popup message when clicked"
  } else if (parsedData.results[i].parameters.length < 3){
    L.marker([parsedData.results[i].coordinates.latitude, parsedData.results[i].coordinates.longitude]).addTo(map); //All of this means "if number of pollutants at a station is smaller than 3, give it a regular marker and no popup"
 }
 }


})
