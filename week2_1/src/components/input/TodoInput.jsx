import styled from "styled-components";

const TodoInput = (props) => {
  const {
    type,
    defaultValue,
    value,
    placeholder,
    onChange
  } = props;
  return (
    <Input
      type={type}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const Input = styled.input`
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
`;

export default TodoInput;
