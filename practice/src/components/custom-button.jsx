import styled from "styled-components";

export const CustomButton = () => {
  return <CustomButtonStyle>커스텀 버튼</CustomButtonStyle>;
};

const CustomButtonStyle = styled.button`
  background-color: purple;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
