import React from "react";

import styles from "./wrapper.module.scss"

function Wrapper(BaseComponent) {
  return function EnhancedComponent(props) {
    return (
      <div className={styles.wrapper}>
        <BaseComponent {...props} />
      </div>
    );
  };
}

export default Wrapper;
