import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import Input from "../../../components/atoms/input";
import Button from "../../../components/atoms/button";
import utils from "../../../utils/localstorage";

import styles from "./partials.module.scss";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.length || !password.length)
      toast.error("some required fields are empty");

    fetch("http://localhost:8080/api/users/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success === 200) {
          toast.success("user login successfully!");
          utils.addToLocalStorage('auth_key', data.token);
          navigate("/notes");
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("user login failed!");
      });
  };

  return (
    <div className={styles.form}>
      <Button
        text={"Join with Google"}
        icon={"ri:google-fill"}
        className={styles.google}
      />
      <div className={styles.option}>
        <span>or join with email address</span>
      </div>
      <article>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email address"}
          type={"email"}
        />
        <br />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Password"}
          type={"password"}
        />
      </article>
      <Button
        text={"Join with Email"}
        icon={"material-symbols:login"}
        className={styles.emailbtn}
        handleClick={handleLogin}
      />
    </div>
  );
}

export default Signin;
