import { Colors } from "@styles/_app.styled";
import styled, { css } from "styled-components";

const UnderlineContainer = styled.div`
  position: relative;
`;

type HoverableunderlineLineProps = {
  color: "lavender" | "ember";
  height: 2 | 4;
  centered: boolean;
  hoverState: "HIDDEN" | "VISIBLE" | "EXPANDED";
  freeze?: boolean;
};

const Underline = styled.div<HoverableunderlineLineProps>`
  ${({ centered, color, height, hoverState, freeze }) => css`
    background: ${color === "lavender"
      ? Colors.lavenderlight
      : color === "ember"
      ? Colors.emberlight
      : undefined};

    height: ${height}px;
    position: absolute;
    border-radius: 0.25rem;
    transition: all 300ms ease;

    ${centered &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

    ${hoverState === "HIDDEN"
      ? css`
          width: 0.75rem;
          opacity: 0;
        `
      : hoverState === "VISIBLE"
      ? css`
          width: 0.75rem;
          opacity: 1;
        `
      : hoverState === "EXPANDED" || freeze
      ? css`
          width: 100%;
          opacity: 1;
        `
      : null}
  `}
`;

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
`;

type HoverableRippleRippleProps = {
  x: number;
  y: number;
  color: "white" | "grey";
};

const Ripple = styled.span<HoverableRippleRippleProps>`
  content: "";
  position: absolute;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  animation: ripple 1s linear;
  background: ${(props) => Colors[props.color]};

  @keyframes ripple {
    0% {
      opacity: 0.25;
      transform: scale(1);
    }
    25% {
      opacity: 0.125;
    }

    75% {
      opacity: 0;
      transform: scale(50);
    }
  }
`;

const S = { UnderlineContainer, Underline, RippleContainer, Ripple };

export default S;
