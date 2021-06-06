import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "@styled/Text.styled";
import Layout from "@styled/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import Hoverable from "@components/atoms/Hoverable/Hoverable";
import classNames from "classnames";
import NavigationHook from "./Navigation.hook";

type NavOptionProps = {
  color: "lavender" | "ember";
  route?: string;
  children: string;
};

const NavOption: React.FC<NavOptionProps> = ({ color, route, children }) => {
  return (
    <div
      className={classNames(styles.nav_option, styles[`nav_option--${color}`])}
    >
      <Hoverable.Underline color={color} height={4}>
        {route ? (
          <Link href={route}>
            <Text.P size="xs" className={styles["nav_option__text"]}>
              {children}
            </Text.P>
          </Link>
        ) : (
          <Text.P size="xs" className={styles["nav_option__text"]}>
            {children}
          </Text.P>
        )}
      </Hoverable.Underline>
    </div>
  );
};

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const loggedIn = false;

  const { login } = NavigationHook.useAuthentication();

  return (
    <Layout.Nav>
      <nav className={styles.main}>
        {loggedIn ? (
          <div className={styles.nav_1}>
            <NavOption route={NextRoutes.plan} color="lavender">
              Plan
            </NavOption>
          </div>
        ) : (
          <div className={styles.nav_1}>
            <NavOption route={NextRoutes.signup} color="lavender">
              Sign Up
            </NavOption>
          </div>
        )}

        <Link href={NextRoutes.home}>
          <div className={styles.logo}>
            <Hoverable.Fade
              origin={<ImgIcon icon={ImgIcons.LogoPendemic} />}
              hovered={<ImgIcon icon={ImgIcons.LogoPendemicDark} />}
            />
            <Text.P size="s" weight="semibold" className={styles.logo_title}>
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
          <div className={styles.nav_2}>
            <NavOption route={NextRoutes.write} color="ember">
              Write
            </NavOption>
          </div>
        ) : (
          <div className={styles.nav_2} onClick={login}>
            <NavOption color="ember">Login</NavOption>
          </div>
        )}
      </nav>
    </Layout.Nav>
  );
};

export default Navigation;
