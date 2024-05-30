import React from "react";
import "./dropdownmenu.scss";

const DropdownMenu = ({ isDarkTheme, handleThemeToggle }) => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <label className="switch">
          <input
            type="checkbox"
            id="dropdown-theme-toggle"
            checked={isDarkTheme}
            onChange={handleThemeToggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-label">Dark Mode</span>
      </div>
      {/* Add more dropdown items here if needed */}
    </div>
  );
};

export default DropdownMenu;
