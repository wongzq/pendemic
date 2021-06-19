import styles from "@styles/sign-in.module.scss";
import Layout from "@components/styled/Layout.styled";
import React from "react";
import classNames from "classnames";
import Text from "@components/styled/Text.styled";
import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import useAuth from "@hooks/auth.hook";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = () => {
  const { signInWithGoogle, signInWithFacebook } = useAuth();

  return (
    <Layout.Centered padding>
      <div className={styles.main}>
        <Text.H1 size="l" weight="semibold">
          Join the Pendemic
        </Text.H1>
        <Text.H2 size="xs">Forging stories from thoughts</Text.H2>
        <Text.H2 size="xs">Crafting art from chaos</Text.H2>
        <button
          className={classNames(styles.sign_in, styles.sign_in_google)}
          onClick={signInWithGoogle}
        >
          <ImgIcon img={ImgIcons.LogoGoogle} />
          <Text.P>Sign in with Google</Text.P>
        </button>
        <button
          className={classNames(styles.sign_in, styles.sign_in_facebook)}
          onClick={signInWithFacebook}
        >
          <ImgIcon img={ImgIcons.LogoFacebook} />
          <Text.P>Sign in with Facebook</Text.P>
        </button>
      </div>
    </Layout.Centered>
  );
};

export default SignInPage;
