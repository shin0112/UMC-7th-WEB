import { useState } from "react";
import "./App.css";

import TodoButton from "./components/button/todoButton";
import TodoInput from "./components/input/TodoInput";
import DeleteButton from "./components/button/DeleteButton";
import UpdateButton from "./components/button/UpdateButton";
import styled from "styled-components";
import { deleteTodo, getTodoList, patchTodo, postTodo } from "./apis/todo.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "./main.jsx";

function App() {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editTitle, setEditTitle] = useState("")
  const [editContent, setEditContent] = useState("");

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ search }),
    queryKey: ["todos", search],
  })

  const { mutate: postTodoMutation } = useMutation(({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      })
    },
  }))

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      })
    },
  })

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      })
    }
  })

  const addTodo = () => {
    if (title === "" || content === "") {
      return;
    }

    postTodoMutation({ title, content });

    setTitle("");
    setContent("");
  };

  const updateTodo = (id, title, content) => {
    if (editTitle === "" && editContent === "") {
      setEditingId(null);
      return;
    }

    patchTodoMutation({
      id,
      title: editTitle ? editTitle : title,
      content: editContent ? editContent : content
    });

    setEditTitle("");
    setEditContent("");
    setEditingId(null);
  }

  return (
    <Container>
      <h1>ToDo 검색</h1>
      <TodoInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoInputContainer>
        <TodoInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <TodoInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
        />
        <TodoButton onClick={addTodo} />
      </TodoInputContainer>

      <TodoListContainer>
        {isPending ? (
          <div>로딩중...</div>
        ) : (
          todos[0]?.map((todo) => (
          <div key={todo.id}>
            {editingId === todo.id ? (
              <TodoContainer>
                <input type="checkbox" defaultChecked={todo.checked}/>
                <TextContainer>
                  <TodoInput
                    defaultValue={todo.title}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <TodoInput
                    defaultValue={todo.content}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                </TextContainer>
                <ButtonContainer>
                  <UpdateButton
                    onClick={() => updateTodo(
                      todo.id,
                      todo.title,
                      todo.content
                    )}
                    buttonText="수정 완료"
                  />
                </ButtonContainer>
              </TodoContainer>
            ) : (
              <TodoContainer>
                <input
                  type="checkbox"
                  defaultChecked={todo.checked}
                  onChange={(e) => patchTodoMutation({
                    id: todo.id,
                    checked: !todo.checked
                  })}
                />
                <TextContainer>
                  <Title>{todo.title}</Title>
                  <Content>{todo.content}</Content>
                </TextContainer>
                <ButtonContainer>
                  <UpdateButton
                    onClick={() => setEditingId(todo.id)}
                    buttonText="수정"
                  />
                  <DeleteButton
                    onClick={() => deleteTodoMutation({ id: todo.id })}
                  />
                </ButtonContainer>
              </TodoContainer>
            )}
          </div>
          )))}
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

const Content = styled.div`

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  width: 30%;
`

export default App;
