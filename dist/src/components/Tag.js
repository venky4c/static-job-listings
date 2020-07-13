import React from "react";

function removeButton() {
  var elem = document.getElementById("btn");
  elem.parentNode.remove();
  return false;
}
const Tag = (props) => (
  <div className="column">
    <span className="tag">
      {props.name}
      <button
        className="delete is-small is-primary"
        id="btn"
        onClick={() => {
          removeButton();
        }}
      ></button>
    </span>
  </div>
);

export default Tag;
