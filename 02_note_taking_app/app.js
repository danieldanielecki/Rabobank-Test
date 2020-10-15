const parent = document.querySelector("#parent");
const picker = new Picker(parent);
let choosenColor;

picker.onChange = function (color) {
  parent.style.background = color.rgbaString;
  choosenColor = color.rgbaString;
};

const noteForm = document.querySelector("form");
const noteInput = document.querySelector("input");
const noteList = document.querySelector("ul");

noteForm.addEventListener("submit", addNote);

function addNote(e) {
  if (noteInput.value === "") {
    alert("The note cannot be empty");
  } else {
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const listElement = document.createElement("li");
    const noteTitle = document.createElement("span");
    const editNoteInput = document.createElement("input");
    const saveButton = document.createElement("button");

    noteTitle.innerText = noteInput.value;

    deleteButton.innerText = "Delete";
    editButton.innerText = "Edit";
    saveButton.innerText = "Save";

    deleteButton.classList.add("delete-button");
    editButton.classList.add("edit-button");

    editNoteInput.classList.add("hidden");
    saveButton.classList.add("hidden");

    editNoteInput.type = "text";
    editNoteInput.value = noteInput.value;
    listElement.appendChild(editNoteInput);

    listElement.appendChild(noteTitle);
    listElement.appendChild(editButton);
    listElement.appendChild(deleteButton);
    listElement.appendChild(saveButton);

    listElement.style.backgroundColor = "yellow"; // Default color of the rectangle.

    // Color has been picked up from the Picker.
    if (choosenColor) {
      listElement.style.backgroundColor = choosenColor; // Set background color with choosen Picker's color for the rectangle.
    }
    noteList.appendChild(listElement);

    // When editing note, hide some elements.
    function toggleEditNote() {
      deleteButton.classList.toggle("hidden");
      editButton.classList.toggle("hidden");
      editNoteInput.classList.toggle("hidden");
      noteTitle.classList.toggle("hidden");
      saveButton.classList.toggle("hidden");
    }

    editButton.addEventListener("click", () => {
      editNoteInput.focus();
      toggleEditNote();
    });

    deleteButton.addEventListener("click", () => {
      noteList.removeChild(listElement);
    });

    saveButton.addEventListener("click", () => {
      noteTitle.innerText = editNoteInput.value;
      toggleEditNote();
    });
  }
  noteInput.value = "";
  e.preventDefault();
}
