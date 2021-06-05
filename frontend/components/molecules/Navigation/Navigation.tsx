import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "@components/styled/Text.styled";
import Layout from "@components/styled/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import Hoverable from "@components/atoms/Hoverable/Hoverable";

type NavOptionProps = {
  route: string;
  children: string;
  color: "lavender" | "ember";
};

const NavOption: React.FC<NavOptionProps> = ({ route, children, color }) => {
  return (
    <div className={styles[`nav_option--${color}`]}>
      <Hoverable.Underline color={color} height={4}>
        <div className={styles.nav_option}>
          <Link href={route}>
            <Text.P size="xs" className={styles["nav_option__text"]}>
              {children}
            </Text.P>
          </Link>
        </div>
      </Hoverable.Underline>
    </div>
  );
};

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const loggedIn = false;

  return (
    <Layout.Centered>
      <nav className={styles.main}>
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
          <div className={styles.nav}>
            <NavOption route={NextRoutes.plan} color="lavender">
              Plan
            </NavOption>
            <NavOption route={NextRoutes.write} color="ember">
              Write
            </NavOption>
          </div>
        ) : (
          <div className={styles.nav}>
            <NavOption route={NextRoutes.login} color="lavender">
              Sign Up
            </NavOption>
            <NavOption route={NextRoutes.login} color="ember">
              Login
            </NavOption>
          </div>
        )}
      </nav>
    </Layout.Centered>
  );
};

export default Navigation;
