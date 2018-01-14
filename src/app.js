import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';
import { List, Map } from 'immutable';
const UUID = require('uuidjs')

const starterTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

render(
  <TodoList todos={starterTodos} />,
  document.getElementById('app')
);