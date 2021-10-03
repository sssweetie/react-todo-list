import React, { useState } from "react";
import PropTypes from "prop-types";
const styles = {
  form: {
    border: "1px solid #E0E0E0",
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
    width: "80%",
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
    fontWeight: "bold",
    fontSize: "16px",
    color: "#fff",
    border: "0px",
  },
};

function AddElement({ onCreate }) {
  const [text, setText] = useState(" ");

  function Handler(event) {
    event.preventDefault();

    if (text.trim()) {
      onCreate(text);
      setText(" ");
    }
  }
  return (
    <form style={styles.form} onSubmit={Handler}>
      <input
        value={text}
        style={styles.input}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
}

AddElement.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddElement;
