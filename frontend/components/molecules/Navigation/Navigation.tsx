import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "@components/styled/Text.styled";
import Layout from "@components/styled/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import DimensionsHooks from "hooks/dimensions.hooks";

type NavOptionProps = { route: string; children: string };

const NavOption: React.FC<NavOptionProps> = ({ route, children }) => {
  return (
    <div className={styles.nav_option}>
      <Link href={route}>
        <Text.P size="xs">{children}</Text.P>
      </Link>
    </div>
  );
};

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const loggedIn = false;

  const {} = DimensionsHooks.useDimensions();

  return (
    <Layout.Centered>
      <nav className={styles.main}>
        <Link href={NextRoutes.home}>
          <div className={styles.logo}>
            <ImgIcon icon={ImgIcons.LogoPendemic} />
            <Text.P size="s" weight="semibold">
              <Text.Span color="ember" family="lora">
                Pen
              </Text.Span>
              <Text.Span color="lavender" family="lora">
                demic
              </Text.Span>
            </Text.P>
          </div>
        </Link>

        {loggedIn ? (
          <div className={styles.nav}>
            <NavOption route={NextRoutes.plan}>Plan</NavOption>
            <NavOption route={NextRoutes.write}>Write</NavOption>
          </div>
        ) : (
          <div className={styles.nav}>
            <NavOption route={NextRoutes.login}>Sign Up</NavOption>
            <NavOption route={NextRoutes.login}>Login</NavOption>
          </div>
        )}
      </nav>
    </Layout.Centered>
  );
};

export default Navigation;
