import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import notify from "../images/notify.svg";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Context } from "../context/contextApi";
import { useContext } from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

export default function Navbar({ showSidebar, setShowSidebar }) {
  const { user } = useContext(Context);
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <nav className="flex flex-row justify-between">
      <strong className="text-2xl ">Dashboard</strong>

      <div className="info hidden sm:flex space-x-10">
        <div className="input relative">
          <input
            placeholder="Search..."
            className="rounded-xl px-3 py-2"
            type="text"
          />
          <div className="icon absolute right-3 top-3">
            <BiSearch />
          </div>
        </div>
        <div className="flex">
          <button onClick={handleMode}>
            {mode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
        </div>
        <img src={notify} alt="" />
        <Link to="/form">
          <img
            className="w-9 h-9 rounded-full"
            src={user?.img || avatar}
            alt="profile"
          />
        </Link>
      </div>

      {/* Hamburger only shows on small screen */}
      <div
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
        className="icon sm:hidden text-2xl self-center cursor-pointer"
      >
        <FiMenu />
      </div>
    </nav>
  );
}
