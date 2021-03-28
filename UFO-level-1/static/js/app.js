// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.


// Begin JavaScript

// from data.js
var tableData = data;
console.log(tableData);

// Select the button, form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

