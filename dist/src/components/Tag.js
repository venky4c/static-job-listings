import React, { useState } from "react";
// const [tagName, setTagName] = useState([]);
// const removeButton = (e) => {
//   //e.preventDefault();
//   setTagName((prevState) => [...prevState, tagName]);
//   console.log("reached");
//   var elem = document.getElementById("btn");
//   elem.parentNode.remove();
//   return false;
// };
function Tag(props) {
  const [tagName, setTagName] = useState([]);
  const removeButton = (e) => {
    //e.preventDefault();
    setTagName((prevState) => [...prevState, tagName]);
    console.log("reached");
    var elem = document.getElementById("btn");
    elem.parentNode.remove();
    return false;
  };
  return (
    // <form action="">
    <div id="search-tags">
      <span className="tag" name="tagName" multiple="true">
        {props.name}
        <button
          className="delete is-small is-primary"
          id="btn"
          onClick={removeButton}
        ></button>
      </span>
    </div>
    // </form>
  );
}

export default Tag;
