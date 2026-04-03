import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "致富思維與商業歷史解析",
    Png: require("@site/static/img/rich-mindset-icon.png").default,
    description: (
      <>
        深入剖析富人致富思維和成功秘訣，解讀商業模式的演進軌跡，並從失敗案例中學習寶貴教訓
      </>
    ),
  },
  {
    title: "財報、法說會與新聞洞察",
    Png: require("@site/static/img/insight-icon.png").default,
    description: (
      <>透過公開資訊挖掘投資機會，一起培養敏銳的財務分析能力和資訊解讀技巧</>
    ),
  },
  {
    title: "價值投資心法與工具分享",
    Png: require("@site/static/img/invest-tool-icon.png").default,
    description: (
      <>
        結合程式技術與投資理念，打造實用的投資分析工具，讓資料分析為您的投資決策提供科學依據
      </>
    ),
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img src={Png} className={styles.featurePng} role="img" />
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2" className={styles.sectionTitle}>
            解碼投資的三大核心
          </Heading>
          <p className={styles.sectionSubtitle}>
            從思維建立到實戰工具，陪你走過完整的投資學習旅程
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
