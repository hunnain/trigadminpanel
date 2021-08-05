import React from "react";
import styles from "./Loader.module.scss";
import Logo from "../../Assets/Logo.png";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <section>
        <img src={Logo} alt="logo" />
      </section>
      <section>
        <Spinner animation="border" role="status" className={styles.spinner} />
      </section>
    </div>
  );
};

export default Loader;
