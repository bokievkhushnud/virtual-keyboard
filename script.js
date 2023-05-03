const keyMapping = {
  Backquote: ['`', '~', 'ё', 'Ё'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', ';'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', ':'],
  Digit7: ['7', '&', '7', '?'],
  Digit8: ['8', '*', '8', '*'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  Backspace: ['Backspace'],
  Tab: ['Tab'],
  KeyQ: ['q', 'Q', 'й', 'Й'],
  KeyW: ['w', 'W', 'ц', 'Ц'],
  KeyE: ['e', 'E', 'у', 'У'],
  KeyR: ['r', 'R', 'к', 'К'],
  KeyT: ['t', 'T', 'е', 'Е'],
  KeyY: ['y', 'Y', 'н', 'Н'],
  KeyU: ['u', 'U', 'г', 'Г'],
  KeyI: ['i', 'I', 'ш', 'Ш'],
  KeyO: ['o', 'O', 'щ', 'Щ'],
  KeyP: ['p', 'P', 'з', 'З'],
  BracketLeft: ['[', '{', 'х', 'Х'],
  BracketRight: [']', '}', 'ъ', 'Ъ'],
  Backslash: ['\\', '|', '\\', '/'],
  Delete: ['Del'],
  CapsLock: ['Caps Lock'],
  KeyA: ['a', 'A', 'ф', 'Ф'],
  KeyS: ['s', 'S', 'ы', 'Ы'],
  KeyD: ['d', 'D', 'в', 'В'],
  KeyF: ['f', 'F', 'а', 'А'],
  KeyG: ['g', 'G', 'п', 'П'],
  KeyH: ['h', 'H', 'р', 'Р'],
  KeyJ: ['j', 'J', 'о', 'О'],
  KeyK: ['k', 'K', 'л', 'Л'],
  KeyL: ['l', 'L', 'д', 'Д'],
  Semicolon: [';', ':', 'ж', 'Ж'],
  Quote: ["'", '"', 'э', 'Э'],
  Enter: ['Enter'],
  ShiftLeft: ['Shift'],
  KeyZ: ['z', 'Z', 'я', 'Я'],
  KeyX: ['x', 'X', 'ч', 'Ч'],
  KeyC: ['c', 'C', 'с', 'С'],
  KeyV: ['v', 'V', 'м', 'М'],
  KeyB: ['b', 'B', 'и', 'И'],
  KeyN: ['n', 'N', 'т', 'Т'],
  KeyM: ['m', 'M', 'ь', 'Ь'],
  Comma: [',', '<', 'б', 'Б'],
  Period: ['.', '>', 'ю', 'Ю'],
  Slash: ['/', '?', '.', ','],
  ArrowUp: ['&#8593;'],
  ShiftRight: ['Shift'],
  ControlLeft: ['Ctrl'],
  MetaLeft: ['Win'],
  AltLeft: ['Alt'],
  Space: ['Space'],
  AltRight: ['Alt'],
  ArrowLeft: ['&#8592;'],
  ArrowDown: ['&#8595;'],
  ArrowRight: ['&#8594;'],
  ControlRight: ['Ctrl'],
};
const listRow1 = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
];
const listRow2 = [
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
];
const listRow3 = [
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
];
const listRow4 = [
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',

];
const listRow5 = [
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

const letters = [
  [
    'KeyA',
    'KeyB',
    'KeyC',
    'KeyD',
    'KeyE',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyI',
    'KeyJ',
    'KeyK',
    'KeyL',
    'KeyM',
    'KeyN',
    'KeyO',
    'KeyP',
    'KeyQ',
    'KeyR',
    'KeyS',
    'KeyT',
    'KeyU',
    'KeyV',
    'KeyW',
    'KeyX',
    'KeyY',
    'KeyZ',
  ],
  [
    'Backquote',
    'KeyA',
    'KeyB',
    'KeyV',
    'KeyG',
    'KeyD',
    'KeyE',
    'KeyZ',
    'KeyI',
    'KeyK',
    'KeyL',
    'KeyM',
    'KeyN',
    'KeyO',
    'KeyP',
    'KeyR',
    'KeyS',
    'KeyT',
    'KeyU',
    'KeyF',
    'KeyH',
    'KeyC',
    'KeyY',
    'KeyX',
    'KeyW',
    'KeyQ',
    'KeyJ',
    'BracketLeft',
    'BracketRight',
    'Semicolon',
    'Quote',
    'Comma',
    'Period',
  ],
];

let letterKeys = [];

let mode = localStorage.getItem('keyboardMode') || 0;
mode = parseInt(mode, 10);
const keysList = Object.keys(keyMapping);
let ctrlPressed = false;
let altPressed = false;
let capsLock = false;

// create main container
const container = document.createElement('div');
container.id = 'container';
container.setAttribute('class', 'container');

// create textarea
const textarea = document.createElement('textarea');
textarea.id = 'textarea';
textarea.setAttribute('class', 'textarea');
container.appendChild(textarea);

// create buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.setAttribute('class', 'buttons-container');
container.appendChild(buttonsContainer);

const switchLanguageText = document.createElement('h3');
switchLanguageText.setAttribute('class', 'switch-language-text');
switchLanguageText.innerHTML = 'Switch language Linux: Ctrl + Alt';
document.body.appendChild(switchLanguageText);

// create buttons row
const buttonsRow1 = document.createElement('div');
const buttonsRow2 = document.createElement('div');
const buttonsRow3 = document.createElement('div');
const buttonsRow4 = document.createElement('div');
const buttonsRow5 = document.createElement('div');

buttonsRow1.setAttribute('class', 'buttons-row');
buttonsRow2.setAttribute('class', 'buttons-row');
buttonsRow3.setAttribute('class', 'buttons-row');
buttonsRow4.setAttribute('class', 'buttons-row');
buttonsRow5.setAttribute('class', 'buttons-row');

buttonsContainer.appendChild(buttonsRow1);
buttonsContainer.appendChild(buttonsRow2);
buttonsContainer.appendChild(buttonsRow3);
buttonsContainer.appendChild(buttonsRow4);
buttonsContainer.appendChild(buttonsRow5);

function switchLanguage() {
  for (let i = 0; i < keysList.length; i += 1) {
    if (keyMapping[keysList[i]].length > 2) {
      const button = document.getElementById(keysList[i]);
      if (capsLock === false) {
        button.innerHTML = keyMapping[keysList[i]][mode];
      } else {
        button.innerHTML = keyMapping[keysList[i]][mode + 1];
      }
    }
  }
}

function shiftOnClick() {
  for (let i = 0; i < keysList.length; i += 1) {
    if (keyMapping[keysList[i]].length > 1) {
      const button = document.getElementById(keysList[i]);
      if (capsLock === false) {
        button.innerHTML = keyMapping[keysList[i]][mode + 1];
      } else {
        button.innerHTML = keyMapping[keysList[i]][mode];
      }
    }
  }
}
function shiftOffClick() {
  for (let i = 0; i < keysList.length; i += 1) {
    if (keyMapping[keysList[i]].length > 1) {
      const button = document.getElementById(keysList[i]);
      if (capsLock === false) {
        button.innerHTML = keyMapping[keysList[i]][mode];
      } else {
        button.innerHTML = keyMapping[keysList[i]][mode + 1];
      }
    }
  }
}

function typeLetter(id, char, event) {
  let letter = char;
  if (id === 'Tab') {
    // Handle the Tab key
    letter = '    '; // 4 spaces for horizontal indent
  }
  if (char === '&amp;') {
    letter = '&';
  }
  if (char === '&lt;') {
    letter = '<';
  }
  if (char === '&gt;') {
    letter = '>';
  }

  if (letter.length === 1 || id === 'Tab') {
    // Get cursor position
    const cursorPosition = textarea.selectionStart;
    // Check if the cursor is inside the textarea
    if (document.activeElement === textarea || event.type === 'click') {
      // Insert the typed character at the current cursor position
      const beforeCursor = textarea.value.slice(0, cursorPosition);
      const afterCursor = textarea.value.slice(cursorPosition);
      textarea.value = beforeCursor + letter + afterCursor;
      textarea.selectionStart = cursorPosition + letter.length;
      textarea.selectionEnd = cursorPosition + letter.length;
    } else {
      // Add the typed character to the end of the textarea content
      textarea.value += letter;
    }
  }
}
const [letterKeysEng, letterKeysRu] = letters;
function onCapsLock() {
  if (mode === 0) {
    letterKeys = letterKeysEng;
  } else {
    letterKeys = letterKeysRu;
  }
  for (let i = 0; i < letterKeys.length; i += 1) {
    if (keyMapping[letterKeys[i]].length > 1) {
      const button = document.getElementById(letterKeys[i]);
      button.innerHTML = keyMapping[letterKeys[i]][mode + 1];
    }
  }
}

function offCapsLock() {
  for (let i = 0; i < letterKeys.length; i += 1) {
    if (keyMapping[letterKeys[i]].length > 1) {
      const button = document.getElementById(letterKeys[i]);
      button.innerHTML = keyMapping[letterKeys[i]][mode];
    }
  }
}

function btnOnClick(key, event) {
  if (key in keyMapping) {
    const button = document.getElementById(key);
    button.classList.add('active');

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
      localStorage.setItem('keyboardMode', mode);
    }

    if (key === 'CapsLock') {
      if (capsLock === false) {
        capsLock = true;
        button.classList.add('active');
        onCapsLock();
      } else {
        capsLock = false;
        button.classList.remove('active');
        offCapsLock();
      }
    }

    typeLetter(key, button.innerHTML, event);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.code;
  if (key in keyMapping) {
    if (keyMapping[key].length > 1 || key === 'Space' || key === 'Tab' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
      // Add the check for the Space key
      event.preventDefault();
    }
    btnOnClick(key, event);
  }
});

document.addEventListener('keyup', (event) => {
  const key = event.code;
  if (key in keyMapping) {
    if (key === 'CapsLock') {
      return;
    }
    const button = document.getElementById(key);
    button.classList.remove('active');

    if (key === 'ShiftLeft' || (key === 'ShiftRight' && capsLock === false)) {
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

function buttonClickHandler(event) {
  event.preventDefault(); // Prevent default behavior
  const button = event.target;
  const key = button.id;

  btnOnClick(key, event);

  setTimeout(() => {
    button.classList.remove('active');
  }, 100);

  textarea.focus(); // Set focus to the textarea
}

// using class from ES6
class Button {
  constructor(id, text, className) {
    this.id = id;
    this.text = text;
    this.className = className;
  }

  createButton() {
    const button = document.createElement('button');
    button.setAttribute('class', this.className);
    button.id = this.id;
    button.innerHTML = this.text;
    button.addEventListener('click', buttonClickHandler);

    return button;
  }
}

function createButtons(m) {
  // create buttons for row 1
  for (let i = 0; i < listRow1.length; i += 1) {
    const button = new Button(listRow1[i], keyMapping[listRow1[i]][m], 'button').createButton();
    buttonsRow1.appendChild(button);
  }

  // create buttons for row 2
  for (let i = 0; i < listRow2.length; i += 1) {
    const button = new Button(listRow2[i], keyMapping[listRow2[i]][m], 'button').createButton();
    buttonsRow2.appendChild(button);
  }

  // create buttons for row 3
  for (let i = 0; i < listRow3.length; i += 1) {
    const button = new Button(listRow3[i], keyMapping[listRow3[i]][m], 'button').createButton();
    buttonsRow3.appendChild(button);
  }

  // create buttons for row 4
  for (let i = 0; i < listRow4.length; i += 1) {
    const button = new Button(listRow4[i], keyMapping[listRow4[i]][m], 'button').createButton();
    buttonsRow4.appendChild(button);
  }

  // create buttons for row 5
  for (let i = 0; i < listRow5.length; i += 1) {
    if (keyMapping[listRow5[i]][m] === 'Space') {
      const button = new Button(listRow5[i], ' ', 'button space_btn').createButton();
      buttonsRow5.appendChild(button);
    } else {
      const button = new Button(listRow5[i], keyMapping[listRow5[i]][m], 'button').createButton();

      buttonsRow5.appendChild(button);
    }
  }
  document.body.appendChild(container);
}

if (mode === 0) {
  createButtons(0);
} else {
  createButtons(0);
  switchLanguage();
}
