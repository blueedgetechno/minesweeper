'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './view/root.js'

export default class MinesweeperView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');

    this.element.classList.add('minesweeper');

    ReactDOM.render(<div> <Root/></div>, this.element);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle() {
    return 'Minesweeper';
  }

  getURI() {
      return 'atom://atomforces';
  }

}
