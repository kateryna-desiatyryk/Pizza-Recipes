import React from "react";
import cls from "./RegisterPage.module.css";

import userIcon from "../../shared/assets/userIcon.svg";
import emailIcon from "../../shared/assets/emailIcon.svg";
import eyeIcon from "../../shared/assets/eyeIcon.svg";
import lockIcon from "../../shared/assets/lockIcon.svg";

import hugeicons_chef from "../../shared/assets/hugeicons_chef.svg";
import googleIcon from "../../shared/assets/googleIcon.svg";

const RegisterPage = () => {
  return (
    <div className={cls.RegisterPage}>
      <div className={cls.Card}>
        <div className={cls.Logo}>
          <img src={hugeicons_chef} alt="" />
          <h2>RecipeBox</h2>
        </div>

        <h1>Create your account</h1>
        <p className={cls.Subtitle}>Sign up to get started</p>

        <form className={cls.Form}>
          <div className={cls.Field}>
            <label>Username</label>
            <div className={cls.InputBox}>
              <img src={userIcon} alt="" />
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div className={cls.Field}>
            <label>Email</label>
            <div className={cls.InputBox}>
              <img src={emailIcon} alt="" />
              <input type="email" placeholder="john@email.com" />
            </div>
          </div>

          <div className={cls.Field}>
            <label>Password</label>
            <div className={cls.InputBox}>
              <img src={lockIcon} alt="" />
              <input type="password" placeholder="********" />
              <img src={eyeIcon} alt="" />
            </div>
          </div>

          <div className={cls.Field}>
            <label>Confirm password</label>
            <div className={cls.InputBox}>
              <img src={lockIcon} alt="" />
              <input type="password" placeholder="********" />
              <img src={eyeIcon} alt="" />
            </div>
          </div>

          <button className={cls.CreateButton} type="submit">
            Create Account
          </button>

          <div className={cls.Or}>
            <span>or</span>
          </div>

          <button className={cls.GoogleButton} type="button">
            <img src={googleIcon} alt="" />
            Continue with Google
          </button>

          <p className={cls.LoginText}>
            Already have an account? <span>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
