# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

Choosing where to to live is always big decisions. The location means transit convenience, green space, education of children, healthcare, recreation, etc.. On the other hand, these factors are weighted variously for different people.

This project aims to develop a tool that helps users easily compare their chosen locations of residency in their own situations. It will be designed to return a score of community livablilty, based on users' input range of factors.

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

Data source 1: OpenDataPhilly (.geoJSON)
  School: Schools
  Park/green space: Parks & Recreation Assets
  Train/Subway: DVRPC Passenger Rail Stations
  Food access (walkability):Philadelphia Food Access
  Healthcare: Health Centers
  Land-use(residential): DVRPC 2010 Land Use
  census-block: Census Blocks (2010)

Data source 2: Social Explorer (csv)
  Built year
  Vacancy
  owner-occupancy rate


## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

Technologies to use in this project include:

ArcGIS: Join demographic data with spatial data
Leaflet: Mapping and reading geojsons
Underscore: Filtering and selecting data
Leaflet draw: User-side point input
Turf: calculate geospatial relationship between the input point and amenities
jQuery: Interact with users' input


## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

Users: People planning on moving to new communities
Results: After selecting range of factors, scores of block groups that satisfied with the criteria will pop out. When users click on certain block group, detailed analysis report of this location will be given.
Example: Functions may be similar to walkscore.com


#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

A top navigation for users' input and building criteria.
A sidebar/bottom bar listing detailed analysis of selected location.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

a) Data processing: Other source of tool may be needed to convert shp data to geoJSON format
b) Interaction: Gaining users' input from navigator, and then return results to sidebar/bottom bar.


## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).


Are there any ways to interact with csv (social explorer) data without using ArcGis?
