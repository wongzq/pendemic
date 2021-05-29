import React from "react";
import styles from "@styles/index.module.scss";
import Layout from "@sc/Layout.styled";
import SvgIcon, { SvgIcons } from "@components/SvgIcon/SvgIcon";
import Text from "@sc/Text.styled";
import HomePageHooks from "hooks/index.hooks";
import classNames from "classnames";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const {
    refSvgPlan,
    refSvgWrite,
    refTxtPlan,
    refTxtWrite,
    planHovered,
    writeHovered,
  } = HomePageHooks.usePendemicHover();

  const svgPlanClassNames = classNames(styles.svg_plan, {
    [styles.plan_hovered]: planHovered,
  });

  const svgWriteClassNames = classNames(styles.svg_write, {
    [styles.write_hovered]: writeHovered,
  });

  const txtPlanClassNames = classNames(styles.txt_plan, {
    [styles.plan_hovered]: planHovered,
  });

  const txtWriteClassNames = classNames(styles.txt_write, {
    [styles.write_hovered]: writeHovered,
  });

  return (
    <Layout.Centered padding>
      <div className={styles.main}>
        <div className={styles.logo}>
          <SvgIcon
            icon={SvgIcons.PendemicPlan}
            className={svgPlanClassNames}
            ref={refSvgPlan}
          />
          <SvgIcon
            icon={SvgIcons.PendemicWrite}
            className={svgWriteClassNames}
            ref={refSvgWrite}
          />

          <div className={txtPlanClassNames} ref={refTxtPlan}>
            <Text.H1 color="lavender" weight="bold" font="catamaran">
              Plan
            </Text.H1>
            <Text.H4 color="grey" weight="semibold" font="catamaran">
              Flesh out your characters, plot and setting
            </Text.H4>
          </div>

          <div className={txtWriteClassNames} ref={refTxtWrite}>
            <Text.H1 color="ember" weight="bold" font="catamaran">
              Write
            </Text.H1>
            <Text.H4 color="grey" weight="semibold" font="catamaran">
              Compose your thoughts into a novel
            </Text.H4>
          </div>
        </div>

        <Text.H1 weight="semibold">
          <Text.Span color="lavender" font="catamaran">
            All in
          </Text.Span>{" "}
          <Text.Span color="ember" font="catamaran">
            one place!
          </Text.Span>
        </Text.H1>
      </div>
    </Layout.Centered>
  );
};

export default index;
