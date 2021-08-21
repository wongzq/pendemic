import SvgIcon from "@components/atoms/SvgIcon/SvgIcon";
import styled, { css } from "styled-components";
import Text from "@components/styled/Text.styled";
import { Colors } from "@styles/_app.styled";

type HoverProps = { hovered: boolean };

const Animations = {
  slideLTR: css`
    @keyframes slide-ltr {
      0% {
        opacity: 0;
        transform: translateX(-25vw);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  slideRTL: css`
    @keyframes slide-rtl {
      0% {
        opacity: 0;
        transform: translateX(25vw);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  fadeIn: css`
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      60% {
        opacity: 0;
        transform: translateX(-50%) scaleX(110%);
      }
      100% {
        opacity: 1;
        transform: translateX(-50%) scaleX(100%);
      }
    }
  `,
};

const Main = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "plan"
    "logo"
    "write"
    "quote";
  width: 100%;
  max-width: 25rem;
  margin: 3rem 0rem;
  overflow: hidden;
  @media only screen and (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "plan logo write"
      "quote quote quote";
    max-width: 100%;
  }
`;

const Logo = styled.div`
  flex: 1;
  justify-self: center;
  grid-area: logo;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 15rem;
  @media only screen and (min-width: 48rem) {
    width: 100%;
    padding-bottom: 100%;
  }
`;

const SvgPlan = styled(SvgIcon)<HoverProps>`
  position: absolute;
  pointer-events: none;
  animation: slide-ltr 0.5s ease-out;
  ${Animations.slideLTR};
  @media only screen and (min-width: 48rem) {
    & > g {
      pointer-events: all;
    }
    ${(props) =>
      props.hovered &&
      css`
        & > g > path {
          fill: ${Colors.lavenderlight};
          filter: drop-shadow(0rem 0.5rem 0.5rem ${Colors.shadow});
        }
      `}
  }
`;

const SvgWrite = styled(SvgIcon)<HoverProps>`
  position: absolute;
  pointer-events: none;
  animation: slide-rtl 0.5s ease-out;
  ${Animations.slideRTL};
  @media only screen and (min-width: 48rem) {
    & > g {
      pointer-events: all;
    }
    ${(props) =>
      props.hovered &&
      css`
        & > g > path {
          fill: ${Colors.emberlight};
          filter: drop-shadow(0rem 0.5rem 0.5rem ${Colors.shadow});
        }
      `}
  }
`;

const TxtPlan = styled.div<HoverProps>`
  grid-area: plan;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: slide-ltr 0.75s ease-out;
  ${Animations.slideLTR};

  & > h1 {
    text-align: left;
    color: ${Colors.lavender};
  }
  & > h2 {
    display: none;
    text-align: left;
  }

  @media only screen and (min-width: 48rem) {
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 6.25rem;

    & > h1 {
      position: absolute;
      text-align: right;
      width: 100%;
      z-index: 1;
    }
    & > h2 {
      display: inline;
      text-align: right;
      width: 100%;
      opacity: 0;
      transform: translate(-25%, 50%);
    }
    ${(props) =>
      props.hovered &&
      css`
        & > h1 {
          color: ${Colors.lavenderlight};
          transform: translateY(-50%);
        }
        & > h2 {
          opacity: 1;
          transform: translateY(50%);
        }
      `}
  }
`;

const TxtWrite = styled.div<HoverProps>`
  grid-area: write;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: slide-rtl 0.75s ease-out;
  ${Animations.slideRTL};

  & > h1 {
    text-align: right;
    color: ${Colors.ember};
  }
  & > h2 {
    display: none;
    text-align: right;
  }

  @media only screen and (min-width: 48rem) {
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 6.25rem;

    & > h1 {
      position: absolute;
      text-align: left;
      width: 100%;
      z-index: 1;
    }
    & > h2 {
      display: inline;
      text-align: left;
      width: 100%;
      opacity: 0;
      transform: translate(25%, 50%);
    }
    ${(props) =>
      props.hovered &&
      css`
        & > h1 {
          color: ${Colors.emberlight};
          transform: translateY(-50%);
        }
        & > h2 {
          opacity: 1;
          transform: translateY(50%);
        }
      `}
  }
`;

const TxtQuote = styled(Text.H1)`
  grid-area: quote;
  margin: 2.5rem 0;
  max-width: 30rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: linear-gradient(
    to right,
    ${Colors.lavenderdark},
    ${Colors.lavenderlight},
    ${Colors.emberlight},
    ${Colors.emberdark}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fade-in 1.25s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: -2.5rem;
    left: 0;
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
    height: 0.25rem;
    border-radius: 50%;
    background: linear-gradient(
      to right,
      transparent 5%,
      ${Colors.lavenderlight} 45%,
      ${Colors.emberlight} 55%,
      transparent 95%
    );
  }
`;

const S = {
  Main,
  Logo,
  SvgPlan,
  SvgWrite,
  TxtPlan,
  TxtWrite,
  TxtQuote,
};

export default S;
