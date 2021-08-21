import React from "react";
import Layout from "@components/styled/Layout.styled";
import { SvgIcons } from "@components/atoms/SvgIcon/SvgIcon";
import Text from "@components/styled/Text.styled";
import useHomePage from "@hooks/useHomePage.hook";
import S from "@styles/index.styled";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const {
    refSvgPlan,
    refSvgWrite,
    refTxtPlan,
    refTxtWrite,
    planHovered,
    writeHovered,
  } = useHomePage();

  return (
    <Layout.Centered padding>
      <S.Main>
        <S.TxtPlan ref={refTxtPlan} hovered={planHovered}>
          <Text.H1 weight="bold" family="catamaran">
            Plan
          </Text.H1>
          <Text.H2
            size="m"
            color="grey-dark"
            weight="semibold"
            family="catamaran"
          >
            Draft your characters, plot and setting
          </Text.H2>
        </S.TxtPlan>

        <S.Logo>
          <S.SvgPlan
            hovered={planHovered}
            icon={SvgIcons.PendemicPlan}
            ref={refSvgPlan}
          />
          <S.SvgWrite
            hovered={writeHovered}
            icon={SvgIcons.PendemicWrite}
            ref={refSvgWrite}
          />
          <S.SvgPlan
            hovered={false}
            icon={SvgIcons.PendemicPlanTransparent}
            ref={refSvgPlan}
          />
          <S.SvgWrite
            hovered={false}
            icon={SvgIcons.PendemicWriteTransparent}
            ref={refSvgWrite}
          />
        </S.Logo>

        <S.TxtWrite ref={refTxtWrite} hovered={writeHovered}>
          <Text.H1 weight="bold" family="catamaran">
            Write
          </Text.H1>
          <Text.H2
            size="m"
            color="grey-dark"
            weight="semibold"
            family="catamaran"
          >
            Compose your thoughts into a novel
          </Text.H2>
        </S.TxtWrite>
      </S.Main>

      <S.TxtQuote weight="semibold">All in one place</S.TxtQuote>
      <div></div>
    </Layout.Centered>
  );
};

export default HomePage;
