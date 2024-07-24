import React from "react";

import { ToastContainer } from "react-toastify";

import Left from "./section/left";
import Form from "./section/form";

import styles from "./login.module.scss";

function Login() {
  return (
    <>
      <ToastContainer />
      <main className={styles.container}>
        <Left />
        <Form />
      </main>
    </>
  );
}

export default Login;
