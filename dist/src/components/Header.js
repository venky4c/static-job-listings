import React from "react";

function Header() {
  return (
    <div className="header">
      <picture>
        <source
          media="(min-width: 600px)"
          srcSet={require("../assets/images/bg-header-desktop.svg")}
        />
        <img
          src={require("../assets/images/bg-header-mobile.svg")}
          alt="IfItDoesntMatchAnyMedia"
        />
      </picture>
    </div>
  );
}

export default Header;
