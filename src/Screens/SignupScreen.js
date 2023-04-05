import React, { useRef } from "react";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";
const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log(user);
    } catch (error) {
      alert(error.message);
    }

    /* auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });*/
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="password" type="password" ref={passwordRef} />
        <button type="Submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
