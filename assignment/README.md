# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   
  
You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with?:

My application will look at what factors potentially affect why the most congested intersections in Philadelphia are located where they are.


How does your
application speak to this problem/question?

My application will look at the locations of the most congested intersections in Philadelphia and various characteristics about them, such as their proximities to: traffic
signals, non-signalized road junctions, transit stops, construction sites and Philadelphia HIN (High Injury Network) road segments. The intersections that are marked as being congested's 
proximities to these variables can help explain why they are in their locations. For example, if many of the congested intersections end up being far from transit stops, this could suggest
that these congested intersections are popping up where they are because people living near them live far from transit, and therefore must drive more as an example. 

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? 

I will be working with point data supplied to my employer, the Delaware Valley Regional Planning Commission (DVRPC) by a company called RITIS. RITIS collects GIS line shapefiles representing 
where bottlenecks most frequently occur on road segments, and creates points representing the beginnings and ends of those bottlenecks, thereby marking the "congested intersections". 
These points contain information about their total levels of volume and vehicle delay, which can make them be ranked and filtered as a result. For example, the user would be able to
filter the congested intersections to see the top 100 worst in terms of vehicle delay, the top 100 worst in terms of volume delay, etc. I would also use a GeoJSON version of Azavea's
Philadelphia neighborhoods shapefile to spatial join the intersections too to break down the data on a neighborhood level, and I would also use a GeoJSON version of the Philadelphia
county boundary to show on the map. I would also use a GeoJSON of Philadelphia's highways and most signficant roads to show the user which of these roads has the most congested
intersections on them, and I may spatial join the congested intersections to the roads to further show this.  

If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

All of the data is currently stored in point shapefiles. I will convert these into GeoJSONs using QGIS. 

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

I would use various underscore functions to filter the congested intersections such as _.sortBy as one example. I would also use turf for buffering, spatial joining and other forms of
distance measuring. For example, I would use turf's pointswithinPolygon command to spatial join the congested intersections to the Philadelphia neighborhoods, the lineDistance turf command
so users could potentially click and measure distances between congested intersections and transit stops, traffic signals, etc. 

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?

The target user would be Philadelphia area transportation planners such as my boss at the DVRPC in order to supplement his work on the DVRPC's regional Congestion Management Plan, which
works to identify the most congested spots in the Philadelphia region, possible causes to their congestion and potential remedies.

- What do they gain from your application' use?

My application would help urban planners like my boss understand what could potentially be affecting the reasons why congested intersections in Philadelphia are popping up where they are.
This would help people like him devise potential solutions to the congestion and where to best place them.

- Are there any website/application examples in the wild to which you can compare your final?

I see it as a expansion in JavaScript of one of the DVRPC's web maps showing where the most congested road segments in the Philadelphia are: https://dvrpcgis.maps.arcgis.com/apps/MapSeries/index.html?appid=732efbf95f76489598277df671b5d6b2

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

I am considering choosing one of two different methods: 

1) Formatting the application like the mid-term where the user clicks through many slides, each detailing a different aspect of the
data. For example, one or two slides would show the spatial relationships between the congested intersections and traffic signals, the next would show the relationships between the
congested intersections and ramps, etc. 

2) There would be different tabs the user would click on in the top bar, with each tab being like a slide in the first option, except no next or previous buttons, etc. Each tab would also
have a sidebar that would display narrative text, interactive graphs, inputs and buttons to filter, etc. like with the first option.

Also, in all maps the application will show, the congested intersections would have pop-ups detailing information such as their volume delay amount, ranking, and intersection name.
The application would let users click on or hover over the data in the map to view information about it for example.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

I anticipate having trouble with making tabs. Up until now, I have never made a web application with tabs in JavaScript, the most complex organization method I have used so far was putting
everything in slides for the midterm. I also anticipate that making certain degrees of user interaction would be difficult. For example, I am considering including a tab where the user
could make an interactive graph regressing number of congested intersections in a Philadelphia neighborhood versus its total HIN roadway mileagle, total number of transit stops, total
ramp mileage, etc. We have not done anything in class like that and I have never done anything like that in JavaScript before, which would make that a challenge. I also have little
experience with creating text input bars on apps or drop down menus on apps in JavaScript to let users filter through data. As a result, this will be a challenge for me as well.

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

I have used Shiny in R before a couple of times to make web map applications, so I wonder what it would be like to use that to create my project other than JavaScript. I am also interested
in using ArcGIS Online like the DVRPC used for their congested roads web map app, and even ESRI StoryMaps to present my data. 