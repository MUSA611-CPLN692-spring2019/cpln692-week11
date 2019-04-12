# Final Project Proposal

Look into the Ridership Data of the Divvy Bike-sharing System in Chicago

## Problem / Question

Being a perfect activity to personal health and natural environment, biking has
always been an ideal activity for people to commute and exercise. In large cities,
bike sharing becomes more and more popular among citizens and tourists because of
the convenience, affordability, and sustainability of the bike-sharing system.
The City of Chicago has its city-wide bike-sharing system called Divvy, started
in 2007 by the Chicago Department of Transportation. Now Divvy operates 6,000 bikes
and more than 570 stations across Chicago, providing Chicagoans with a convenient,
healthy, and affordable transportation alternative. Although the stations of Divvy
are located across Chicago, the city center has a much higher density of location
than other parts of the city. However, is every Divvy stop in Chicago really working
as we expect? How can we evaluate the performance of each Divvy station?

To evaluate the overall performance of the Divvy bike-sharing stations, I decide to
develop a website to map the historic trip counts of each Divvy station within the
city boundary of Chicago. Then pick out the top 10 stations with the greatest daily
trip counts, as well as the bottom 10 stations with the lowest daily trip counts.

Although trip counts cannot comprehensively represent the performance level of each Divvy station,
it can reflect the station's daily supply of bike-sharing service from the perspective
of trip count.

## The data

API: https://data.cityofchicago.org/resource/fg6s-gzvg.geojson
Historic Divvy Trips (2013 to present)
This lists individual Divvy bike sharing trips, including the origin, destination,
and timestamps for each trip. Trips are included when there is an starting and end date.
Trips using a subscriber pass will include some basic demographic data (gender and age)
that is associated with the account.

## Technologies used

API: map trip data stored in API and filter the dataset to only show trips occurring in 2018
https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date between '2018-01-01T00:00:00' and '2019-01-01T00:00:00'

jQuery: when the user clicks any Divvy station on the map, the website will return the
average daily trip counts through jQuery functions, such as  $().click and $().change.

underscore: use underscore functions to calculate the average daily trip counts of
each Divvy station, such as map/each.

mapbox/turf/leaflet: I'm not sure what I'll do with these technologies, but I'm sure
they can create more interactive functions for this website.

#### User experience

The user of this application will be the actual managers and planners of the Divvy system.

They can use this application to evaluate the performance level of each Divvy Station in terms
of average daily trip counts in 2018, so that they can decide which underused stations to be eliminated
from the Divvy system in order to control operating cost and which overused stations to be expanded
to better satisfy users' need for bike-sharing services.

Currently, there is no website/application examples in the wild. But scholars have made
use of such kind of dataset to explore the bike-sharing ridership determinants, of which the
result (mostly in form of academic paper) may not be very user-friendly.

#### Layouts and visual design

On the website, there will be a topbar showing the name of the website and a sidebar
initially showing the top 10 and bottom 10 Divvy stations in terms of average daily trip
counts in 2018. But when the user click specific station, the corresponding trip counts of
that clicked station will appear under the top 10 and bottom 10 stations in the sidebar.

In the map, all the Divvy stations will be represented by circle markers, of which the colors
will be different according to their average daily trip counts. Meanwhile, in the lower right
corner, there will be legends showing the explanations for each color shade of circle markers.

Such kind of design requires setting up the properties and positions of the topbar and
sidebar, as well as adding the legend element. Also, we'll need geoJSON filters to draw
circle markers with different trip counts in different colors.

## Anticipated difficulties

The  potential difficulty will be getting the trip counts of each station. Because
right now the dataset contains all the Divvy trips occuring in 2018, instead of the average
daily trip counts of each Divvy station. Therefore, to get the trip counts of one specific
Divvy station, we'll need to use some functions to count all the trips originating from
or going to that station. Now I'm thinking about using underscore functions and if statement
to get the total trip counts of each station and then dividing the total counts by 365 to get
the average daily counts.


## Missing pieces

I hope I can learn more about how to interact more with buttons. For example, if I click a
button, there will be a new sidebar besides the original sidebar showing new information.
Also, I'd like to practice more with the mapbox tools, which I feel incredibly useful but a
little ignored in class.
