# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.   

You can record it by editing this markdown file or creating a new one.

## Problem / Question

To empower house buyers in Detroit with enough information about the amenities (schools, parks, recreation center, historic district, etc.) of the neighborhood.


## The data

- The GeoJSON data can be downloaded from data.detroitmi.gov
- There is Parcel Data available on that data portal so I might consider using that as the base map.


## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

- leaflet draw
  so that users can pin the location of the house they are looking at
- leaflet geocoding
  so that users can also find the houses on the map through address searching
- Turf counting
  To count the total number of a certain type of amenities within the walking/10-min-drive distance of the house
- Route Optimization
  for the users to see the houses' accessibility to its nearby amenities


## Design spec

#### User experience

- Who are the users? People who are house searching.

- What do they gain from your application' use?

House buyers should be able to put in the location of the house they are looking at (or drop the marker) and get to know all the amenities within a certain distance. By clicking on the marked amenities on the map people should be able to see detailed information. They should also be able to use a filter to choose what kind of park (regional or community-serving) or which level of school (K-8 or 9-12) they really need, and search by name for the park or historic district they want to take a look at.

- Are there any website/application examples in the wild to which you can compare your final?
Maybe something a bit more complicated than this:
http://envision.cambridgema.gov/engagement-data/



#### Layouts and visual design

In addition to a side bar this application should also have a tool bar to navigate users through different kind of information they want to obtain from this app (e.g. parks and rec, schools, demolition plan, historic district, etc). The tool bar will be a small horizontal box with several icons on it. below the tool bar is the side bar area where detailed information can be displayed. I am also thinking about hiding the side bar for most of the time and only pull it up when new information has been  requested.

## Anticipated difficulties

Data format will not be a problem, hopefully. The difficulties are more likely to fall in the organization of different data source and how to put together different layers of data visualization.


## Missing pieces

Maybe more from a CSS perspective, how to make toolbars/sidebars more interactive.
