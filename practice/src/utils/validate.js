import * as yup from "yup";

export function validateLogin() {
  return yup.object().shape(auth());
}

export function validateSignUp() {
  const loginSchema = auth();
  return yup.object().shape({
    ...loginSchema,
    passwordCheck: yup
      .string()
      .required("비밀번호를 반드시 입력해주세요.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });
}

function auth() {
  return {
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
  };
}
