var notepad = document.getElementById("notepad");
var words = ["email", "Email", "E-mail", "phone"];

if (window.localStorage["notes"]) {
  notepad.innerHTML = window.localStorage["notes"];
}

notepad.addEventListener("keydown", function() {
 window.localStorage["notes"] = notepad.innerHTML;
});

document.ondblclick = function () {
   var sel = (document.selection &&       document.selection.createRange().text) || (window.getSelection && window.getSelection().toString());
  var highlight  = '<span class="highlight">' + sel + '</span>';
  // notepad.innerHTML = notepad.innerHTML.replace(sel, highlight);
  notepad.innerHTML = notepad.innerHTML.replace(new RegExp(sel, "g"),highlight);
};

// notepad.addEventListener("keydown", function() {
//  window.localStorage["notes"] = notepad.innerHTML;
//  if (notepad.innerHTML.indexOf('words')!== -1) {
//    words.forEach(word => { console.log(word); })
//    console.log('match');
//  }
// });

// notepad.addEventListener("keydown", function() {
//   window.localStorage["notes"] = notepad.innerHTML;
//   words.forEach(word => {
//     if (notepad.innerHTML.indexOf(word)!== -1) {
//       notepad.innerHTML = notepad.innerHTML.replace(/<div>email/, "<div><span>E-mail</span>")
//       console.log('match', word);
//     }
//   })
// });

// if (window.localStorage["notes"]) {
//   notepad.innerHTML = window.localStorage["notes"];
// }
//
//
// function getCharacterOffsetWithin(range, node) {
//     var treeWalker = document.createTreeWalker(
//         node,
//         NodeFilter.SHOW_TEXT,
//         function(node) {
//             var nodeRange = document.createRange();
//             nodeRange.selectNodeContents(node);
//             return nodeRange.compareBoundaryPoints(Range.END_TO_END, range) < 1 ?
//                 NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
//         },
//         false
//     );
//
//     var charCount = 0;
//     while (treeWalker.nextNode()) {
//       console.log(treeWalker.currentNode)
//         charCount += treeWalker.currentNode.length;
//     }
//     if (range.startContainer.nodeType == 3) {
//         charCount += range.startOffset;
//     }
//     return charCount;
// }
//
// function getPosition() {
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.getRangeAt) {
//             return sel.getRangeAt(0).startOffset;
//         }
//     }
//     return null;
// }
//
// notepad.addEventListener("keyup", function() {
//   window.localStorage["notes"] = notepad.innerHTML;
//   words.forEach(word => {
//     console.log(notepad.innerHTML)
//     if (notepad.innerHTML.indexOf(word) !== -1) {
//       var range = window.getSelection().getRangeAt(0);
//       var content = notepad.innerHTML.replace('email', "<span>E-mail</span>");
//       var caretPos = getPosition();
//       var sel = window.getSelection();
//       notepad.innerHTML = content;
//       console.log(caretPos)
//       range.setStart(notepad.childNodes[1], 3);
//       range.collapse(true);
//       sel.removeAllRanges();
//       sel.addRange(range);
//     }
//   })
// }.bind(this));

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
