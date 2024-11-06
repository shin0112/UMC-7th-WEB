import { createContext, useState } from "react";

// 데이터 받기
export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
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
    <TodoContext.Provider
      value={{
        id,
        setId,
        todos,
        setTodos,
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
