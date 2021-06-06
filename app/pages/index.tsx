import React from "react";
import styles from "@styles/index.module.scss";
import Layout from "@styled/Layout.styled";
import SvgIcon, { SvgIcons } from "@components/atoms/SvgIcon/SvgIcon";
import Text from "@styled/Text.styled";
import HomePageHooks from "@hooks/index.hook";
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
  } = HomePageHooks.usePendemicLogo();

  const svgPlanTclassNames = classNames(styles.svg_plan);
  const svgWriteTclassNames = classNames(styles.svg_write);
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
        <div className={txtPlanClassNames} ref={refTxtPlan}>
          <Text.H1 weight="bold" family="catamaran">
            Plan
          </Text.H1>
          <Text.H2 size="m" color="grey" weight="semibold" family="catamaran">
            Draft your characters, plot and setting
          </Text.H2>
        </div>

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
          <SvgIcon
            icon={SvgIcons.PendemicPlanTransparent}
            className={svgPlanTclassNames}
            ref={refSvgPlan}
          />
          <SvgIcon
            icon={SvgIcons.PendemicWriteTransparent}
            className={svgWriteTclassNames}
            ref={refSvgWrite}
          />
        </div>

        <div className={txtWriteClassNames} ref={refTxtWrite}>
          <Text.H1 weight="bold" family="catamaran">
            Write
          </Text.H1>
          <Text.H2 size="m" color="grey" weight="semibold" family="catamaran">
            Compose your thoughts into a novel
          </Text.H2>
        </div>
      </div>

      <Text.H1 weight="semibold" className={styles["txt_quote"]}>
        All in one place
      </Text.H1>
      <div></div>
    </Layout.Centered>
  );
};

export default index;
