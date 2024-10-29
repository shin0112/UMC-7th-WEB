import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <SideBar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

const ContentArea = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
  background-color: black;
  color: white;
  box-sizing: border-box;
`;

export default RootLayout;
