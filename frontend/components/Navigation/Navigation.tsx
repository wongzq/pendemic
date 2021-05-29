import ImgIcon, { ImgIcons } from "components/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "../StyledComponents/Text.styled";
import Layout from "components/StyledComponents/Layout.styled";
import Link from "next/link";
import NextRoutes from "routes/next.routes";

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

  return (
    <Layout.Centered>
      <nav className={styles.main}>
        <Link href={NextRoutes.home}>
          <div className={styles.logo}>
            <ImgIcon icon={ImgIcons.PendemicDark} />
            <Text.H5 color="black" semibold lora>
              Pendemic
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
