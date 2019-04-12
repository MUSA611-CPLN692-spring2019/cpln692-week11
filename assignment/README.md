# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

To help real estate investors to make comparisons (year of built, areas, price, amenities) among several properties.

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

The GeoJSON data could be downloaded from OpenDataPhilly.com and accessed from Zillow.com by using API.

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

Leaflet draw: mark the property they are interested in / draw the area they are interest in and shows properties within the area
Leaflet geocoding: find the property by typing in address
Turf: count the numbers of amenities within 15-minute walk of the property
API - Mapbox route optimization: find out the best route to get to amenties

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
Real estate investor
- What do they gain from your application' use?
They could mark the property they are interested in by pinning on the map or searching the address. Then they would able to make comparisons of target properties' nearby amenities. By clicking on the amenities they could also see the optimized route from the target property to the amenity.
- Are there any website/application examples in the wild to which you can compare your final?
Not yet.

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

A top bar would allow users to type in the address and get searched.
A side bar would host the details of nearby amenties of each property. Each kind of amenity would be itentified by icon.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

I would like to hide top bar and make it show up only when mouses approach the top area. The side bar could also be hided when no more new properties are added to comparisons.

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).
