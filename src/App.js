import React from "react";

import { DUMMY_DATA } from "./utils/filterData";
import Filter from "./components/filter/FIlter";

const App = () => {
  return (
    <>
      <Filter data={DUMMY_DATA} />
    </>
  );
};

export default App;
