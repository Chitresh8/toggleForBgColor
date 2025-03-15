import React from "react";
import "./Header.css";

export const Header = ({ title = "TFBC" }) => {
  return (
    <header className="headerDetails">
      <h1>{title}</h1>
    </header>
  );
};
