import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { localAxiosInstance } from "../../apis/axios-instance";
import { LoginContext } from "../../context/LoginContext";

// Define AuthForm before using it in SignUp and Login
const AuthForm = (props) => {
  const { link, url, schema, title, fields } = props;
  const { setIsLogin, saveToken, getAccessToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const res = await localAxiosInstance.post(url, data);

      saveToken(res.data);
      if (getAccessToken) setIsLogin(true);

      navigate(`/${link}`);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.name}>
            <InputText
              type={field.type || "text"}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
            <ErrorMessage>{errors[field.name]?.message}</ErrorMessage>
          </div>
        ))}
        <InputSubmit type="submit" />
      </Form>
    </Container>
  );
};

// Use AuthForm in SignUp and Login components after it's defined
const SignUp = (props) => {
  const { schema, title } = props;

  return (
    <AuthForm
      link={"login"}
      url={"auth/register"}
      schema={schema}
      title={title}
      fields={[
        { name: "email", placeholder: "이메일을 입력해주세요!" },
        {
          name: "password",
          type: "password",
          placeholder: "비밀번호를 입력해주세요!",
        },
        {
          name: "passwordCheck",
          type: "password",
          placeholder: "비밀번호를 다시 입력해주세요!",
        },
      ]}
    />
  );
};

const Login = (props) => {
  const { schema, title } = props;

  return (
    <AuthForm
      link={""}
      url={"auth/login"}
      schema={schema}
      title={title}
      fields={[
        { name: "email", placeholder: "이메일을 입력해주세요!" },
        {
          name: "password",
          type: "password",
          placeholder: "비밀번호를 입력해주세요!",
        },
      ]}
    />
  );
};

// Styled components
const Container = styled.div`
  flex: auto;
  justify-items: center;
  justify-content: center;
  align-content: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 30px;
`;

const InputText = styled.input`
  border-radius: 10px;
  width: 400px;
  font-size: 20px;
  padding: 20px;
`;

const InputSubmit = styled.input`
  border-radius: 10px;
  background-color: #ff0066;
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 20px;
`;

const ErrorMessage = styled.p`
  height: 20px;
  color: red;
`;

export { Login, SignUp };
