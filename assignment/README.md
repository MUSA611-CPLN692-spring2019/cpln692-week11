# Final Project Proposal

Yixuan Hu

## Problem / Question / Motivation
For a historical city like Athens, merely contemporary street maps is not enough for travel planners and history lovers to explore the beauty of Athens.  
Therefore, I hope to create an ultimate map guide of Athens, including current maps, historical maps of Athens, a detailed map of Agora (the worship/public space), attractions from the Archaic period to Roman period. With the intuitive interaction, users can easily see the historical photos of attractions, changes of landscape from historical maps, and check other attractions within 10min walk distance.

## The data

__Raster Data__  
Ideally, raster files (.geoTiffs) are hosted on the cloud.
* Geo-referenced map of Athens by Curtius and Kaupert. Refer here: https://map.athenswesternhills.org/
* Geo-referenced map of Athenian Agora. Refer here: https://yixuanhu0106.github.io/agora.html  

__Vector Data__  
I hope to store all vector data in a database (e.g. PostgreSQL w/ PostGIS) and query the spatial information/attribute out when needed. 
* Outlines (polygons) of famous attractions in Athens. Attributes include: period, name, estimated built time, creator, and historical photos/plans.  
* Centriods (points) of smaller attractions. Attributes include: period, name, estimated built time and creator.  

## Technologies used

__Data Wrangling__:  
* Geo-reference with _QGIS_
* Create vector data with _QGIS_
* Manage database with _PostgreSQL_

__Web Mapping__:
* Posting geoTiffs with _MapBox/geotiff.js/leaflet-geotiff plugin_  
* Web mapping with _Leaflet_
  * If it's hard with Leaflet, consider use _openlayers_ as framework.

__Interaction/analysis__:
* _turf.js_ for spatial analysis
* _MapBox_ for generating walking distance
* _JQuary_ for interaction  

and use _underscore.js_ everywhere  


## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?  
  - Future visitors to Athens and Athenian history lovers
- What do they gain from your application' use?  
  - One destination of all attractions at Athens on map  
  - Clear sense of the transformance during the over 800 years of ancient Athenian history
  - Smart planning tool for their visit to Athens
- Are there any website/application examples in the wild to which you can compare your final?  
  - For historical maps: https://map.athenswesternhills.org/  
  - For tourist maps: https://www.introducingparis.com/map

#### Layouts and visual design

Map on the full screen, an expansible information bar (about 1/4-1/3 of width) on the left, and map controls on the right side on top of the map. The information bar has two sections: title on the top, information/introduction of the attraction user selected on the lower part. map controls include historical map adjustment tools (e.g. transparency) in the middle, legend, etc. A button to show other attractions within walking distance will show up on the left bar.  

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.  
__Data__:  
Generating the data raster/vector data may be time-consuming.  
How to load georeferenced geoTiff images onto the map, while preserving the accuracy and making it zoomable? I'll try different plugins to solve this problem.  
__Interaction__:  
How to better deal with asynchronous behavior? I can start with log to console to have a better understanding of the sequence.

## Missing pieces

I really hope we can talk more about the server end of web development, especially retrieving data from server-end database and deployment.
