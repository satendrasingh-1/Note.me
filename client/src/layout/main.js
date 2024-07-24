import React, { Suspense, useEffect } from "react";
import Loader from "../shared/loader";
import { Outlet, useNavigate } from "react-router-dom";
import utils from "../utils/localstorage";
import styles from "./layout.module.scss";
import Sidebar from "../shared/sidebar";
import Navbar from "../shared/navbar";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const Authkey = utils.getFromLocalStorage("auth_key");
    if (!Authkey) {
      navigate("/");
    }
  },[]);
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loader />}>
        {/* sidebar */}
        <Sidebar />
        <div className={styles.container}>
          <Navbar />
          <section className={styles.content}>
            <Outlet />
          </section>
        </div>
      </Suspense>
    </main>
  );
}

export default Main;
