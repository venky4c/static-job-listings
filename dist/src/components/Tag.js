import React from "react";

function Tag(props) {
  const { buttonName, deleteButton } = props;

  const _delete = (e) => {
    e.preventDefault();
    deleteButton(e.target.value);
  };

  return (
    <div id="search-tags">
      <span
        className="tag is-primary"
        name="buttonName"
        id="btn"
        multiple="true"
      >
        {buttonName}
        <button
          className="delete is-small is-primary"
          onClick={(e) => _delete(e)}
        ></button>
      </span>
    </div>
  );
}
export default Tag;
