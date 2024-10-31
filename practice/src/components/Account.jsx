import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";

// Define AuthForm before using it in SignUp and Login
const AuthForm = (props) => {
  const { schema, title, fields } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
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
            <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
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

export { Login, SignUp };
