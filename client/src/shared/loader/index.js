import React  from "react";

import styles from "./loader.module.scss";
import Progress from "../../components/atoms/progress";
import BrandLogo from "../brand";

function Loader() {
    return (<article className={styles.container}>
        <h1><BrandLogo/></h1>
        <Progress/>
    </article>);
}

export default Loader;