import styled from "styled-components";
import useCustomFetch from "@/hooks/useCustomFetch";

export const UserEmail = () => {
  const { data, isLoading, ieError } = useCustomFetch("user/me");

  const splitEmail = (text) => {
    const emails = text.split("@");
    return emails[0];
  };

  return <UserEmailContainer>{splitEmail(data.data.email)}</UserEmailContainer>;
};

const UserEmailContainer = styled.div`
  color: white;
  font-size: 20px;
`;
