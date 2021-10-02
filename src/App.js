import React from "react";
import TodoList from "./TodoList/TodoList";
import Context from "./Context";

function App() {
  const [todoArray, setTodoArray] = React.useState([
    { id: 1, completed: false, title: "Todo my homework" },
    { id: 2, completed: false, title: "Check my hometasks" },
  ]);

  function changeCheckedApp(id) {
    setTodoArray(
      todoArray.map((todoElement) => {
        if (todoElement.id === id) {
          todoElement.completed = !todoElement.completed;
        }
        return todoElement;
      })
    );
  }

  function removeElement(id) {
    setTodoArray(todoArray.filter(todoElement => todoElement.id !== id))
  }

  return (
    <Context.Provider value={{ removeElement }}>
      <TodoList todoArray={todoArray} changeChecked={changeCheckedApp} />
    </Context.Provider>
  );
}

export default App;
