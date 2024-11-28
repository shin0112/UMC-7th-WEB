import styled from "styled-components";

const DeleteButton = (props) => {
  const { onClick } = props;
  return <Button onClick={onClick}>삭제</Button>;
};

const Button = styled.button`
  background-color: #EEEEEE;
  border: none;
  padding: 10px 0px;
  color: #333333;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  width: 45%;
`;

export default DeleteButton;
