import styled from "styled-components";

type HoverableunderlineLineProps = {
  color: "primary" | "white";
  height: 2 | 4;
};

export const HoverableUnderlineLine = styled.div<HoverableunderlineLineProps>`
  background: ${(props) => `var(--${props.color})`};
  height: ${(props) => `${props.height}px`};
`;
