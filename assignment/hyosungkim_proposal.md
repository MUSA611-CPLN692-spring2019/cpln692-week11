## Final Project Proposal


## Problem / Question

Evictions are a growing problem in Philadelphia. While rent prices have increased by 10 percent over the past ten years, wages increases have not kept up, ultimately leaving over half of the renters rent-burdened, according to the US Census. Evictions are a leading cause of homelessness and in 2016, Philadelphia alone had an estimated 24,000 cases of eviction. Although evictions are a legal process, many evictions occur illegally, which happens when a landlord rents out a property without officially obtaining a rental license. Illegal rentals may lead to illegal evictions, and with no formal record of the rental and the eviction, the evicted people are left without legal recourse and protection.

In response to this problem, the application to be created plans to provide a risk scores for the non-owner occupied rentals in the city, indicating the likelihood of it being rented illegally. This tool will serve to help the Licenses and Inspection (L&I) to better make choices on where to conduct unit inspections, as it currently works in a more reactive, rather than proactive way. With a limited number of inspectors and a backlog for inspections, this risk score map will serve to help the L&I to prioritize which rental units to be inspected.


## The data

The primary dataset to used in this application is the final predictive model I am currently working on with my group for my capstone course this semester. This model combines several datasets, including OPA housing characteristics, business licenses data, violations data, demographic information from the US Census on the tract level, Philadelphia neighborhoods shapefile, and data on the history of legal evictions. All of the data was combined and additional variables were created for a better predictive model performance. The final model is a dataset that includes all of the information from the datasets previously mentioned, with an additional risk score column, which will be the main information used on the application. I will be storing the data in a .csv file and will be retrieving information from it in my javascript code.


## Technologies used

I will begin with the leaflet map, but ultimately plan to use Mapbox as the base for my map. I plan to use ajax calls for retrieving data, leaflet to include the functionality of adding and removing markers, turf to include the functionality of number of nearby rentals using a buffer, and underscore functions for iterating over rows of similar data.



## Design spec

#### User experience

The main audience for my application is the Licenses and Inspection. Using this application will help them better prioritize where to conduct inspections given that there are a limited number of inspectors and a backlog of inspection units. Hopefully, this will also help them better identify where are the illegal rentals and in the bigger picture, help curb cases of illegal evictions.

- Are there any website/application examples in the wild to which you can compare your final?

#### Layouts and visual design

The main component of the application will be a map of Philadelphia. I want to include a risk score slider so that users may be able to filter out high-risk, medium-risk and low-risk scored units. Because there are so many rental units, I want to include a functionality that aggregates the markers when the map is zoomed farther out. There will be a top bar with the title and a brief description of the application. I either plan to have a side bar or no side bar to display more details of each unit (number of bedrooms, license history, violation history, etc.) when clicked. With the additional buffer/count functionality, I want to include a checkbox to calculate the number of similar rentals in its vicinity when checked and not when not checked.


## Anticipated difficulties

The biggest challenge for this is the amount of data points to display on the map. My current data has over 300,000 points considered possible non-owner occupied rentals and I think that the processing for this will be very slow. A possible work around this issue is to narrow down on what I plan to display, for example, filtering out and displaying rentals with risk scores greater than x. I am still considering whether or not I will by default, filter the dataset or allow the user to input a range of risk scores to filter.


## Missing pieces

It would be useful to know if there was a way to continuously update a data file with inputs and although these wouldn't be used for the visual aspects of the application, it can serve to add data into the primary dataset and as next steps, use this information to improve the model. By updating the model every now and then, risk score predictions may improve.
