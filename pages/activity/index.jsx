import styles from "./index.module.scss";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

import { useState, useEffect } from "react";

export default function index() {
  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState([]);
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  const sortHandler = (value) => {
    console.log(value);
    setSort(value);
  };

  const typeHandler = (value) => {
    console.log(value);
    setType(value);
  };

  async function getData() {
    return await await (
      await fetch(`${process.env.apiUrl}/activities/?type=${type}`)
    ).json();
  }

  useEffect(async () => {
    const response = await fetch(`${process.env.apiUrl}/activities`);
    const data = await response.json();

    setActivity(data.activities);
    setActivityFilters(data.filters);
  }, []);

  useEffect(async () => {
    const result = await getData();
    console.log(result);
  }, [typeHandler]);

  return (
    <div className={styles["wrapper"]}>
      <Header className={styles["header"]} />
      <Hero text="Activity" className={styles["hero"]} />
      <div className={styles["behind"]}></div>
      <ActivityFilters
        filters={activityFilters}
        sortHandler={sortHandler}
        typeHandler={typeHandler}
      />
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}
