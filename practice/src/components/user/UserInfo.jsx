import styled from "styled-components";
import { useGetUserInfo } from "../../hooks/queries/user/useGetUserInfo.js";
import { useQuery } from "@tanstack/react-query";

export const UserEmail = () => {
  const { data, isPending, isError } = useQuery({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    queryFn: () => useGetUserInfo(),
    queryKey: ['user'],
  })

  if (isPending) {
    return <Status>로딩 중</Status>;
  }
  if (isError) return <Status>에러</Status>;

  return (
    <UserEmailContainer>{data?.email.split("@")[0]}</UserEmailContainer>
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
