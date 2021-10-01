import React from "react";
import TodoList from "./TodoList/TodoList";

function App() {
  const [todoArray, setTodoArray] = React.useState([
    { id: 1, completed: false, title: "Todo my homework" },
    { id: 2, completed: false, title: "Check my hometasks" },
  ]);

  function changeConditionMain(id) {
    setTodoArray(
      todoArray.map((todoElement) => {
        if (todoElement.id === id) {
          todoElement.completed = !todoElement.completed;
        }
        return todoElement;
      })
    );
  }
  return (
    <TodoList todoArray={todoArray} changeCondition={changeConditionMain} />
  );
}

export default App;
