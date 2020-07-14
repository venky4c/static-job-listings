import React, { useState } from "react";

function Tag(props) {
  const { tags, buttonName, deleteButton, index } = props;
  //const [tagName, setTagName] = useState([buttonName]);
  const _delete = (e) => {
    e.preventDefault();
    deleteButton(index);
  };
  console.log(`you want to filter by  ${buttonName}`);
  return (
    // <form action="">
    <div id="search-tags">
      <span className="tag" name="buttonName" id="btn" multiple="true">
        {buttonName}
        <button
          className="delete is-small is-primary"
          onClick={(e) => _delete(e)}
        ></button>
      </span>
    </div>
    // </form>
  );
}
export default Tag;
// const deleteButton = (e) => {
//   e.preventDefault();
//   setTagName((prevState) => [...prevState, buttonName]);
//   console.log(`tagName is ${tagName}`);
//   var elem = document.getElementById("btn");
//   console.log(`elem is >>>>>> ${elem}`);
//   elem.remove();
//   return false;
// };
