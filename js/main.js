var notepad = document.getElementById("notepad");

if (window.localStorage["notes"]) {
  notepad.value = window.localStorage["notes"];
}

notepad.addEventListener("keyup", function getContent() {
  window.localStorage["notes"] = notepad.value;
});

var today = new Date();
console.log(today);

document.getElementById('date').innerHTML = 'Today is ' + today;
