# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

The idea of this project is inspired by Sung and Oh's(2011) study on the relationship between the “3D” elements, namely density, diversity and design, of each subway station’s surrounding areas and its annual ridership in Seoul. I plan to build an interactive map which shows these characteristics around each subway station in NYC.

The goal of this project is to help planners as well as residents better understand the surrounding areas of subway stations and thus make sensible planning and living decisions.

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

Datasets I may need include:
1.OpenStreetMap as a base map
2.NYC Subway Stations -GeoJSON available from NYC OpenData
3.NYC Subway Lines -GeoJSON available from NYC OpenData
4.Annual or Average Weekday Subway Ridership (and maybe percentage change between 2017 and 2018) -Table available from Metropolitan Transportation Authority
5.Block-Level Population Density -CSV available from US census
6.Block-Level Job Density -CSV available from Longitudinal Employer-Household Dynamics by US census
7.NYC Block boundary -GeoJSON available from NYC OpenData
8.Station-Level Total FAR(and maybe Residential/Commerical/Office FAR if time permits) -Need to calculate using ArcGIS
9.Zip Code-Level Home Value Index and Rental Index -CSV available from Zillow

Probable data gathering and processing procedure:
1)scrape Dataset 4 from MTA and merge it with Dataset 2
2)turn Datasets 5,6,8 & 9 into GeoJSON format

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

Technologies I plan to use include:
1.jQuery -for requesting data
2.underscore -for processing data
3.leaflet -for map visualization and users interaction such as leaflet draw
4.turf -for creating catchment areas of stations
5.mapbox -for styling, finding optimal route and data visualization


## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

I expect the users of this application to be planners and residents.
Planners can use this map to:
1)explore the overall relationship between density, diversity and design in the surrouding area and subay stations to help understand and predict ridership
2)look at the characteristics of a specific station thourgh user input to help make planning decisions
residents can use this map to:
1)look at the popualtion desnity, job density and subway ridership information to help make working and housing decisions
2)find an optimal route from a station to a specified location as the first/last mile connections to transit

A good example:
Brand New Subway:http://jpwright.net/subway/

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

The map design may require:
1.A top bar shows the title of this application
2.A side bar shows detailed descriptions and user inputs
3.Legends

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

Probable difficulties:
1.joininig datasets spatially
2.finding the best way to visualize density data
3.making user inputs work
4.getting familiar with leaflet draw and turf
5.It's very likely that I am too ambitious so I need to make tradeoff and identify functionalities that are best worth keeping

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

1.I looked at the ridership change between years and find that for some stations (especially in Brooklyn) the percentage changes reached as high as 58%, meaning that the ridership in one year may not be representative enough. Perhaps it's more meaningful to use real-time data instead. Unfornately, I failed to find this data and have no idea how to deal with it either.

2.For residents usage, it might be better to find a method to weigh different user inputs to help residents find the best station and also zoom in the map to that location.
