// addEventListener('keyup', function(event) {
//   var notepad = document.getElementById('notepad').value;
//   localStorage.setItem('notepad', notepad);
//
//   if (localStorage.getItem('notepad')) {
//     // document.getElementById('notepad').html(localStorage.getItem('notepad'));
//   }
//
//   console.log(notepad);
// });

addEventListener('keyup', function storeContent() {
  var content = localStorage.getItem('content');
  var notepad = document.getElementById('notepad');

  var notes = notepad.value = content;
  console.log(notes);
});
