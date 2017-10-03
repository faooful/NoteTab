var notepad = document.getElementById("notepad");

if (window.localStorage["notes"]) {
  notepad.value = window.localStorage["notes"];
}

notepad.addEventListener("keyup", function getContent() {
  window.localStorage["notes"] = notepad.value;
});

// //Get time and date
//     $(document).ready(function() {
//     // Making 2 variable month and day
//     var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//
//     // make single object
//     var newDate = new Date();
//     // make current time
//     newDate.setDate(newDate.getDate());
//     // setting date and time
//     $('#date').html("It is" + ' ' + dayNames[newDate.getDay()] + ',' + ' ' + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
//     });
