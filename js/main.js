var notepad = document.getElementById("notepad");

if (window.localStorage["notes"]) {
  notepad.innerHTML = window.localStorage["notes"];
}

notepad.addEventListener("keyup", function getContent() {
  window.localStorage["notes"] = notepad.innerHTML;
});

var d = new Date();
var date = d.getDate();
var month = d.getMonth();

//Convert getDay into a word
var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var day = days[d.getDay()]

//Convert getMonth into a word
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var month = months[d.getMonth()]

//Add all variables of the date
var fullDate = day + ', ' + ' the ' + date + ' of ' + month;

document.getElementById('date').innerHTML = 'Today is ' + fullDate;

//Checking for keywods
