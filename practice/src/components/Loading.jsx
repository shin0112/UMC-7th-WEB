import styled from "styled-components";

const Loading = (params) => {
  if (params.isLoading) {
    return (
      <div>
        <Title>로딩 중...</Title>
      </div>
    );
  }
};

const Title = styled.h1`
  color: white;
`;

export default Loading;
