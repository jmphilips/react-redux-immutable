import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export function Todo(props) {
  const { todo } = props;
  if(todo.get('isDone')) {
    return <strike>{todo.get('text')}</strike>;
  } else {
    return <span>{todo.get('text')}</span>;
  }
}

export function TodoList(props) {
  const { todos } = props;
  return (
    <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ListGroup className='todo__list'>
        {todos.map(t => (
          <ListGroupItem key={t.get("id")} className='todo__item' bsStyle={t.get('isDone') ? 'success' : 'info'}>
            <Todo todo={t} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}