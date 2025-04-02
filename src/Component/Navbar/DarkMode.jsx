import React, { useState, useEffect } from "react";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";
import "./navbar.css";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#fff"; 
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.body.style.backgroundColor = "#fff"; 
      document.body.style.color = "#000";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switch">
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt="Toggle Dark Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-icon"
      />
    </div>
  );
};

export default DarkMode;

