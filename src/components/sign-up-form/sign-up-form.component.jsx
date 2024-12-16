import React from "react";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  comformPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, comformPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form>
        <label>display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>comform password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="comformPassword"
          value={comformPassword}
        />
      </form>
    </div>
  );
};

export default SignUp;
