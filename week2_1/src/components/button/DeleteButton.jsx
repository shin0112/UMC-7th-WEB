const DeleteButton = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>삭제하기</button>;
};

export default DeleteButton;
