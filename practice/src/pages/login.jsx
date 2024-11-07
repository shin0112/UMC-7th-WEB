import { Login } from "@/components/user/Account";
import * as yup from "yup";

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 반드시 입력해주세요.")
      .matches(
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        "이메일의 형식을 지켜주세요. (예시: test@email.com)"
      ),
    password: yup
      .string()
      .required("비밀번호를 반드시 입력해주세요.")
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하이어야 합니다."),
  });

  return <Login schema={schema} title={"로그인"} />;
};

export default LoginPage;
