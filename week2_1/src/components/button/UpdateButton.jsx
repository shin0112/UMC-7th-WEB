const UpdateButton = (props) => {
  const { onClick, buttonText } = props;
  return <button onClick={onClick}>{buttonText}</button>;
};

export default UpdateButton;
