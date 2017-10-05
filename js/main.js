var notepad = document.getElementById("notepad");
var words = ["email", "Email", "E-mail", "phone"]

if (window.localStorage["notes"]) {
  notepad.innerHTML = window.localStorage["notes"];
}

notepad.addEventListener("keydown", function() {
 window.localStorage["notes"] = notepad.innerHTML;
 if (notepad.innerHTML.indexOf('words')!== -1) {
   words.forEach(word => { console.log(word); })
   console.log('match');
 }
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
