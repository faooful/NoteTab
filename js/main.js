const notepad = document.getElementById("notepad");
const dateContainer = document.getElementById('date');
const entryBox = document.getElementById("entryBox");
const cmdShortcut = document.querySelector("#cmd-shortcut");
const newTaskLabel = document.querySelector("#new-task-label");

// Display saved notes on page load
if (localStorage.getItem("notes")) {
    notepad.innerHTML = localStorage.getItem("notes");
}

notepad.addEventListener("input", function() {
    localStorage.setItem("notes", notepad.innerHTML);
});

// Display the date
function setDate() {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const fullDate = days[d.getDay()] + ', the ' + d.getDate() + ' of ' + months[d.getMonth()];
    dateContainer.innerHTML = 'Today is ' + fullDate;
}

setDate();

// Load cards from localStorage and render them
let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
renderCards();

function adjustHeight() {
  if (this.scrollHeight > this.clientHeight) {
      this.style.height = (this.scrollHeight) + 'px';
  }
}

entryBox.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addTask();
      this.style.height = '40px';  // Reset height after pressing Enter
  }
});

function addTask() {
    const entryText = entryBox.value.trim();
    if (entryText) {
        const timestamp = new Date().toLocaleString();
        createCard(entryText, timestamp);
        cardsArray.push({ text: entryText, time: timestamp });
        localStorage.setItem("cardsArray", JSON.stringify(cardsArray));
        entryBox.value = "";
        entryBox.style.height = 'auto';
    } else {
        alert("Please enter some text!");
    }
}

document.addEventListener("click", function(e) {
    if (e.target && e.target.className == "deleteBtn") {
        e.target.parentNode.remove();
        updateLocalStorage();
    }

    if (e.target !== entryBox && document.activeElement !== entryBox) {
      entryBox.value = '';
    }
});

function createCard(text, timestamp) {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("draggable", "true");
    card.innerHTML = `<small>${timestamp}</small><p>${text}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.className = "deleteBtn";
    card.appendChild(deleteBtn);
    notepad.appendChild(card);
}

function renderCards() {
    cardsArray.forEach(cardObj => {
        createCard(cardObj.text, cardObj.time);
    });
}

function updateLocalStorage() {
    const updatedCards = Array.from(document.querySelectorAll(".card")).map(cardElement => {
        const cardText = cardElement.querySelector("p").innerText;
        const cardTime = cardElement.querySelector("small").innerText;
        return { text: cardText, time: cardTime };
    });
    localStorage.setItem("cardsArray", JSON.stringify(updatedCards));
}

entryBox.addEventListener("input", function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Drag and drop functionality
let draggedItem = null;

notepad.addEventListener("dragstart", function(e) {
    draggedItem = e.target;
    e.target.style.opacity = 0.5;
    setTimeout(() => {
        draggedItem.style.display = 'none';
    }, 0);
});

notepad.addEventListener("dragend", function() {
    setTimeout(() => {
        if (draggedItem) {
            draggedItem.style.display = '';
            draggedItem.style.opacity = 1;
            draggedItem = null;
            updateLocalStorage();
        }
    }, 0);
});

notepad.addEventListener("dragover", e => e.preventDefault());

notepad.addEventListener("dragenter", function(e) {
    if (e.target.className === 'card') {
        this.insertBefore(draggedItem, e.target);
    }
});

document.addEventListener("keydown", function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        entryBox.focus();
    }
});

entryBox.addEventListener("focus", function() {
  cmdShortcut.style.display = "none";
});

entryBox.addEventListener("focus", function() {
  newTaskLabel.style.display = "none";
});

entryBox.addEventListener("blur", function() {
  cmdShortcut.style.display = "";
  newTaskLabel.style.display = "";
  this.style.height = '40px'; // Reset height when losing focus
});
