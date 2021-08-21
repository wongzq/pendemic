import ImgIcon, { ImgIcons } from "@components/atoms/ImgIcon/ImgIcon";
import React from "react";
import Text from "@components/styled/Text.styled";
import Layout from "@components/styled/Layout.styled";
import Link from "next/link";
import NextRoutes from "@routes/next.routes";
import Hoverable from "@components/atoms/Hoverable/Hoverable";
import useAuth from "@hooks/useAuth.hook";
import useNavigation from "./Navigation.hook";
import S from "./Navigation.styled";

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
    <S.NavOption color={color}>
      <Hoverable.Underline color={color} height={4} centered freeze={selected}>
        <Link href={route}>
          <S.NavOptionText size="xs" color={selected ? color : undefined}>
            {children}
          </S.NavOptionText>
        </Link>
      </Hoverable.Underline>
    </S.NavOption>
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
      <S.Nav>
        {user ? (
          <S.Nav1>
            <NavOption
              route={NextRoutes.routes.plan}
              color="lavender"
              selected={isPlanning}
            >
              Plan
            </NavOption>
          </S.Nav1>
        ) : (
          <S.Nav1>
            <NavOption route={NextRoutes.routes.home} color="lavender">
              Home
            </NavOption>
          </S.Nav1>
        )}

        <Link href={NextRoutes.routes.home}>
          <S.Logo>
            <Hoverable.Fade
              origin={<ImgIcon img={ImgIcons.LogoPendemic} />}
              hovered={<ImgIcon img={ImgIcons.LogoPendemicDark} />}
            />
            <S.LogoTitle size="s" weight="semibold">
              <Text.Span color="ember" family="lora">
                Pen
              </Text.Span>
              <Text.Span color="lavender" family="lora">
                demic
              </Text.Span>
            </S.LogoTitle>
          </S.Logo>
        </Link>

        {user ? (
          <S.Nav2>
            <NavOption
              route={NextRoutes.routes.write}
              color="ember"
              selected={isWriting}
            >
              Write
            </NavOption>
          </S.Nav2>
        ) : (
          <S.Nav2>
            <NavOption route={NextRoutes.routes.signIn} color="ember">
              Sign In
            </NavOption>
          </S.Nav2>
        )}

        {user && (
          <S.NavOptions ref={ref}>
            <S.Arrow onClick={onClickOptions} />
            <S.Menu visible={isOptionsVisible}>
              <img src={user.photoURL || ""} width={48} height={48} />
              <li>{user.displayName}</li>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={logout}>Logout</li>
            </S.Menu>
          </S.NavOptions>
        )}
      </S.Nav>
    </Layout.Nav>
  );
};

export default Navigation;
