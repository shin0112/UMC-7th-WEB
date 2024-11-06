const TodoInput = (props) => {
  const { type, defaultValue, value, onChange } = props;
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
};

export default TodoInput;
