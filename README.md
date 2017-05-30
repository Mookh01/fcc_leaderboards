# fcc_leaderboards
A Challenge using React.js and Sass to display Points Leaders in FreeCodeCamp
# Working Application
https://codepen.io/mookh01/full/NjZzro/
# Objective:
Build a CodePen.io app that will display Free Code Camp campers(users) who've earned points within 30 days and those with the most points overall. 

User Story: I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.

User Story: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

User Story: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.

# Challenges:
The greatest challenges was getting the table headers and the table rows to align correctly using React.js Components. 
Using props and state is still a little confusing when passing information but with more practice this is getting easier. 
Other challenges included passing the 'onClick' event to functions and finding the best way to shift the focus of the most recent scores vs. the all time scores.
Referencing Javascript classes (className) proved to be the easiest way to go about changing the visual focus when clicking the buttons. 
