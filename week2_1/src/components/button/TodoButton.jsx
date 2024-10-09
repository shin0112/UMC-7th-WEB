const TodoButton = (props) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} type="submit">
      할 일 등록
    </button>
  );
};

export default TodoButton;
