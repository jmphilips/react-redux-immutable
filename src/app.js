import React from 'react';
import { render } from 'react-dom';
const UUID = require('uuidjs')

const starterTodos = [
  { id: UUID.generate(), isDone: true,  text: 'make components' },
  { id: UUID.generate(), isDone: false, text: 'design actions' },
  { id: UUID.generate(), isDone: false, text: 'implement reducer' },
  { id: UUID.generate(), isDone: false, text: 'connect components' }
];

render(
  <h1>Hello</h1>,
  document.getElementById('app')
);