import React from "react";
import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentationFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentationFromAuth(user);
  };
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
     const response = await signInAuthUserWithEmailAndPassword(email,password);
     console.log(response);
    } catch (error) {
     switch(error.code){
      case 'auth/wrong-password':
        alert('incorrect password for email')
        break;
      case 'auth/user-not-found':
        alert('no user associated with this email')
        break
      default:
        console.log(error);
     }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
        <Button  type="submit">Sign In</Button>
        <Button type="button" buttonType='google' onClick = {signInWithGoogle}>Google sign in</Button>
        </div>

      </form>
    </div>
  );
};

export default SignIn;
