import styled from "styled-components";

type HoverableunderlineLineProps = {
  color: "lavender" | "ember";
  height: 2 | 4;
};

export const HoverableUnderlineLine = styled.div<HoverableunderlineLineProps>`
  background: ${(props) =>
    `linear-gradient(
      to right,
      var(--${props.color}),
      var(--${props.color}-light),
      transparent)`};
  height: ${(props) => `${props.height}px`};
`;
