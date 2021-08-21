import styled, { css } from "styled-components";

const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto max-content max-content;
  row-gap: 1rem;
  justify-items: center;
  align-content: center;
  justify-content: center;
  margin: 1.5rem 0;
  animation: fade-in-text 1s ease;

  h1,
  h2 {
    text-align: center;
  }
  h2:nth-child(3) {
    margin-bottom: 2rem;
  }

  @keyframes fade-in-text {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

type SignInButtonProps = { google?: boolean; facebook?: boolean };

const SignInButton = styled.button<SignInButtonProps>`
  max-width: 15rem;
  width: 100%;
  box-shadow: 0 0.125rem 0.25rem var(--shadow);
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  column-gap: 0.5rem;
  align-items: center;
  padding-right: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.25rem 0.5rem var(--shadow);
  }

  ${(props) =>
    props.google &&
    css`
      background: #ffffff;
      animation: fade-in-g 1s ease;
      @keyframes fade-in-g {
        0% {
          opacity: 0;
          transform: translateY(1rem);
        }

        15% {
          opacity: 0;
          transform: translateY(1rem);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      p {
        color: var(--grey);
        font-size: medium;
        text-align: left;
        font-weight: 500;
        font-family: Roboto;
      }
    `}

  ${(props) =>
    props.facebook &&
    css`
      background: #1877f2;
      animation: fade-in-fb 1.25s ease;
      @keyframes fade-in-fb {
        0% {
          opacity: 0;
          transform: translateY(1rem);
        }

        30% {
          opacity: 0;
          transform: translateY(1rem);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      p {
        color: #ffffff;
        font-size: medium;
        text-align: left;
        font-weight: 500;
        font-family: Roboto;
      }
    `}
`;

const S = { Main, SignInButton };

export default S;
