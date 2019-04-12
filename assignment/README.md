# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

Explore the level of bus feeds to/from SEPTA rail stations (BSL, MFL and Regional Rail).
Basically, the map would show the level (trips per day) of bus service around each rail station within a certain distance (plotted using MapBox api).
A basic description:
When the user specifies a search radius (ex: 10 mins of walking time or 5 minutes of biking time) and clicks on a rail station, the map would display all bus stops within that distance (as dots), and display the routes of buses that serve these bus stops (as polylines).
The map would also show the number of trips available per day for these routes, which can be filtered by Weekdays, Saturdays and/or Sundays.
The stations and bus lines could be color-coded based on the service frequency of bus lines.

(Maybe, stretch goal) if I can figure out how the SEPTA api works, display the next bus location on these routes.

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

SEPTA rail stations (GeoJSON). (On OpenDataPhilly)
ArcGIS shps of SEPTA bus routes and stops with service frequencies divided by Weekdays, Saturdays, and Sundays. (I already have this)

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Leaflet to display map.
Mapbox api to calculate search radius based on travel time and mode.
turf.js or some other technology to find bus stops within that search area.
Display bus lines that serve these stops (using a filter).
jQuery to change the displays on a sidebar to provide text information.
(Maybe) send a request to SEPTA api and find the next bus's location.

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
Anyone using SEPTA.
- What do they gain from your application' use?
Easy visual view of "catchment area" of rail stations.
- Are there any website/application examples in the wild to which you can compare your final?
Transit maps or SEPTA's own maps.

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

A topbar for certain filters (ex: what rail line (MFL, BSL, Regional Rail), what day (weekday, Sat or Sun), search radius)
A sidebar for displaying information (ex: list and number of bus lines, and their frequency of service)
A map (duh)

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

Converting ArcGIS shp files to GeoJSON format, especially with large datasets (such as the bus stop shapefile).
Leaflet might crash if there are too many lines and points.
Writing a filter function that does the "searching".
Figuring out SEPTA's api (stretch).

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).
