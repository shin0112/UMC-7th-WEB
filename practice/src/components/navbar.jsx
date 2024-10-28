import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <NavBar>
      <Logo to="/">YONGCHA</Logo>
      <ButtonContainer>
        <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
        <SignUpButton onClick={() => navigate("/signup")}>
          회원가입
        </SignUpButton>
      </ButtonContainer>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #111;
`;

const Logo = styled(Link)`
  color: #ff5555;
  font-size: 30px;
  font-weight: 300;
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LoginButton = styled.button`
  color: white;
  background-color: black;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  &:hover {
    opacity: 0.5;
  }
`;

const SignUpButton = styled.button`
  color: white;
  background-color: #ff5555;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  &:hover {
    opacity: 0.5;
  }
`;

export default Navbar;
