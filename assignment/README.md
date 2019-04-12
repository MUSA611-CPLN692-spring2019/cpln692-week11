# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   
  
You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

https://github.com/smullarkUPENN/MUSA611_Midterm

I was thinking of doing an advanced version of my midterm for my final.  
There is a non-profit that publishes this homeless report annually.  
Their report is great but its 40+ pages with additional 40+ page reports 
for each county.  I would like to create a web-based interactive map they 
could use as a tool for those who don't have time or desire to read the 
full reports.  

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

https://monarchhousing.org/wp-content/uploads/njcounts18/2018PITReportStatewide.pdf

Above is a sample of their state report.  I would reach out to the non-profit
for the data used in their state and county reports for the last 10-years.
I am familiar with their staff and have worked with them on various projects
so I think they'd be open to sharing the data.  Similar to my midterm, I would 
combine this with state/county/city polygons and create a geojson file for use 
in my app.

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

So no slides like mid-term...url just opens to a full page map of NJ 
(with bottom and top border) that is set to current years data for total 
homelessness.  User interaction would be: 

1.) choosing a year from bottom buttons which changes map to highlight that data
2.) choosing type of homelessness to visualize which changes map to highlight that 
data for selected year(maybe buttons too but will try a menu window)
3.) hover over NJ county to show how it contributes to total count in narrative box 
over map (maybe graph too)
4.) click on county to zoom in to see how each underlying town contributes to total 
and county count...this would have hover function for town similar to #3
5.) a search function would be available to type in county or town and map will
transition to that 


## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

Users will be people working in the supportive housing industry, service providers, public
officials, etc.  Basically anyone that would have read the larger report but may prefer
using the interactive map.  Saves them time and they could easily zoom to the information 
they are interested in (if a specific county, town, year, or type of homelessness).  There
are other maps that assist in visualizing poverty and affordability, but not specifically 
results of this report.


#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

As noted above, I'm thinking it will be a full page map with top and 
bottom border that will have buttons and dropdowns.  I'm also thinking
graphs and narrative boxes will overlap the map based on user selections.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

I worked through alot of the map interaction in my midterm.  I think I 
could have challenges introducing graphs and getting the design correct.
I find googling the issues to be very helpful as there is normally someone
that has run into a similar issue.

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

If you could review use of graphs with a map that would be very helpful.  Today's 
lecture on design helped quite a bit.  Thanks!
