import styled from "styled-components";

interface StyledPageProps {
  padding?: boolean;
}

const getPadding = (props: StyledPageProps) => (props.padding ? "0rem 24rem" : "");

const Centered = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440rem;
  align-self: center;
  padding: ${getPadding};
  background: var(--white);
`;

const Layout = { Centered };

export default Layout;
