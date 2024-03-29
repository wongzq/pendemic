import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-self: flex-end;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0rem;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 0.0625rem;
    background: linear-gradient(
      to right,
      transparent,
      var(--grey),
      transparent
    );
  }
`;

const S = { Footer };

export default S;
