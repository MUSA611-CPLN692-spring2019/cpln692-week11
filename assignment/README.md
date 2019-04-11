# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

**The city of Louisville is attempting to mitigate its structural fires. @mayutanaka (Mayu) and I have been asked by the Fire Department Chief to develop an algorithm that will help to predict where these future fires may occur. The application will show a map of our predicted risks, as well as locations at which the city can allocate educational outreach. Community access points, such as schools, churches, and community centers, will be the locations for the educational outreach.**

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

**We'll be using datasets that we have compiled ourselves, though they are sourced from multiple locations: property valuation data and open data. Our dataset merges these data sources with our predictive data.**

**As for storage, we were going to attempt to use Github to do so, as that's what we've used in previous class examples. However, if this proves to be insufficient, we will need to look at alternatives.**

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

**We'll be using jQuery, underscore for filtering, and we'll also be using turf, as we intend to add informational buffers to some of our data. Also, Mapbox for different aesthetic purposes!**

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

**Our main user is Chief Williams of the city of Louisville, though others in the city could also use this. Our intent is that he will use the site to see where we have predicted fires, and where he can identify locations to help to m mitigate them. He'll be able to click grid cells to see data about that area's risk and information - how many people live there, how many fires there have been in the past, and how high we think its risk is. He can also click some tabs on the side to see the community resource areas, at which he can host outreach efforts for the most impact. We're taking a visual cue from this example from last year, which is similar to our project: **

** https://cdn.rawgit.com/YayinC/Quantify-Bike-Share-Demand-Web-App/master/ ***


#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

**We're thinking of using a sidebar right now, although we may choose to make it hideable. We also would like to have a pop-up help menu to help the user get oriented. Pop up menus could be shown when a user clicks a tile, and legends could go in the corner, and potentially be hideable./**

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

**The program will require a lot of different options based on user input. Making sure that we coordinate this cleanly and effectively will be the biggest hurdle we're thinking of.**

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

**Right now, we think that we're well equipped to take on this project with what we've already learned. But if we begin working and discover a way to do it quicker, or hit a roadblock- we're happy to take on a new technology or program that would help!**
