import {
  signInWithGooglePopup,
  createUserDocumentationFromAuth,
} from "../../utils/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentationFromAuth(user);
  };

  return (
    <div>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>SignIn with Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
