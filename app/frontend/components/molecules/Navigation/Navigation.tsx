import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import React from "react";
import styles from "./Navigation.module.scss";
import Text from "@components/styled/Text.styled";
import Layout from "@components/styled/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import Hoverable from "@components/atoms/Hoverable/Hoverable";
import classNames from "classnames";
import useAuth from "@hooks/useAuth.hook";
import useNavigation from "./Navigation.hook";

type NavOptionProps = {
  color: "lavender" | "ember";
  route: string;
  selected?: boolean;
  children: string;
};

const NavOption: React.FC<NavOptionProps> = ({
  color,
  route,
  selected,
  children,
}) => {
  return (
    <div
      className={classNames(styles.nav_option, styles[`nav_option--${color}`])}
    >
      <Hoverable.Underline color={color} height={4} centered freeze={selected}>
        <Link href={route}>
          <Text.P
            size="xs"
            color={selected ? color : undefined}
            className={styles["nav_option__text"]}
          >
            {children}
          </Text.P>
        </Link>
      </Hoverable.Underline>
    </div>
  );
};

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const { user, logout } = useAuth();

  const ref = React.useRef<HTMLDivElement>(null);

  const { isPlanning, isWriting, isOptionsVisible, onClickOptions } =
    useNavigation(ref);

  return (
    <Layout.Nav>
      <nav className={styles.main}>
        {user ? (
          <div className={styles.nav_1}>
            <NavOption
              route={NextRoutes.routes.plan}
              color="lavender"
              selected={isPlanning}
            >
              Plan
            </NavOption>
          </div>
        ) : (
          <div className={styles.nav_1}>
            <NavOption route={NextRoutes.routes.home} color="lavender">
              Home
            </NavOption>
          </div>
        )}

        <Link href={NextRoutes.routes.home}>
          <div className={styles.logo}>
            <Hoverable.Fade
              origin={<ImgIcon img={ImgIcons.LogoPendemic} />}
              hovered={<ImgIcon img={ImgIcons.LogoPendemicDark} />}
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

        {user ? (
          <div className={styles.nav_2}>
            <NavOption
              route={NextRoutes.routes.write}
              color="ember"
              selected={isWriting}
            >
              Write
            </NavOption>
          </div>
        ) : (
          <div className={styles.nav_2}>
            <NavOption route={NextRoutes.routes.signIn} color="ember">
              Sign In
            </NavOption>
          </div>
        )}

        {user && (
          <div ref={ref} className={styles.nav_options}>
            <div
              className={styles.nav_options_arrow}
              onClick={onClickOptions}
            />
            <ul
              className={classNames(styles.nav_options_menu, {
                [styles.nav_options_menu_visible]: isOptionsVisible,
              })}
            >
              <img
                className={styles.nav_options_menu_photo}
                src={user.photoURL ?? ""}
                width={48}
                height={48}
              />
              <li className={styles.nav_options_menu_name}>
                {user.displayName}
              </li>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </nav>
    </Layout.Nav>
  );
};

export default Navigation;
