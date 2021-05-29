import ImgIcon, { ImgIcons } from "components/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "@sc/Text.styled";
import Layout from "@sc/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import MediaQueryHooks from "hooks/media-query.hooks";

type NavOptionProps = { route: string; children: string };

const NavOption: React.FC<NavOptionProps> = ({ route, children }) => {
  return (
    <div className={styles.nav_option}>
      <Link href={route}>
        <Text.H6>{children}</Text.H6>
      </Link>
    </div>
  );
};

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const loggedIn = false;

  const {} = MediaQueryHooks.useDimensions();

  return (
    <Layout.Centered>
      <nav className={styles.main}>
        <Link href={NextRoutes.home}>
          <div className={styles.logo}>
            <ImgIcon icon={ImgIcons.LogoPendemicDark} />
            <Text.H5 weight="semibold">
              <Text.Span color="ember" font="lora">
                Pen
              </Text.Span>
              <Text.Span color="lavender" font="lora">
                demic
              </Text.Span>
            </Text.H5>
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
