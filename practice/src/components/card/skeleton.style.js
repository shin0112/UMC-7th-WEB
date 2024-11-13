import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  30%{
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  width: 180px;
  height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 1.5vh;
  object-fit: cover;
  overflow: hidden;
  background-color: gray;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

const StyledHoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardName = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;

const CardDate = styled.div`
  color: white;
  font-size: 15px;
`;

export {
  skeleton,
  ImgContainer,
  CardContainer,
  CardDate,
  CardInfo,
  CardName,
  StyledHoverImg,
};
