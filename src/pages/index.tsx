import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            瀏覽最新文章
          </Link>
          <Link className="button button--success button--lg" to="/resources">
            開始學習
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.newsletterWrapper}>
          <Heading as="h2" className={styles.newsletterHeading}>
            📬 訂閱電子報
          </Heading>
          <p className={styles.newsletterSubtext}>
            每週精選投資洞察與學習資源，直送您的信箱
          </p>
          <iframe
            src="https://investdecode.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid rgba(77, 208, 225, 0.15)",
              borderRadius: "12px",
              maxWidth: "100%",
              display: "block",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
