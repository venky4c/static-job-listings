import React, { useState } from "react";
import Tag from "./Tag";

function SearchBar(props) {
  //const [filterValues, setFilterValues] = useState[filterValues]

  const filterValues = props.filterValues;
  console.log(`props.filterValues ${filterValues}`);
  const [tags, setTags] = useState([...filterValues]);
  const onDelete = (index) => {
    console.log(`tags before ${tags.length}`);
    tags.splice(index, 1);
    console.log(`tags after ${tags.length}`);
    setTags(tags);
    console.log(`index value is ${index}`);
    //console.log(`the filtered values from SearchBar are ${tags}`);
    //setFilterValues(filterValues);
  };

  //console.log(`props.filterValues ${filterValues}`);
  return (
    <div className="search-bar">
      <div>
        {filterValues.map((value, index) => (
          <Tag
            id={index}
            buttonName={value}
            tags={tags}
            index={index}
            deleteButton={() => onDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
