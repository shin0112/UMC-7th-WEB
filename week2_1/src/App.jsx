import { useState } from "react";
import "./App.css";

import TodoButton from "./components/button/todoButton";
import TodoInput from "./components/input/TodoInput";
import DeleteButton from "./components/button/DeleteButton";
import UpdateButton from "./components/button/UpdateButton";
import styled from "styled-components";

function App() {
  const [id, setId] = useState(2);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, title: "투두", task: "투두 만들어보기" },
    { id: 2, title: "희연", task: "희연, 혜연, 천민" },
  ]);

  const addTodo = () => {
    if (title === "" || text === "") {
      return;
    }

    setTodos((prev) => [...prev, { id: id + 1, title: title, task: text }]);
    setId(id + 1);
    setTitle("");
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteTodoList = () => {
    setTodos([]);
  };

  const updateTodo = (id, title, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? {
          ...item,
          title: editTitle === "" ? title : editTitle,
          task: editText === "" ? text : editText
        }
        : item))
    );
    setEditingId(null);
    setEditTitle("");
    setEditText("");
  };

  console.log(todos);

  return (
    <Container>
      <TodoInputContainer>
        <TodoInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <TodoInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="내용을 입력해주세요"
        />
        <TodoButton onClick={addTodo} />
      </TodoInputContainer>

      <TodoListContainer>
        <button onClick={deleteTodoList}>전체 삭제하기</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editingId === todo.id ? (
              <TodoContainer>
                <input type="checkbox"/>
                <TextContainer>
                  <TodoInput
                    defaultValue={todo.title}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <TodoInput
                    defaultValue={todo.task}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </TextContainer>
                <ButtonContainer>
                  <UpdateButton
                    onClick={() => updateTodo(todo.id, todo.title, todo.task)}
                    buttonText="수정 완료"
                  />
                </ButtonContainer>
              </TodoContainer>
            ) : (
              <TodoContainer>
                <input type="checkbox"/>
                <TextContainer>
                  <Title>{todo.title}</Title>
                  <Task>{todo.task}</Task>
                </TextContainer>
                <ButtonContainer>
                  <UpdateButton
                    onClick={() => setEditingId(todo.id)}
                    buttonText="수정"
                  />
                  <DeleteButton onClick={() => deleteTodo(todo.id)}/>
                </ButtonContainer>
              </TodoContainer>
            )}
          </div>
        ))}
      </TodoListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const TodoInputContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 80%;
`

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`

const TodoContainer = styled.div`
  border: 1px solid #AAAAAA;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 70%;
`

const Title = styled.div`
  font-weight: bold;
`

const Task = styled.div`

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  width: 30%;
`

export default App;
