import styles from "./ProductTabs.module.scss";

import { Tabs, Tab } from "@mui/material";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import { TabContext } from "@mui/lab";
import { formatDistance, parseISO } from "date-fns";

import classNames from "classnames";

import { useState, useEffect } from "react";

import User from "../user/User";

export default function ProductTabs({ text, bids }) {
  // set initial value with first tab index
  const [value, setValue] = useState(0);
  const [evenOrOdd, setEvenOrOdd] = useState('odd');

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

  const EvenOrOdd = (i) => ((i + 1) % 2 === 0 ? 'even' : 'odd');

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value.toString()}>
        <Tabs value={value} onChange={handleTabs}>
          <Tab className={styles["tab-details"]} label="Details"></Tab>
          <Tab className={styles["tab-bids"]} label="Bids"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          {text}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table>
            <TableBody>
              {bids?.map((bid, i) => {
                const {
                  user: { name, avatar, verified },
                  amount,
                  date,
                } = bid;
                return (
                  <TableRow
                  className={classNames({
                    [styles[`table-row-${i}`]]: true,
                    [styles[EvenOrOdd(i)]] : true 
                  })}
                  >
                    {console.log(name, avatar, verified)}
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
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
