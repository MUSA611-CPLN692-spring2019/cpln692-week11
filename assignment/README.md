# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   
  
You can record it by editing this markdown file or creating a new one.

- The topic of this project is Identifying the Opportunites of Transit-oriented Development (TOD) in Long Island

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

- This application is based on the proposed high-speed rail lines and stations 
in the Rebooting New England studio report, using weighted multi-criteria 
evaluation method to identify the station with the most TOD opportunity. 
The aplication is designed as a web-based TOD opportunity rating system which 
aims to provide a friendly interface to a variety of public and private users, 
such as developers, decision-makers, researchers, and business owners. 

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

### Study Area

- Along the proposed high-speed rail line between New York and Boston, only 
Long Island doesn’t have Amtrak or regional rail access for long distance trips. 
Thus, this project proposed to study on the 122 commuter rail stations in Long 
Island regions. 

### Data

- The spatial data includes 122 existing Long Island rail stations, 8 Long Island 
rail routes, 0.5-miles buffers of corresponding rail stations. All these spatial
data are in geojson format.

- The attribute data includes 11 quantitative indicators for calculating TOD scores,
they are derived from DVRPC's TOD rating system:
1. Transit Connectivity Index (TCI)
2. Number of transit-accessible jobs via a 30-minute transit ride
3. Ratio of transit to auto travel time
4. Total number of residents and employees
5. Ratio of households with no car available
6. Ratio of non-car commute mode
7. Walk score
8. Number of high income customer households
9. Ratio of high intensity development area
10. Ratio of underutilized land
11. Median house value for all occupied housing units.

- The TOD opportunity score for each station is calculated from the 11 quantitative indicators through
weighted multi-criteria evaluation method.

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

- The base map is created by leaflet; jQuery and underscore are used for
managing input/output, filtering stations based on TOD scores, attributes,
geography, etc. Turf is used for spatial join, showing spatial relationships
between TOD opportunites and other spatial attributes, filtering stations
based on certain spatial criteria.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

- The potential users would be public and private users, such as developers, 
decision-makers, researchers, and business owners.

- They can get the TOD opportunity score ranging from 0 to 100 of each 122 rail stations, 
the 11 quantivative indicators in both raw values and percentile scores, the spatial 
context (street network, building footprint, etc.) within 0.5-mile station area catchments.

- DVRPC has built a TOD Rating System application for Greater Philadelphia. 
It uses 12 criteria to result TOD score ranging from 0 to 4. It shows the stations 
with strong existing TOD orientation and strong TOD potential in future.

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

- Top bar: a tool bar where the users can select to show different basemap layers.
It requires a series of selection box or a drop-down list.

- Side bar: an interactive area where the users can input and filter stations, showing
the TOD score, attributes values and other information of certain selected stations.
There are buttons for displaying the routes, buffers, and reseting map.
It requires a text area, bar chart, and several buttons.

- Map: a leaflet basemap shows the Long Island region with choices of 
different layers. It shows the rail routes with different colors, rail stations,
and 0.5-mile buffers of each station. The map can zoom in to a selected station and 
it brief information will pop up at same time.


## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

- The most difficult part may be an interactive chart that shows the
attributes of a selected station. It requires getting the information
of a station through a click event, and displaying the bars of the 11
quantivative indicators with different heights (or lengths).

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

- A possible technology is to calculate the travel time from one station or 
any origin to another station or any destination. Mapbox's optimization API
might be a way to implement this function. It is useful because it can show
commuters, potential home buyers or renters a sense of rail connectivity. 
