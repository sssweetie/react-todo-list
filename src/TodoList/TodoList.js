import React from "react";
import { pencil } from "./images/pencil";
import { garbage } from "./images/garbage";
const styles = {
  ul: {
    listStyle: "none",
    width: "50%",
    height: "64px",
    padding: "16px",
  },
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
function TodoList() {
  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <input type="checkbox" style={styles.input}></input>
        <a style={styles.a}>111111</a>
        <img style={styles.pencil} src={pencil}></img>
        <img style={styles.garbage} src={garbage}></img>
      </li>
    </ul>
  );
}

export default TodoList;
