import React from "react";

import styles from "./progress.module.scss";

function Progress(props) {
  const { percentage } = props;
  return (
    <div className={styles.container}>
      <span style={{ width: percentage || "50%" }}></span>
    </div>
  );
}

export default Progress;
