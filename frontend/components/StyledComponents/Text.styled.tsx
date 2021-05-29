import styled from "styled-components";

interface StyledTextProps {
  color?: "white" | "black" | "grey";
  bold?: boolean;
  semibold?: boolean;
  catamaran?: boolean;
  lora?: boolean;
}

const getColor = (props: StyledTextProps) =>
  props.color ? `var(--${props.color})` : `var(--black)`;

const getFontWeight = (props: StyledTextProps) =>
  props.bold ? 700 : props.semibold ? 600 : 400;

const getFontFamily = (props: StyledTextProps) =>
  props.lora ? `Lora` : props.catamaran ? `Catamaran` : `Poppins`;

// Styled Text Components
const H1 = styled.h1<StyledTextProps>`
  color: ${getColor};
  font-size: 60rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const H2 = styled.h2<StyledTextProps>`
  color: ${getColor};
  font-size: 48rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const H3 = styled.h3<StyledTextProps>`
  color: ${getColor};
  font-size: 32rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const H4 = styled.h4<StyledTextProps>`
  color: ${getColor};
  font-size: 24rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const H5 = styled.h5<StyledTextProps>`
  color: ${getColor};
  font-size: 20rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const H6 = styled.h6<StyledTextProps>`
  color: ${getColor};
  font-size: 16rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const P = styled.p<StyledTextProps>`
  color: ${getColor};
  font-size: 14rem;
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
`;

const Text = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
};

export default Text;
