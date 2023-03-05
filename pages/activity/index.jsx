import styles from "./index.module.scss";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

import activites from "../../data/activity.json";

export default function index() {
  return (
    <div className={styles["wrapper"]}>
      <Header className={styles['header']} />
        <Hero text="Activity" className={styles["hero"]} />
      <div className={styles["behind"]}>
      </div>
      <ActivityFilters />
      <ActivityList items={activites} />
      <Footer />
    </div>
  );
}
