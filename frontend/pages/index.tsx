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

  return (
    <Layout.Centered padding>
      <div className={styles.main}>
        <div className={styles.logo}>
          <SvgIcon
            icon={SvgIcons.PendemicPlan}
            className={classNames(styles.svg_plan, {
              [styles.plan_hovered]: planHovered,
            })}
            ref={refSvgPlan}
          />
          <SvgIcon
            icon={SvgIcons.PendemicWrite}
            className={classNames(styles.svg_write, {
              [styles.write_hovered]: writeHovered,
            })}
            ref={refSvgWrite}
          />

          <div
            className={classNames(styles.txt_plan, {
              [styles.plan_hovered]: planHovered,
            })}
            ref={refTxtPlan}
          >
            <Text.H1 color="lavender" weight="bold" font="catamaran">
              Plan
            </Text.H1>
          </div>

          <div
            className={classNames(styles.txt_write, {
              [styles.write_hovered]: writeHovered,
            })}
            ref={refTxtWrite}
          >
            <Text.H1 color="ember" weight="bold" font="catamaran">
              Write
            </Text.H1>
          </div>
        </div>
      </div>
    </Layout.Centered>
  );
};

export default index;
