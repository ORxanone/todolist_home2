import React from "react";
import styles from "./PrimaryButton.module.css";

class PrimaryButton extends React.Component {
  render() {
    return (
      <>
        <button className={styles.btn}>Primary Button</button>
      </>
    );
  }
}

export default PrimaryButton;
