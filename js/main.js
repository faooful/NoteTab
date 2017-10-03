var notepad = document.getElementById("notepad");

if (window.localStorage["notes"]) {
  notepad.value = window.localStorage["notes"];
}

notepad.addEventListener("keyup", function getContent() {
  window.localStorage["notes"] = notepad.value;
});

var d = new Date();
var date = d.getDate();

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

var fullDate = day;

// console.log(d);

document.getElementById('date').innerHTML = 'Today is ' + fullDate;
