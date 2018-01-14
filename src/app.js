import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';
import { List, Map } from 'immutable';
import { PageHeader } from 'react-bootstrap';
const UUID = require('uuidjs')

const starterTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

render(
  <div class='container'>
  <PageHeader>React-Redux-Immutable Todo</PageHeader>
  <TodoList todos={starterTodos} />
  </div>,
  document.getElementById('app')
);