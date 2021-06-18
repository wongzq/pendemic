import styled from "styled-components";

type HoverableunderlineLineProps = {
  color: "lavender" | "ember";
  height: 2 | 4;
};

export const HoverableUnderlineLine = styled.div<HoverableunderlineLineProps>`
  background: ${(props) => `var(--${props.color}-light)`};
  height: ${(props) => `${props.height}px`};
`;
