import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Input from "../../../components/atoms/input";
import Button from "../../../components/atoms/button";
import styles from "./partials.module.scss";
import Signin from "./signin";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email.length || !name.length || !password.length)
      toast.error("some required fields are empty");

    fetch("http://localhost:8080/api/users/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success === 201) {
          toast.success("user registered successfully!");
          props.handleSwitch();
          navigate("/notes");
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("user registration failed!");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Full Name"}
          type={"text"}
        />
        <br />
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
        handleClick={handleSignup}
      />
    </div>
  );
}

export default Signup;
