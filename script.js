const keyMapping = {
  'Backquote': ["`", "~", "ё", "Ё"],
  'Digit1': ["1", "!", "1", "!"],
  'Digit2': ["2", "@", "2", "\""],
  'Digit3': ["3", "#", "3", "№"],
  'Digit4': ["4", "$", "4", ";"],
  'Digit5': ["5", "%", "5", "%"],
  'Digit6': ["6", "^", "6", ":"],
  'Digit7': ["7", "&", "7", "?"],
  'Digit8': ["8", "*", "8", "*"],
  'Digit9': ["9", "(", "9", "("],
  'Digit0': ["0", ")", "0", ")"],
  'Minus': ["-", "_", "-", "_"],
  'Equal': ["=", "+", "=", "+"],
  'Backspace': ["Backspace"],
  'Tab': ["Tab"],
  'KeyQ': ["q", "Q", "й", "Й"],
  'KeyW': ["w", "W", "ц", "Ц"],
  'KeyE': ["e", "E", "у", "У"],
  'KeyR': ["r", "R", "к", "К"],
  'KeyT': ["t", "T", "е", "Е"],
  'KeyY': ["y", "Y", "н", "Н"],
  'KeyU': ["u", "U", "г", "Г"],
  'KeyI': ["i", "I", "ш", "Ш"],
  'KeyO': ["o", "O", "щ", "Щ"],
  'KeyP': ["p", "P", "з", "З"],
  'BracketLeft': ["[", "{", "х", "Х"],
  'BracketRight': ["]", "}", "ъ", "Ъ"],
  'Backslash': ["\\", "|", "\\", "/"],
  'Delete': ["Del"],
  'CapsLock': ["Caps Lock"],
  'KeyA': ["a", "A", "ф", "Ф"],
  'KeyS': ["s", "S", "ы", "Ы"],
  'KeyD': ["d", "D", "в", "В"],
  'KeyF': ["f", "F", "а", "А"],
  'KeyG': ["g", "G", "п", "П"],
  'KeyH': ["h", "H", "р", "Р"],
  'KeyJ': ["j", "J", "о", "О"],
  'KeyK': ["k", "K", "л", "Л"],
  'KeyL': ["l", "L", "д", "Д"],
  'Semicolon': [";", ":", "ж", "Ж"],
  'Quote': ["'", "\"", "э", "Э"],
  'Enter': ["Enter"],
  'ShiftLeft': ["Shift"],
  'KeyZ': ["z", "Z", "я", "Я"],
  'KeyX': ["x", "X", "ч", "Ч"],
  'KeyC': ["c", "C", "с", "С"],
  'KeyV': ["v", "V", "м", "М"],
  'KeyB': ["b", "B", "и", "И"],
  'KeyN': ["n", "N", "т", "Т"],
  'KeyM': ["m", "M", "ь", "Ь"],
  'Comma': [",", "<", "б", "Б"],
  'Period': [".", ">", "ю", "Ю"],
  'Slash': ["/", "?", ".", ","],
  'ArrowUp': ["up"],
  'ShiftRight': ["Shift"],
  'ControlLeft': ["Ctrl"],
  'MetaLeft': ["Win"],
  'AltLeft': ["Alt"],
  'Space': ["Space"],
  'AltRight': ["Alt"],
  'ArrowLeft': ["left"],
  'ArrowDown': ["down"],
  'ArrowRight': ["right"],
  'ControlRight': ["Ctrl"],
};


let mode = localStorage.getItem("keyboardMode") || 0;
mode = parseInt(mode);
const keys_list = Object.keys(keyMapping);


const listRow1 = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"];
const listRow2 = ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"];
const listRow3 = ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"];
const listRow4 = ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"];
const listRow5 = ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];



let ctrlPressed = false;
let altPressed = false;
let capsLock = false;


// create main container
const container = document.createElement("div");
container.id = "container";
container.setAttribute("class", "container");

// create textarea
const textarea = document.createElement("textarea");
textarea.id = "textarea";
textarea.setAttribute("class", "textarea");
container.appendChild(textarea);

// create buttons container
const buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("class", "buttons-container");
container.appendChild(buttonsContainer);

// create buttons row
const buttonsRow1 = document.createElement("div");
const buttonsRow2 = document.createElement("div");
const buttonsRow3 = document.createElement("div");
const buttonsRow4 = document.createElement("div");
const buttonsRow5 = document.createElement("div");

buttonsRow1.setAttribute("class", "buttons-row");
buttonsRow2.setAttribute("class", "buttons-row");
buttonsRow3.setAttribute("class", "buttons-row");
buttonsRow4.setAttribute("class", "buttons-row");
buttonsRow5.setAttribute("class", "buttons-row");

buttonsContainer.appendChild(buttonsRow1);
buttonsContainer.appendChild(buttonsRow2);
buttonsContainer.appendChild(buttonsRow3);
buttonsContainer.appendChild(buttonsRow4);
buttonsContainer.appendChild(buttonsRow5);

function createButtons(mode) {
  // create buttons for row 1
  for (let i = 0; i < listRow1.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = listRow1[i];
    button.innerHTML = keyMapping[listRow1[i]][mode];
    buttonsRow1.appendChild(button);
  }

  // create buttons for row 2
  for (let i = 0; i < listRow2.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = listRow2[i];
    button.innerHTML = keyMapping[listRow2[i]][mode];
    buttonsRow2.appendChild(button);
  }

  // create buttons for row 3
  for (let i = 0; i < listRow3.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = listRow3[i];
    button.innerHTML = keyMapping[listRow3[i]][mode];
    buttonsRow3.appendChild(button);
  }

  // create buttons for row 4
  for (let i = 0; i < listRow4.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = listRow4[i];
    button.innerHTML = keyMapping[listRow4[i]][mode];
    buttonsRow4.appendChild(button);
  }

  // create buttons for row 5
  for (let i = 0; i < listRow5.length; i++) {
    if (keyMapping[listRow5[i]][mode] === "Space") {
      const button = document.createElement("button");
      button.setAttribute("class", "button");
      button.id = listRow5[i];
      button.innerHTML = " ";
      button.style.width = "300px";
      buttonsRow5.appendChild(button);
      continue;
    }
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = listRow5[i];
    button.innerHTML = keyMapping[listRow5[i]][mode];
    buttonsRow5.appendChild(button);
  }
  document.body.appendChild(container);

}
if (mode === 0) {
  createButtons(0);
} else {
  createButtons(0);
  switchLanguage()
}

function shiftOnClick() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 1) {
      let button = document.getElementById(keys_list[i]);
      button.innerHTML = keyMapping[keys_list[i]][mode + 1];
    }
  }
}
function shiftOffClick() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 1) {
      let button = document.getElementById(keys_list[i]);
      button.innerHTML = keyMapping[keys_list[i]][mode];
    }
  }
}

function switchLanguage() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 2) {
      let button = document.getElementById(keys_list[i]);
      if (capsLock === false) {
        button.innerHTML = keyMapping[keys_list[i]][mode];
      } else {
        button.innerHTML = keyMapping[keys_list[i]][mode + 1];
      }
    }

  }
}

function typeLetter(id, char) {
  let letter = keyMapping[id][mode] || keyMapping[id][0];
  if (letter.length === 1) {
    textarea.value += char;
  }
}



// add event listener to buttons
document.addEventListener('keydown', function (event) {
  let key = event.code;

  if (key in keyMapping) {
    let button = document.getElementById(key);
    button.classList.add("active");

    setTimeout(() => {
      button.classList.remove("active");
    }, 300);

    if (keyMapping[key].length > 0 && keyMapping[key][0].length === 1) {
      event.preventDefault();
    }

    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      shiftOnClick();
    }

    if (key === 'ControlLeft' || key === 'ControlRight') {
      ctrlPressed = true;
    }

    if (key === 'AltLeft' || key === 'AltRight') {
      altPressed = true;
    }

    if (ctrlPressed && altPressed) {
      if (mode === 0) {
        mode = 2;
      } else if (mode === 2) {
        mode = 0;
      }
      switchLanguage();
      localStorage.setItem("keyboardMode", mode);
    }

    if (key === 'CapsLock') {
      if (capsLock === false) {
        capsLock = true;
        button.classList.add("active");
        shiftOnClick();
      } else {
        capsLock = false;
        button.classList.remove("active");
        shiftOffClick();
      }
    }

    typeLetter(key, button.innerHTML);

  }
});

document.addEventListener('keyup', function (event) {
  let key = event.code;
  if (key in keyMapping) {
    if (key === 'CapsLock') {
      return;
    }
    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      shiftOffClick();
    }

    if (key === 'ControlLeft' || key === 'ControlRight') {
      ctrlPressed = false;
    }
    if (key === 'AltLeft' || key === 'AltRight') {
      altPressed = false;
    }
  }
});
