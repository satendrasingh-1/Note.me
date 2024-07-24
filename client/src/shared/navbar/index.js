import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "./navbar.module.scss";
import Input from "../../components/atoms/input";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  return (
    <header className={styles.navbar}>
      <article className={styles.searchBar}>
        <Icon icon="material-symbols:search" />
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={"Search Notes"}
          type={"text"}
          className={styles.field}
        />
      </article>
      <div className={styles.theme}>
        <Icon icon={"vaadin:sun-down"} />
      </div>
    </header>
  );
}

export default Navbar;
