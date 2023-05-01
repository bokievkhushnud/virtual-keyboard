const keyMapping = {
  192: ["`", "~", "ё", "Ё"],
  49: ["1", "!", "1", "!"],
  50: ["2", "@", "2", '"'],
  51: ["3", "#", "3", "№"],
  52: ["4", "$", "4", ";"],
  53: ["5", "%", "5", "%"],
  54: ["6", "^", "6", ":"],
  55: ["7", "&", "7", "?"],
  56: ["8", "*", "8", "*"],
  57: ["9", "(", "9", "("],
  48: ["0", ")", "0", ")"],
  189: ["-", "_", "-", "_"],
  187: ["=", "+", "=", "+"],
  8: ["Backspace"],
  9: ["Tab"],
  81: ["q", "Q", "й", "Й"],
  87: ["w", "W", "ц", "Ц"],
  69: ["e", "E", "у", "У"],
  82: ["r", "R", "к", "К"],
  84: ["t", "T", "е", "Е"],
  89: ["y", "Y", "н", "Н"],
  85: ["u", "U", "г", "Г"],
  73: ["i", "I", "ш", "Ш"],
  79: ["o", "O", "щ", "Щ"],
  80: ["p", "P", "з", "З"],
  219: ["[", "{", "х", "Х"],
  221: ["]", "}", "ъ", "Ъ"],
  220: ["\\", "|", "\\", "/"],
  46: ["Del"],
  20: ["Caps Lock"],
  65: ["a", "A", "ф", "Ф"],
  83: ["s", "S", "ы", "Ы"],
  68: ["d", "D", "в", "В"],
  70: ["f", "F", "а", "А"],
  71: ["g", "G", "п", "П"],
  72: ["h", "H", "р", "Р"],
  74: ["j", "J", "о", "О"],
  75: ["k", "K", "л", "Л"],
  76: ["l", "L", "д", "Д"],
  186: [";", ":", "ж", "Ж"],
  222: ["'", '"', "э", "Э"],
  13: ["Enter"],
  16: ["Shift"],
  90: ["z", "Z", "я", "Я"],
  88: ["x", "X", "ч", "Ч"],
  67: ["c", "C", "с", "С"],
  86: ["v", "V", "м", "М"],
  66: ["b", "B", "и", "И"],
  78: ["n", "N", "т", "Т"],
  77: ["m", "M", "ь", "Ь"],
  188: [",", "<", "б", "Б"],
  190: [".", ">", "ю", "Ю"],
  191: ["/", "?", ".", ","],
  38: ["&#8593;"],
  17: ["Ctrl"],
  91: ["Win"],
  18: ["Alt"],
  32: ["Space"],
  37: ["&#8592;"],
  40: ["&#8595;"],
  39: ["&#8594;"],

};
let mode = 0;

const listRow1 = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];
const listRow2 = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46];
const listRow3 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const listRow4 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16];
const listRow5 = [17, 91, 18, 32, 18, 37, 40, 39, 17];


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
    button.id = keyMapping[listRow1[i]];
    button.innerHTML = keyMapping[listRow1[i]][mode];
    buttonsRow1.appendChild(button);
  }

  // create buttons for row 2
  for (let i = 0; i < listRow2.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = keyMapping[listRow2[i]];
    button.innerHTML = keyMapping[listRow2[i]][mode];
    buttonsRow2.appendChild(button);
  }

  // create buttons for row 3
  for (let i = 0; i < listRow3.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = keyMapping[listRow3[i]];
    button.innerHTML = keyMapping[listRow3[i]][mode];
    buttonsRow3.appendChild(button);
  }

  // create buttons for row 4
  for (let i = 0; i < listRow4.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = keyMapping[listRow4[i]];
    button.innerHTML = keyMapping[listRow4[i]][mode];
    buttonsRow4.appendChild(button);
  }

  // create buttons for row 5
  for (let i = 0; i < listRow5.length; i++) {
    if (keyMapping[listRow5[i]][mode] === "Space") {
      const button = document.createElement("button");
      button.setAttribute("class", "button");
      button.id = keyMapping[listRow5[i]];
      button.innerHTML = "";
      button.style.width = "400px";
      buttonsRow5.appendChild(button);
      continue;
    }
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.id = keyMapping[listRow5[i]];
    button.innerHTML = keyMapping[listRow5[i]][mode];
    buttonsRow5.appendChild(button);
  }



  document.body.appendChild(container);

}
createButtons(0);

const keys_list = Object.keys(keyMapping);


function shiftOnClick() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 1) {
      let button = document.getElementById(keyMapping[keys_list[i]]);
      button.innerHTML = keyMapping[keys_list[i]][mode + 1];
    }
  }
}

function shiftOffClick() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 1) {

      let button = document.getElementById(keyMapping[keys_list[i]]);
      button.innerHTML = keyMapping[keys_list[i]][mode];
    }
  }
}

function switchLanguage() {
  for (let i = 0; i < keys_list.length; i++) {
    if (keyMapping[keys_list[i]].length > 2) {
      let button = document.getElementById(keyMapping[keys_list[i]]);
      if (capsLock === false) {
        button.innerHTML = keyMapping[keys_list[i]][mode];
      }
      else {
        button.innerHTML = keyMapping[keys_list[i]][mode + 1];
      }
    }
  }
}

function typeLetter(id,char) {
  let letter = keyMapping[id][mode] || keyMapping[id][0];
  if (letter.length === 1) {
    textarea.value += char;
  }
}



// add event listener to buttons
document.addEventListener('keydown', function (event) {
  let key = event.keyCode;

  if (key in keyMapping) {

    let button = document.getElementById(keyMapping[key]);
    button.classList.add("active");

    if (key === 16) {
      shiftOnClick();
    }

    if (key === 17) {
      ctrlPressed = true;
    }

    if (key === 18) {
      altPressed = true;
    }

    if (ctrlPressed && altPressed) {
      if (mode === 0) {
        mode = 2;
      }
      else if (mode === 2) {
        mode = 0;
      }
      switchLanguage();
    }

    if (key === 20) {
      if (capsLock === false) {
        capsLock = true;
        button.classList.add("active");
        shiftOnClick();
      }
      else {
        capsLock = false;
        button.classList.remove("active");
        shiftOffClick();
      }
    }

    typeLetter(key, button.innerHTML);

    
  }
});

document.addEventListener('keyup', function (event) {
  let key = event.keyCode;
  if (key in keyMapping) {
    if (key === 20) {
      return;
    }

    let button = document.getElementById(keyMapping[key]);
    button.classList.remove("active");



    if (key === 16) {
      shiftOffClick();
    }

    if (key === 17) {
      ctrlPressed = false;
    }
    if (key === 18) {
      altPressed = false;
    }

  }

})