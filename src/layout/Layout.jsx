import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../components/Header/Home";


const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Get saved dark mode setting from localStorage
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    // Apply dark mode to the root HTML element
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    // Apply or remove the dark mode class on the root HTML element
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="dark:bg-pink-300 bg-[#3e4369] dark:text-black text-white">
      <Navbar />

      <div className={Home ? "w-full mx-auto" : "w-11/12 mx-auto"}>
        <Outlet />
      </div>
      <div className="bg-[#161b3d] dark:bg-white dark:text-black text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
