import React from "react";
import styles from "./Footer.module.scss";
import Text from "@sc/Text.styled"

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Text.P>Copyright © 2021 - Wong Zheng Quan</Text.P>
    </footer>
  );
};

export default Footer;
