import S from "@styles/sign-in.styled";
import Layout from "@components/styled/Layout.styled";
import React from "react";
import Text from "@components/styled/Text.styled";
import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import useAuth from "@hooks/useAuth.hook";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = () => {
  const { signInWithGoogle, signInWithFacebook } = useAuth();

  return (
    <Layout.Centered padding>
      <S.Main>
        <Text.H1 size="l" weight="semibold">
          Join the Pendemic
        </Text.H1>
        <Text.H2 size="xs">Forging stories from thoughts</Text.H2>
        <Text.H2 size="xs">Crafting art from chaos</Text.H2>
        <S.SignInButton google onClick={signInWithGoogle}>
          <ImgIcon img={ImgIcons.LogoGoogle} />
          <Text.P>Sign in with Google</Text.P>
        </S.SignInButton>
        <S.SignInButton facebook onClick={signInWithFacebook}>
          <ImgIcon img={ImgIcons.LogoFacebook} />
          <Text.P>Sign in with Facebook</Text.P>
        </S.SignInButton>
      </S.Main>
    </Layout.Centered>
  );
};

export default SignInPage;
