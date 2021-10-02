import React from "react";
import TodoList from "./TodoList/TodoList";
import Context from "./Context";
import AddElement from "./TodoList/AddElement";

function App() {
  const [todoArray, setTodoArray] = React.useState([
    { id: 1, completed: false, title: "Todo my homework" },
    { id: 2, completed: false, title: "Check my hometasks" },
  ]);

  function changeStatusElement(id) {
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
    setTodoArray(todoArray.filter((todoElement) => todoElement.id !== id));
  }

  return (
    <Context.Provider value={{ removeElement, changeStatusElement }}>
      <form>
        <AddElement />
        <TodoList todoArray={todoArray} />
      </form>
    </Context.Provider>
  );
}

export default App;
