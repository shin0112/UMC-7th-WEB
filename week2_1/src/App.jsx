import { useState } from "react";
import "./App.css";

import TodoButton from "./components/button/todoButton";
import TodoInput from "./components/input/TodoInput";
import DeleteButton from "./components/button/DeleteButton";
import UpdateButton from "./components/button/UpdateButton";

function App() {
  const [id, setId] = useState(2);
  const [editingId, setEditingId] = useState(null);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "희연, 혜연, 천민" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: id + 1, task: text }]);
    setId(id + 1);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteTodoList = () => {
    setTodos([]);
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TodoButton onClick={addTodo} />
      </form>

      <div>
        <button onClick={deleteTodoList}>전체 삭제하기</button>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex", gap: "20px" }}>
            {editingId === todo.id ? (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}. </p>
                <TodoInput
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <DeleteButton onClick={() => deleteTodo(todo.id)} />
                <UpdateButton
                  onClick={() => updateTodo(todo.id, editText)}
                  buttonText="수정 완료"
                />
              </div>
            ) : (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}. </p>
                <p>{todo.task}</p>
                <DeleteButton onClick={() => deleteTodo(todo.id)} />
                <UpdateButton
                  onClick={() => setEditingId(todo.id)}
                  buttonText="수정 진행"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
