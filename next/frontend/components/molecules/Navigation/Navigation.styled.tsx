import styled, { css } from "styled-components";
import Text from "@components/styled/Text.styled";
import { Colors } from "@styles/_app.styled";

const Nav = styled.nav`
  align-self: center;
  width: 100%;
  height: 3.5rem;
  max-width: 64rem;
  background: var(--white);
  padding: 0rem 1.5rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  grid-template-areas: "nav1 logo nav2 options";
  column-gap: 0rem;
  align-items: center;
  justify-items: center;

  @media only screen and (min-width: 30rem) {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-template-areas: "logo nav1 nav2 options";
    column-gap: 3rem;
    justify-items: flex-start;
  }
`;

const Nav1 = styled.div`
  grid-area: nav1;
`;
const Nav2 = styled.div`
  grid-area: nav2;
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 0.25rem 0rem;

  & > p {
    display: none;
    @media only screen and (min-width: 30rem) {
      display: inline;
    }
  }

  & > * + * {
    margin: 0 0 0 0.5rem;
  }
`;

const LogoTitle = styled(Text.P)`
  &:hover {
    span:nth-child(1) {
      color: ${Colors.emberdark};
    }
    span:nth-child(2) {
      color: ${Colors.lavenderdark};
    }
  }
`;

const NavOptionText = styled(Text.P)`
  padding: 0.5rem;
  transition: none;
`;

type NavOptionProps = { color?: "lavender" | "ember" };

const NavOption = styled.div<NavOptionProps>`
  cursor: pointer;
  text-align: center;
  border-radius: 0.5rem;

  &:hover ${NavOptionText} {
    ${(props) =>
      props.color === "lavender"
        ? css`
            background: linear-gradient(
              to right,
              ${Colors.lavenderdark},
              ${Colors.lavenderlight}
            );
          `
        : props.color === "ember"
        ? css`
            background: linear-gradient(
              to right,
              ${Colors.emberdark},
              ${Colors.emberlight}
            );
          `
        : null}

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const NavOptions = styled.div`
  grid-area: options;
`;

const Arrow = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    inset: 0.5rem;
    border-top: 0.5rem solid var(--black);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
  }
`;

type MenuProps = { visible: boolean };

const Menu = styled.div<MenuProps>`
  position: absolute;
  margin-top: 0.5rem;
  right: 0;
  display: ${(props) => (props.visible ? "grid" : "none")};
  row-gap: 0.25rem;
  min-width: 10rem;
  max-width: 10rem;
  max-height: max-content;
  padding: 1rem 0rem;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: 0 0.25rem 0.5rem var(--shadow);

  & > img {
    border-radius: 50%;
    margin: 0 auto;
  }
  & > li:nth-child(2) {
    text-align: center;
    overflow-wrap: break-word;
    max-width: 10rem;
    padding: 0rem 0.5rem;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.25rem;
      width: 100%;
      height: 0.0625rem;
      background: var(--grey-light);
      border-radius: 0.25rem;
    }
  }
  li:nth-child(n + 3) {
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    &:hover {
      background: linear-gradient(to right, var(--grey-light), transparent);
    }
  }
`;

const S = {
  Nav,
  Nav1,
  Nav2,
  Logo,
  LogoTitle,
  NavOption,
  NavOptionText,
  NavOptions,
  Arrow,
  Menu,
};

export default S;
