import React from "react";
import S from "./Footer.styled";
import Text from "@components/styled/Text.styled";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <S.Footer>
      <Text.P color="grey">© 2021 Wong ZQ • All rights reserved</Text.P>
    </S.Footer>
  );
};

export default Footer;
