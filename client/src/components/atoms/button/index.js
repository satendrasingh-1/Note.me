import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "./button.module.scss";

function Button(props) {
  const { text, icon, handleClick, className, isDisabled } = props;
  return (
    <button className={`${styles.button} ${className} `} onClick={handleClick} disabled={isDisabled}>
      {icon && <Icon icon={icon} />}
      <h3>{text}</h3>
    </button>
  );
}

export default Button;
