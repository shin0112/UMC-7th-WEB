import { useForm } from "react-hook-form";
import * as yup from "yup";
// TIP: zod를 사용하신다면 @hookform/resolvers/zod 를 import 하시면 됩니다!
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const SignUpPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("이메일의 형식을 지켜주세요. (예시: test@email.com)")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16)
      .required("비밀번호를 반드시 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <InputText
        type={"email"}
        {...register("email", {
          onBlur: () => trigger("email"),
        })}
      />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <InputText
        type={"password"}
        {...register("password", {
          onBlur: () => trigger("password"),
        })}
      />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
      <InputSubmit type={"submit"} />
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  flex: auto;
  justify-items: center;
  justify-content: center;
  align-content: center;
`;

const InputText = styled.input`
  border-radius: 10px;
  width: 400px;
  font-size: 20px;
  padding: 10px;
`;

const InputSubmit = styled.input`
  border-radius: 10px;
  width: 400px;
  background-color: #ff0066;
  font-size: 20px;
  padding: 10px;
`;

export default SignUpPage;
