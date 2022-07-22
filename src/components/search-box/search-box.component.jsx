import React from "react";
import "./../search-box/search-box.styles.css";

export const SearchBox = function ({ placeholder, state_handler }) {
  return <input className="search" type="search" placeholder={placeholder} onChange={state_handler} />;
};
