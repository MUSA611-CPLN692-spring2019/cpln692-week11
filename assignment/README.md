# Final Project Proposal

## Problem / Question

What is the best airbnb unit (general location) when travelling to Barcelona, Spain? 

## The data
I will use Inside Airbnb api http://insideairbnb.com/get-the-data.html
I will convert .csv files to .Geojson files in the pre-processing step.

## Technologies used

I am expected to use most of the skills and techniques covered in class,
including leaflet(plug-ins), mapbox api, turf (e.g. buffer), jQuery, 
underscore, etc. 

## Design spec

#### User experience

The application is designed for travellers who are looking for airbnb 
units to reside.The users will be able to compare prices of selected 
units; filtering units by price range, by overall ratings; get information
of landmarks, shopping centers, place-of-interests within a certain 
distance (buffer); generate route to the targeted tourism site, etc.


#### Layouts and visual design

The application will be mainly divided into 2 parts. A map including 
airbnb units,neighborhood boundaries, landmarks (could be turned on 
and off) and a sidebar that allows users to interact with the map. 
Some features such as slidebars, filters, detailed information, etc.
will be displayed within this section.


## Anticipated difficulties

Since the datasets constain a lot of information, it will be challenging
to select the most useful information to display on the map. 

## Missing pieces

The dataset missing the real-time piece as it is impossible to know whether 
the unit is currently availble or not during the targeted time range. The 
users cannot directly book an unit or check the unit availability through 
the app. The final application can only serve as a tool that allow users to 
know the airbnb market in Barcelona, Spain and compare units based on the 
latesrt available price and distance to tourism sites. 

