# Week 11

*As always: make a copy of this repository to commit changes to*

## Class Outline

### Week 10 Review
- Lab and assignment review

### Turf.js + APIs

##### Section 1: Turf.js
- Turf.js
  - Overview, and exploration
    - Adding turf points to a map, adding a buffer
  - [Example](/example) (Just an example of a more advanced app using Turf.)
  - [Turf.js](http://turfjs.org/docs/) documentation is good
  - [But here](http://jseppi.github.io/intro-to-turf/) is an additional resource with more examples
- Use Turf to make an interactive app for counting points by area
- [Lab](/labs/lab1)

##### Section 2: APIs
- Review week 10 lab and assignment
- Review using Postman
- [Lab](/labs/lab2)



## Homework Assignment -- due Friday April 12th
- Complete [Labs](/labs)
- Complete [Final project proposal](assignment)

Final Project proposal
Team Member: Sagari Datta, Dhruvi Kothari, Lufeng Lin

Problem / Question:
Traffic Jam Prediction in Louisville.
To help the City of Louisville have a better knowledge of the city’s congestion, we have built a machine learning model to predict the hourly traffic jam across the City of Louisville. The application is to visualize and inform the prediction in an interactive way.

The data:
Waze traffic jam prediction dataset, which will contain the length of the jam, the coordinates, the date and the specific time of the jam. The prediction is for all 24 hours of the day for 7 days a week in 2018.


Technologies used:
jQuery, underscore, leaflet, chart.js

Design spec:
Targeted User:
Transportation Planners from the City of Louisville

Use Case:
With the knowledge of future traffic congestion, planners and policy-makers are capable of doing many things. For example, in terms of avoiding traffic congestion, better site a place and schedule a time for an event.

Anticipated difficulties:
Backend dataset management for frontend application - We have selected the main highways and primary streets in Louisville using the OpenStreetMap data. We then created a total of 1,949 hexagonal grid cells (of 500 square meters each). We are predicting traffic delay for 7 days in a week for all 24 hours which means we have a prediction dataset with 327,432 rows (7 days x 24 hours x 1,949 fishnets). We are running the prediction model for all four directions separately and therefore will have four datasets with 327,432 rows.

Display: We would like to include sliders for our 24 jam delay prediction when the user zooms into a particular grid cell. However, we will have to filter out the grid cell and select predictions by the hour and display it on the slider real time - we are concerned that loading time would be too long.  

Missing pieces:
We are still researching the use case of our model and what users want to gain from our application. We will most likely add more functionalities and will update the libraries we would like to use for the final project next week.
