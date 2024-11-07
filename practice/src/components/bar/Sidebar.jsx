import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const SideBar = () => {
  return (
    <Nav>
      <SideBarLink to="/search">
        <FaSearch size={20} color="white" />
        <SideBarText>찾기</SideBarText>
      </SideBarLink>
      <SideBarLink to="/movies">
        <MdMovie size={20} color="white" />
        <SideBarText>영화</SideBarText>
      </SideBarLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: #111;
  padding: 10px;
  box-sizing: border-box;
`;

const SideBarLink = styled(Link)`
  display: flex;
  width: 70px;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  margin-left: 10px;
  padding-right: 50px;

  &:hover {
    color: #ff5555;
  }
`;

const SideBarText = styled.span`
  font-size: 20px;
`;

export default SideBar;
