var notepad = document.getElementById("notepad");
var background = document.getElementById("background");
var changeTheme = document.getElementById("themeChange");

if (window.localStorage["notes"]) {
  notepad.innerHTML = window.localStorage["notes"];
}

notepad.addEventListener("keydown", function() {
 window.localStorage["notes"] = notepad.innerHTML;
});

if (notepad.innerHTML.startsWith("#")) {
  pDoc.parentNode.element.classList.add("test");
}

// document.ondblclick = function () {
//    var sel = (document.selection &&       document.selection.createRange().text) || (window.getSelection && window.getSelection().toString());
//   var highlight  = '<span class="highlight">' + sel + '</span>';
//   // notepad.innerHTML = notepad.innerHTML.replace(sel, highlight);
//   notepad.innerHTML = notepad.innerHTML.replace(new RegExp(sel, "g"),highlight);
// };

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
