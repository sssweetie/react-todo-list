import React, { useContext } from "react";
import { pencil } from "./images/pencil";
import { garbage } from "./images/garbage";
import PropTypes from "prop-types";
import Context from "../Context";

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
    marginTop: "0px",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    fontSize: "16px",
    justifyContent: "center",
  },
  garbage: {
    "&:hover": {
      width: "30px",
      height: "30px",
      cursor: "pointer",
    },
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
function TodoItem({ todoElement }) {
  const classes = [];
  const { removeElement, changeStatusElement } = useContext(Context);
  if (todoElement.completed) {
    classes.push("completed");
  }

  return (
    <li style={styles.li}>
      <input
        type="checkbox"
        checked={todoElement.completed}
        style={styles.input}
        onChange={() => changeStatusElement(todoElement.id)}
      ></input>
      <a className={classes.join(" ")} style={styles.a}>
        {todoElement.title}
      </a>
      <img style={styles.pencil} src={pencil}></img>{" "}
      <img
        style={styles.garbage}
        onClick={() => removeElement(todoElement.id)}
        src={garbage}
      ></img>
    </li>
  );
}

TodoItem.propTypes = {
  todoElement: PropTypes.object.isRequired,
  getElementId: PropTypes.func.isRequired,
};
export default TodoItem;
