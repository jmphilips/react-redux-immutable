import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  ButtonToolbar
} from "react-bootstrap";

export function Todo(props) {
  const { todo } = props;
  return (
  <div className="container">
    <p>{todo.text}</p>
  </div>
  )
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, deleteTodo } = props;

  const onSubmit = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = event.which == 13;
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = "";
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);
  const deleteClick = id => event => deleteTodo(id);

  return (
    <div className="todo">
      <div className="container">
      <input
        type="text"
        className="input-group"
        placeholder="Add todo"
        onKeyDown={onSubmit}
      />
      </div>
      <ListGroup className="todo__list">
        {todos.map(t => (
          <ListGroupItem
            key={t.get("id")}
            className="todo__item"
            bsStyle={t.get("isDone") ? "success" : "info"}
          >
            <Todo todo={t.toJS()} />
            <ButtonToolbar>
              <Button onClick={toggleClick(t.get("id"))}>Toggle</Button>
              <Button onClick={deleteClick(t.get("id"))}>Delete</Button>
            </ButtonToolbar>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
