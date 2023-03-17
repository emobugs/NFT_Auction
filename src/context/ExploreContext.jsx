import { createContext, useState } from "react";

export function ExploreProvider({ children }) {
  const [items, setItems] = useState([]);
  //create method for price

  const sortByPrice = (price) => {
    //  pass props in string format or use regex begore this moment
  };

  // create method for sort

  // create method for type
  return <ExploreContext.Provider>{children}</ExploreContext.Provider>;
}

export default ExploreContext;
