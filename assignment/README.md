# Final Project Proposal:
# Using OpenStreetMap data to measure amenitization in New York City

## Problem / Question

Do the amenities (e.g. bars, coffee shops, parks) available in a particular neighborhood
reflect the demographics (e.g. racial breakdown, income levels) and home prices in that
neighborhood?

Or are the amenities available mismatched with demographics and home prices, implying
that gentrification may be coming to that neighborhood?

The purpose of this project will be to compare the amenities, demographics, and home
prices across NYC neighborhoods to understand where gentrification may be soon to come.

## The data

Datasets to be used:
1) OpenStreetMap (particularly for New York City and its 5 boroughs),
2) Zillow (either ZHVI, their home value index, or ZRI, the rental index) NYC prices,
3) ACS 5-year survey demographics data (from US census)
4) NYC neighborhoods shapefile (likely from NYC OpenData)

Datasets 2 & 3 are available in CSV format. Need to look into OSM's format, ideally
OSM will be in GeoJSON or JSON and then I can overlay those datasets on a neighborhood level.

//Geospatial applications are all about working with data. What datasets
//would you plan/like to use? If the data you'll be working with isn't
//already stored in a way that you can use, how will you be storing your data?

## Technologies used

Technologies I plan to use:
1) leaflet - allows for using OpenStreetMap data, along with for map visualization
2) jQuery - (in particular, ajax) for data requests
3) turf - for measurements within particular neighborhoods (or within radii?)



//Which technologies covered in class (or discovered on your own!) do you
//plan to use? How do you anticipate using each of these technologies?

//Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
//any library not explicitly covered in class) for functions/uses which
//you'd like to explore. Briefly describe how you might use them.

## Design spec

#### User experience

I expect the user of this application to be a real estate developer, who can use
this application to understand either a) where to invest in real estate (as the
  quality of amenities may not be reflected in neighborhood home prices), or b)
  where to build more retail/amenities, based on where there may be a dearth.

Walkscore (www.walkscore.com) has a similar interface/purpose which would be nice
to somewhat replicate for my final project.  

//At a high level, how do you expect people to use your application?
//- Who are the users?
//- What do they gain from your application' use?
//- Are there any website/application examples in the wild to which you can compare your final?

#### Layouts and visual design

Conceptually, I plan on having a map of New York City on the right, with a side
bar on the left which will contain non-map content. This will be similar to the midterm's
visual layout.

//So far, we've built all our applications with a side bar for
//representing non-map content and navigation. This is not the only
//successful design. Extra content could be displayed in a top bar,
//through side bars on both sides, and any combination of
//these as well as a number not mentioned. Try to describe your
//application's visual layout. Conceptually (no need for extensive CSS
//here), what will this design require?

## Anticipated difficulties

I'm definitely going to have difficulties with the following:
1) Thinking through how exactly to define the discrepancy between amenitization, home prices, and demographics -- what exactly are we looking for here in terms of discrepancy? Not sure yet...
2) Spatially joining the datasets in a way that's meaningful (will likely require using
  turf to have overlap),
3) Asynchronous behaviors such as running the amenitization calculations alongside the
discrepancy calculations

I actually think this will be a very ambitious, difficult project for me to take on.
I'd love to discuss (maybe next week's office hours?) how I should think about
the various steps for this project.  

//Thinking about weaknesses can be useful. What do you anticipate being
//most difficult about this project? How will you attempt to cope with
//these difficulties? For example, asynchronous behavior (ajax, events)
//are hard to use and think about. Global variables are a strategy for
//coping with that difficulty by breaking data out of the asynchronous
//context.

## Missing pieces

This could be the beginning of a tool that's actually useful for measuring
gentrification, but that would require time-dependent data. This could also potentially
be used by City Planners to better understand services available in various parts of a city,
and whether more services need to be offered in certain neighborhoods based on the demographics
of that neighborhood.

//We've only managed to scratch the surface of the available technologies
//by which you could construct an application. What use-cases haven't we covered
//that you think would be useful? What technologies not covered seem exciting to
//you (you don't necessarily have to fully understand what they're for,
//this is a chance for you to get our help interpreting a technology's
//purpose/usage).
