import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers';
import { PageHeader } from 'react-bootstrap';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <div className="container">
      <PageHeader>React Todo List</PageHeader>
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('app')
);