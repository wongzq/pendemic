import classNames from "classnames";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div className={classNames(styles.testing, styles.testing__test)}>
      Testing CSS Modules
    </div>
  </Layout>
);

export default IndexPage;
