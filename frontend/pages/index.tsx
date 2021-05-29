import React from "react";
import styles from "@styles/index.module.scss";
import Layout from "components/StyledComponents/Layout.styled";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <Layout.Centered padding>
      <div className={styles.main} />;
    </Layout.Centered>
  );
};

export default index;
