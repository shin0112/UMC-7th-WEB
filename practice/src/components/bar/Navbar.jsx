import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "@/context/LoginContext";
import { UserEmail } from "../user/UserInfo";

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { isLogin, logout } = useContext(LoginContext);

  return (
    <NavBar>
      <Logo to="/">YONGCHA</Logo>
      <ButtonContainer>
        {isLogin ? (
          <>
            <UserEmail />
            <LogoutButton
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              로그아웃
            </LogoutButton>
          </>
        ) : (
          <>
            <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
            <SignUpButton onClick={() => navigate("/signup")}>
              회원가입
            </SignUpButton>
          </>
        )}
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
  color: #ff0066;
  font-size: 30px;
  font-weight: bolder;
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
  background-color: #ff0066;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  &:hover {
    opacity: 0.5;
  }
`;

const LogoutButton = styled.button`
  color: white;
  background-color: gray;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  &:hover {
    opacity: 0.5;
  }
`;

export default Navbar;
