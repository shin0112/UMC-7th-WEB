import { useContext } from "react";
import "./App.css";

import TodoButton from "./components/button/todoButton";
import TodoInput from "./components/input/TodoInput";
import DeleteButton from "./components/button/DeleteButton";
import UpdateButton from "./components/button/UpdateButton";
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    deleteTodoList,
    updateTodo,
  } = useContext(TodoContext);

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
