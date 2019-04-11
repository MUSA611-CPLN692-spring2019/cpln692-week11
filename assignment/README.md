# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   
  
You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

*This project will be in conjunction with the final application deliverable for the MUSA Smart Cities practicum (MUSA811). Rachael (@rharto) and I will be partnering to produce an interactive map that shows fire risk in Louisville, KY and some potential venues for locating educational outreach programs (e.g. smoke detector distribution at a church). In other words, this app will be designed to help the Louisville Fire Department select locations with the most impact in areas with the highest risk.* 

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

*We will be creating the dataset, working with the predictions from our model, a simplified fishnet with a number of variables, and points representing the potential venues. These will hopefully be compiled into geojson format to make filtering and mapping simpler.*

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

*jQuery - based on user input, we will map certain risk levels and show information for areas over which you hover/click.*
*turf - buffers for venue locations based on a user-defined buffer distance to show "impact" of each location*
*underscore - for filtering functions*
*mapbox - for aesthetics and cool visualizations*

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

*Users: Louisville Fire Department*
*Gain: actionable visualization of our predictive model - to help them decide where to locate effective educational outreach programs*
*Reference: https://cdn.rawgit.com/YayinC/Quantify-Bike-Share-Demand-Web-App/master/*

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

*Sidebar/tab where user-input will be defined but can be hidden to view map fully & a map. We also want to add a popup page/help tab(?) to help the user orient themselves on the application.*

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

*Dealing with changing user-input to dynamically change the page will probably be the most difficult aspect, especially considering the complexity of different combinations of filters.*

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

*We have a solid conceptual foundation for our use-case and may make changes along the way as necessary.*
