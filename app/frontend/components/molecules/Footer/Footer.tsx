import React from "react";
import styles from "./Footer.module.scss";
import Text from "@styled/Text.styled"

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Text.P color="grey-light">© 2021 Wong ZQ • All rights reserved</Text.P>
    </footer>
  );
};

export default Footer;
