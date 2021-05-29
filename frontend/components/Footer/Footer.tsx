import React from "react";
import Text from "../StyledComponents/Text.styled";
import styles from "./Footer.module.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Text.P>Copyright © 2021 - Wong Zheng Quan</Text.P>
    </footer>
  );
};

export default Footer;
