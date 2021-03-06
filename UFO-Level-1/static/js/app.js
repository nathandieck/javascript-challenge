// from data.js
let tableData = data;

//console.log the data.
console.log(tableData);

//populate the table at load
let tbody = d3.select("tbody");

tableData.forEach(function(alien) {
    console.log(alien);
    let row = tbody.append("tr");

    Object.entries(alien).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

//button functionality

let button = d3.select("#filter-btn")

let input = d3.select("#datetime");

input.on("keyup", function() {
    if (event.keyCode === 13) {
        document.getElementById("#filter-btn").click();
    }
});

button.on("click", function () {
    console.log("Click!");
    event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    function setDate(date) {
        return date.datetime === inputValue;
    };

    if (setDate != null) {
        var filteredData = tableData.filter(setDate);
    } else {
        var filteredData = tableData;
    }
    
    console.log("This is the filtered data");
    console.log(filteredData);

    // //scrap the existing table
    // //https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
    
    var table = document.getElementById("ufo-table");
    for (var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
    

    //replace with filtered data
    
    let tbody = d3.select("tbody");

    filteredData.forEach(function(alien) {
        console.log(alien);
        let row = tbody.append("tr");

        Object.entries(alien).forEach(function([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

});