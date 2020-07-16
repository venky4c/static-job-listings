import React from "react";

function Tag(props) {
  const { buttonName, deleteButton } = props;

  const _delete = (e) => {
    e.preventDefault();
    deleteButton(e.target.value);
  };
  console.log(`you want to filter by  ${buttonName}`);
  return (
    <div id="search-tags">
      <span className="tag" name="buttonName" id="btn" multiple="true">
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
