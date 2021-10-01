import React from "react";
import { pencil } from "./images/pencil";
import { garbage } from "./images/garbage";
import PropTypes from "prop-types";

const styles = {
  input: {
    margin: "16px",
    width: "32px",
    height: "32px",
  },
  li: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "flow",
    margin: "16px 0",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    fontSize: "16px",
    justifyContent: "center",
  },
  garbage: {
    width: "24px",
    height: "26,67px",
    margin: "18.67px 20px 18.67px 0",
    justifySelf: "end",
  },
  pencil: {
    width: "24,3px",
    height: "24,24px",
    margin: "19.15px 23.15px 20.56px auto",
  },
  a: {
    margin: "auto",
    marginLeft: "0",
  },
};
function TodoItem({ todoElement, onChange }) {
  const classes = [];

  if (todoElement.completed) {
    classes.push("completed");
  }

  return (
    <li style={styles.li}>
      <input
        type="checkbox"
        checked={todoElement.completed}
        style={styles.input}
        onChange={() => onChange(todoElement.id)}
      ></input>
      <a className={classes.join(" ")} style={styles.a}>
        {todoElement.title}
      </a>
      <img style={styles.pencil} src={pencil}></img>
      <img style={styles.garbage} src={garbage}></img>
    </li>
  );
}

TodoItem.propTypes = {
  todoElement: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
