import styled from "styled-components";

const TodoButton = (props) => {
  const { onClick } = props;

  return (
    <Button onClick={onClick} type="submit">
      ToDo 생성
    </Button>
  );
};

const Button = styled.button`
  background-color: #EEEEEE;
  border: none;
  padding: 5px;
  color: #AAAAAA;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

export default TodoButton;
