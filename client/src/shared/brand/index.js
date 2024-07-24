import React from "react";
import BrandDark from "../../assets/brand-dark.png";
import BrandLight from "../../assets/brand-light.svg";
import styles from "./brand.module.scss";

function BrandLogo(props) {
  const { logoOnly, className, type = "light" } = props;
  return (
    <article className={`${styles.brand} ${className}`}>
      <img
        src={type == "light" ? BrandDark : BrandLight}
        alt="Brand Logo"
        width="50px"
        height="50px"
      />
      {!logoOnly ? (
        <h1>
          Note.<span>me</span>
        </h1>
      ) : null}
    </article>
  );
}

export default BrandLogo;
