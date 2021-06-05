import styled from "styled-components";

interface StyledTextProps {
  color?:
    | "white"
    | "black"
    | "grey"
    | "lavender"
    | "ember"
    | "lavender-dark"
    | "ember-dark";
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  weight?: "normal" | "semibold" | "bold";
  family?: "poppins" | "catamaran" | "lora";
}

const getColor = (props: StyledTextProps) =>
  props.color ? `var(--${props.color})` : `var(--black)`;

const getFontSize = (props: StyledTextProps, fallback: string) =>
  props.size === "xxs"
    ? "0.875rem"
    : props.size === "xs"
    ? "1rem"
    : props.size === "s"
    ? "1.25rem"
    : props.size === "m"
    ? "1.5rem"
    : props.size === "l"
    ? "2rem"
    : props.size === "xl"
    ? "3rem"
    : props.size === "xxl"
    ? "3.75rem"
    : fallback;

const getXXSfontSize = (props: StyledTextProps) =>
  getFontSize(props, "0.875rem");
const getXSfontSize = (props: StyledTextProps) => getFontSize(props, "1rem");
const getSfontSize = (props: StyledTextProps) => getFontSize(props, "1.25rem");
const getMfontSize = (props: StyledTextProps) => getFontSize(props, "1.5rem");
const getLfontSize = (props: StyledTextProps) => getFontSize(props, "2rem");
const getXLfontSize = (props: StyledTextProps) => getFontSize(props, "3rem");
const getXXLfontSize = (props: StyledTextProps) =>
  getFontSize(props, "3.75rem");

const getMobileXXSfontSize = (props: StyledTextProps) =>
  getFontSize(props, "0.875rem");
const getMobileXSfontSize = (props: StyledTextProps) =>
  getFontSize(props, "1rem");
const getMobileSfontSize = (props: StyledTextProps) =>
  getFontSize(props, "1.125rem");
const getMobileMfontSize = (props: StyledTextProps) =>
  getFontSize(props, "1.25rem");
const getMobileLfontSize = (props: StyledTextProps) =>
  getFontSize(props, "1.5rem");
const getMobileXLfontSize = (props: StyledTextProps) =>
  getFontSize(props, "2rem");
const getMobileXXLfontSize = (props: StyledTextProps) =>
  getFontSize(props, "3rem");

const getFontWeight = (props: StyledTextProps) =>
  props.weight === "bold"
    ? 700
    : props.weight === "semibold"
    ? 600
    : props.weight === "normal"
    ? 400
    : 400;

const getFontFamily = (props: StyledTextProps) => props.family ?? "poppins";

const getSpanColor = (props: StyledTextProps) =>
  props.color ? getColor(props) : "";

const getSpanFontWeight = (props: StyledTextProps) =>
  props.weight ? getFontWeight(props) : "";

const getSpanFontFamily = (props: StyledTextProps) =>
  props.family ? getFontFamily(props) : "";

// Styled Text Components
const H1 = styled.h1<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileXXLfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getXXLfontSize};
  }
`;

const H2 = styled.h2<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileXLfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getXLfontSize};
  }
`;

const H3 = styled.h3<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileLfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getLfontSize};
  }
`;

const H4 = styled.h4<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileMfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getMfontSize};
  }
`;

const H5 = styled.h5<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileSfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getSfontSize};
  }
`;

const H6 = styled.h6<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileXSfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getXSfontSize};
  }
`;

const P = styled.p<StyledTextProps>`
  color: ${getColor};
  font-size: ${getMobileXXSfontSize};
  font-weight: ${getFontWeight};
  font-family: ${getFontFamily};
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: ${getXXSfontSize};
  }
`;

const Span = styled.span<StyledTextProps>`
  color: ${getSpanColor};
  font-weight: ${getSpanFontWeight};
  font-family: ${getSpanFontFamily};
`;

const Text = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Span,
};

export default Text;
