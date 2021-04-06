// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.


// Begin JavaScript

// from data.js
var tableData = data;
console.log(tableData);

// Select the button, form and tbody
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var tbody = d3.select("tbody");


// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);


// Add data to table
function fillTable() {
    tableData.forEach((rowData) => { 
      
       let row = tbody.append("tr");
         Object.values(rowData).forEach((value) => {
           let cell = row.append("td");
           cell.text(value);
             });
           })
         };
   
   
   
//Complete event handler
function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input from datetime entry
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue); 
    //clear table for next filter
    tbody.html("");
    //console.log(filteredData);
//put filtered data into the table  
    filteredData.forEach((rowData) => { 
    
    let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
            });
        })
        
};
fillTable();