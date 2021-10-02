import React, { useState } from "react";
const styles = {
  span: {
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    borderRadius: "8px",
    margin: "0 16px",
    marginTop: "16px",
    padding: "16px 0",
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    borderRadius: "8px",
    width: "70%",
    margin: "0 16px",
    background: "#FFFFFF",
    border: "1px solid #E0E0E0",
  },
  button: {
    marginLeft: "auto",
    marginRight: "16px",
    padding: "10px",
    width: "100px",
    height: "40px",
    background: "#2F80ED",
    borderRadius: "8px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#fff",
    border: "0px",
  },
};
function AddElement() {
  const [value, setValue] = useState(" ");

  return (
    <span style={styles.span}>
      <input placeholder="Input text here..." style={styles.input} />
      <button style={styles.button} type="submit">
        Add
      </button>
    </span>
  );
}
export default AddElement;
