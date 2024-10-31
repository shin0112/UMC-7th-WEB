import { SignUp } from "../components/Account";
import { validateSignUp } from "../utils/validate";

const SignUpPage = () => {
  const schema = validateSignUp();

  return <SignUp schema={schema} title={"회원가입"} />;
};

export default SignUpPage;
