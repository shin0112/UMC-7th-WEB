import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
  }

  button {
    width: 80px;
    color: white;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ff5555;
    border: none;

    &:active {
      background-color: #cf1616;
    }
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Text = styled.div`
  text-align: center;
  color: white;
  font-size: 30px;
  margin-top: 20px;
`;
