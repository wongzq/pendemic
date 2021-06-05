import styled from "styled-components";

interface StyledPageProps {
  padding?: boolean;
}

const getPadding = (props: StyledPageProps) =>
  props.padding ? "0rem 1.5rem" : "";

const Centered = styled.div`
  width: 100%;
  height: 100%;
  max-width: 90rem;
  align-self: center;
  padding: ${getPadding};
  background: var(--white);
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  padding: ${getPadding};
  background: var(--white);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.125rem 0.25rem var(--shadow);
  z-index: 1;
`;

const Layout = { Centered, Nav };

export default Layout;
