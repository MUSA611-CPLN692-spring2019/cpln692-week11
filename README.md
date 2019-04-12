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



Wireframe notes:

Page 1 - On this page we show an animated map of the traffic jam delay predictions in Louisville. The title and information about the project is on the left side of first page. There is a start button that users will have to press to start using the app.

Page 2 - Page 2 shows traffic jam predictions for the entire city of Louisville on the right hand side of the page. The default map will show the traffic jam delay for all directions. However, we have provided toggles at the bottom that users can select to see maps for a particular direction (N,S,E,W). On the left hand side is the sidebar with filter options for selecting time of the day, day of the week and type of event - rainy, cloudy, snowy, holiday, etc. - for which the user wants to see the jam delay prediction. Furthermore, there are two interactive charts at the bottom that show jam delay by hour and direction. The hour the user chooses in the filter will get highlighted on the chart showing jam delay by hour. There is also a search bar for neighborhoods on the map. This search bar can be used to zoom into the grid cells of a particular neighborhood. Furthermore, we have provided the option of a pop-up box when the user hovers over a particular grid cell. However, if the user were to click on the grid cell, a new display page will appear with information relating only to the grid cell that was clicked (page 3 of the app).

Page 3 - Page 3 shows the traffic jam predictions for the particular grid cell selected and the map will be zoomed into the area of the grid cell selected (we will set a zoom number for this purpose). The sidebar information will change to display traffic jam delay predictions by the hour and day for that particular grid cell. The inspiration for how to display the information was based on the smartphone weather app. The jams by hour will be displayed horizontally that the users can slide from left to right. Jam delay times will be grouped into three quantiles - high delay, medium delay and low delay. The color code for the three groups will be dark orange for high delay, yellow for medium delay and green for low delay. The hourly jam predictions will be color coded depending upon which group the prediction falls in. This was done since users of the app may not intuitively understand which jam delay prediction represents (high/medium/low traffic areas) by just looking at the jam delay numbers. The average, maximum and minimum jam delay predictions for every day of the week for the grid cell selected will also be displayed. Finally, we have provided an event filter. Selecting the grid cell on page 2 will display jam delay predictions for the grid cells for no particular event  on page 3 - i.e., this display will be the default. Users will then have the option to select a particular type of event, let’s say a rainy day event, using the filter in the sidebar on page 3. The slider and weekly display in the sidebar will update accordingly. Finally, on page 2 and page 3, there are two toggles at the bottom of the sidebar. This can be used by users to toggle between page 2 and page 3. We can set a default zoom area for page 3 that will get displayed in case the user hasn’t yet selected a particular grid cell.
