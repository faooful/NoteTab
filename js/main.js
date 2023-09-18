var notepad = document.getElementById("notepad");
var dateContainer = document.getElementById('date');

// Display saved notes on page load
if (window.localStorage["notes"]) {
    notepad.innerHTML = window.localStorage["notes"];
}

notepad.addEventListener("input", function() {
    window.localStorage["notes"] = notepad.innerHTML;
});

// Display the date
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var fullDate = days[d.getDay()] + ', the ' + d.getDate() + ' of ' + months[d.getMonth()];
dateContainer.innerHTML = 'Today is ' + fullDate;

// Load cards from localStorage and render them
var cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
renderCards();

document.getElementById("entryBox").addEventListener("keydown", function(e) {
  if (e.key === "Enter" && !e.shiftKey) {  
      e.preventDefault();  
      
      var entryText = e.target.value;
      if (entryText) {
          var timestamp = new Date().toLocaleString();
          createCard(entryText, timestamp);
          cardsArray.push({ text: entryText, time: timestamp });
          localStorage.setItem("cardsArray", JSON.stringify(cardsArray));
          e.target.value = "";
          e.target.style.height = 'auto';
          
          // Hide the textarea once the task is created
          e.target.style.display = 'none'; 
      } else {
          alert("Please enter some text!");
      }
  }
});


const addTaskBtn = document.getElementById("addTaskBtn");
const entryBox = document.getElementById("entryBox");

addTaskBtn.addEventListener("click", function() {
    // Create textarea element
    const entryBox = document.getElementById("entryBox");
    if (entryBox.style.display === "none" || !entryBox.style.display) {
        entryBox.style.display = "block";  // Show the textarea
    } else {
        entryBox.style.display = "none";   // Hide the textarea
    }

    // Add the textarea to the container and remove the button
    taskContainer.appendChild(taskInput);
    addTaskBtn.remove();
    taskInput.focus();  // Focus the newly created textarea

    taskInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            const entryText = e.target.value;
            if (entryText) {
                const timestamp = new Date().toLocaleString();
                createCard(entryText, timestamp);
                cardsArray.push({ text: entryText, time: timestamp });
                localStorage.setItem("cardsArray", JSON.stringify(cardsArray));

                // Remove the textarea and add the button back to the container
                taskInput.remove();
                taskContainer.appendChild(addTaskBtn);
            } else {
                alert("Please enter some text!");
            }
        }
    });
});

document.addEventListener("click", function(e) {
    if (e.target && e.target.className == "deleteBtn") {
        // Delete from display
        e.target.parentNode.remove();
        
        // Update and save cardsArray after deletion
        updateLocalStorage();
    }
});

function createCard(text, timestamp) {
  var card = document.createElement("div");
  card.className = "card";
  card.setAttribute("draggable", "true");

  // Using innerHTML to append both text and timestamp
  card.innerHTML = `<small>${timestamp}</small><p>${text}</p>`; 

  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Remove";
  deleteBtn.className = "deleteBtn";
  card.appendChild(deleteBtn);
  
  notepad.appendChild(card);
}

function renderCards() {
  cardsArray.forEach(function(cardObj) {
      createCard(cardObj.text, cardObj.time); // Passing both text and timestamp
  });
}


function updateLocalStorage() {
  var updatedCards = [];
  var cardsOnPage = document.querySelectorAll(".card");
  cardsOnPage.forEach(function(cardElement) {
      var cardText = cardElement.querySelector("p").innerText;
      var cardTime = cardElement.querySelector("small").innerText;
      updatedCards.push({ text: cardText, time: cardTime });
  });
  localStorage.setItem("cardsArray", JSON.stringify(updatedCards));
}

document.getElementById("entryBox").addEventListener("input", function() {
  // Reset the height to auto to shrink it if necessary
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

document.getElementById("entryBox").addEventListener("input", function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

let draggedItem = null;

notepad.addEventListener("dragstart", function(e) {
    draggedItem = e.target;
    e.target.style.opacity = .5; // add this line
    setTimeout(function() {
        draggedItem.style.display = 'none';
    }, 0);
});

notepad.addEventListener("dragend", function(e) {
    setTimeout(function() {
        draggedItem.style.display = '';
        draggedItem.style.opacity = 1; // and this line
        draggedItem = null;
        updateLocalStorage();
    }, 0);
});

notepad.addEventListener("dragover", function(e) {
    e.preventDefault();
});

notepad.addEventListener("dragenter", function(e) {
    if (e.target.className === 'card') {
        this.insertBefore(draggedItem, e.target);
    }
});


document.addEventListener("keydown", function(e) {
    // Check for Cmd/Ctrl + K combination
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();  // Prevent any default behavior
        addTaskBtn.click();  // Trigger the click event of the "Add Task" button
    }
});