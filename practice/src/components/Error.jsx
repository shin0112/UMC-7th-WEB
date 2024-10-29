import styled from "styled-components";

const Error = (params) => {
  if (params.isError) {
    return (
      <div>
        <Title>에러</Title>
      </div>
    );
  }
};

const Title = styled.h1`
  color: white;
`;

export default Error;
