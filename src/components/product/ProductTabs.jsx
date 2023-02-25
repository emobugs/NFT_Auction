import styles from "./ProductTabs.module.scss";

import { Tabs, Tab } from "@mui/material";
import { Table, TableRow, TableCell } from "@mui/material";
import { TabContext } from "@mui/lab";
import { formatDistance, parseISO } from "date-fns";

import { useState, useEffect } from "react";

import User from "../user/User";

export default function ProductTabs({ text, bids }) {
  // set initial value with first tab index
  const [value, setValue] = useState(0);

  // change tab index on click
  const handleTabs = (e, index) => {
    setValue(index);
  };

  // render tab content
  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  useEffect(() => {}, []);

  const EvenOrOdd = (i) => ((i + 1) % 2 === 0 ? "even" : "odd");

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleTabs}>
          <Tab className={styles["tab-details"]} label="Details"></Tab>
          <Tab className={styles["tab-bids"]} label="Bids"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          {text}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table>
            {bids.map((bid, i) => {
              const {
                user: { name, avatar, verified },
                amount,
                date,
              } = bid;
              return (
                <TableRow
                className={styles[`table-row-${i}`]}
                // add evenOrOdd class for diff backColor
                // className={`${styles[`table-row-${i}`]} ${
                //   styles[`${EvenOrOdd(i)}`]
                // }`}
                >
                  <TableCell>
                    <User
                      name={name}
                      avatar={avatar}
                      verified={verified}
                    ></User>
                  </TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>
                    <p>
                      {formatDistance(new Date(parseISO(date)), new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
