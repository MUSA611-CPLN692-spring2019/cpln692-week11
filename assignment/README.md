# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

The 2018 wildfire season was the most destructive wildfire season on record in
California and the largest amount of burned acreage recorded in a fire season.
As of December 6, the wildfire has caused loss over 3 billion US dollars,
and 85 people died during that period.

Under the global warming trend, the wildfire will exert severer damage to
not only the state of California but also other vulnerable places all over
the world. Taken the above condition into consideration, policy makers are
able to propose more reliable plans and suggestions to reduce the loss of lives
and capital if they have website that spatially presents the wildfire risk for
specific area.

Currently, the state of California is enacting regulations to help communities
battle wildfire. While the state has a role to play, it is on local communities
to do a better job making local land use decisions, particularly in
fire-sensitive areas.

A website that spatially predicts the wildfire risk based on models is able to
help policymakers propose land use plans and suggestions to reduce the loss of
lives and capital. Forecasting risk in such a way will also allow officials to
better plan Direct Protection Areas (DPA) and help relevant departments
effectively allocate limited prevention and firefighting resources.

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

The wildfire incident will be the criterion, which can be collected from the
California Department of Forestry & Fire Protection.
To simplify it, the time period is the most recent 20 years, from 1998 to 2017,
and the study area will be narrowed to 7 counties that have the most
wildfire counts, including Los Angeles, San Diego, San Bernardino, Riverside,
Kern, Fresno, and Tulare.

There will be five categories of predictors, geography, topography, historic
record, policy and climate. The topography as well as climate data need to be
estimated by ArcGIS for a lack of prepared data.

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

The leaflet will be used for creating basemaps as well as the aerial map
which presents the final result. Turf will be used for data processing. jQuery
and underscore can be used to change input for updated output report.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
Policymakers, planners, data analyst, fire department and so on.

- What do they gain from your application' use?
A summarized report of the specific place over its wildfire risk prediction.

- Are there any website/application examples in the wild to which you can compare your final?
National Significant Wildland Fire Potential Outlook
Fire Weather from National Weather Service
Fire Danger Forecast from USGS

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

Users can pinpoint a specific point on the map or type in the address.
Top bar contains a bunch of parameters to be selected for change and the side bars
are boxes for users to input changed values for those parameters to get an updated
report.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

1 Collect and wrangle the data
2 Relate the model result to the website
3 Provide users with different filters for updated reports


## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

1 Create an interface between user, use his input as parameters to present new maps
2 Find which area is the point in
