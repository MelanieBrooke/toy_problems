/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

// const $ = require('jquery');

// var $itemName = $('th').contains('Item Name');
// console.log($itemName);

$(function () {
  $('#myTable').addClass('sortable');
  // placeholder click in case I have to refactor to not use sortable
  // $('th').click(function() {
  //   console.log('clicked');
  // })
 // easily call individual headers
  // var $item = $("th:contains('Item Name')");
  // var $pounds = $("th:contains('Number of Pounds')");
  // var $price = $("th:contains('Price Per Pound')");
  // var $date = $("th:contains('Expiration Date')");

});



// Cannot edit HTML table directly
// Jquery can add classes - perhaps add classes to the things in the columns?
// Am I supposed to add package.json or no??
