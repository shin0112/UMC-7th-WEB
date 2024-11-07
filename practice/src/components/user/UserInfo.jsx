import useCustomFetch from "@/hooks/useCustomFetch";
import styled from "styled-components";

export const UserEmail = () => {
  const { data, isLoading, isError } = useCustomFetch("user/me");

  if (isLoading) return <Status>로딩 중</Status>;
  if (isError) return <Status>에러</Status>;

  return (
    <UserEmailContainer>{data.data?.email.split("@")[0]}</UserEmailContainer>
  );
};

const UserEmailContainer = styled.div`
  color: white;
  font-size: 20px;
`;

const Status = styled.div`
  color: white;
  font-size: 20px;
`;
