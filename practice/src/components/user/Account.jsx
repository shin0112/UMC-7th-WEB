import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../../context/LoginContext";
import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../../apis/user.js";

const AuthForm = (props) => {
  const { link, url, schema, title, fields } = props;
  const { setIsLogin, saveToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { mutate: signUpMutation } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      navigate(`/${link}`);
    }
  })

  const { mutate: loginMutation } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      saveToken(data);
      setIsLogin(true);
      navigate(`/${link}`);
      window.location.reload();
    },
  })

  const onSubmit = async (data) => {
    if (url === "회원가입") {
      signUpMutation({
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck
      })
    } else {
      loginMutation({
        email: data.email,
        password: data.password
      })
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
      url={"회원가입"}
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
      url={"로그인"}
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
