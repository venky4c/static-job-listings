import React, { useState } from "react";
const FilterContext = React.createContext();

function FilterContextProvider(props) {
  const [filterText, setFilterText] = useState("Python");

  const useFilters = () => {
    console.log("from useFilters........." + filterText);
    return setFilterText(filterText);
  };

  return (
    <FilterContext.Provider value={{ filterText, useFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
}

export { FilterContextProvider, FilterContext };
