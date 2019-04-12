var point1 = turf.point([-75.343, 39.984]);
point1;

L.geoJSON(point1).addTo(map);
var buffered = turf.buffer(point1, 500, {units: 'miles'});
L.geoJSON(buffered);

L.geoJSON(buffered).addTo(map);

var points = turf.points([
    [-46.6318, -23.5523],
    [-46.6246, -23.5325],
    [-46.6062, -23.5513],
    [-46.663, -23.554],
    [-46.643, -23.557]
]);

var searchWithin = turf.polygon([[
    [-46.653,-23.543],
    [-46.634,-23.5346],
    [-46.613,-23.543],
    [-46.614,-23.559],
    [-46.631,-23.567],
    [-46.653,-23.560],
    [-46.653,-23.543]
]]);

var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);
ptsWithinLayer = L.geoJSON(ptsWithin)

L.geoJSON(searchWithin).addTo(map);

pointsLayer = L.geoJSON(points).addTo(map);


//parsedData
//bikeLayer = converting geoJSON into leaflet






//part 2

var allthedata;
$.ajax('https://api.openaq.org/v1/latest?country=US&parameter=pm25&limit=1100').done(function(dat){
  allthedata=dat;
});
//allthedata;

refined = allthedata.results.map((dat) => {
  return {location: dat.location, city:dat.city, coords:dat.coordinates,
          measure: dat.measurements[0].value};
        });
//refined[0];

refined.forEach(ref) => {
  L.marker(ref.coords).bindPopup(`CITY: ${ref.city} MEASURE ${ref.measure}`).addTo(map)};

_.max(refined, (ref) => {return ref.value}
