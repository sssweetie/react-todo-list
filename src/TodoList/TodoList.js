import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    width: "50%",
    height: "64px",
    padding: "16px",
  },
};
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todoArray.map((todoElement) => {
        return (
          <TodoItem
            todoElement={todoElement}
            key={todoElement.id}
            onChange={props.changeCondition}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeCondition: PropTypes.func.isRequired,
};
export default TodoList;
