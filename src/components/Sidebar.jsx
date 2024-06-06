import React from "react";
import dashboard from "../images/dashboard_icon.svg";
import trans from "../images/transaction_icon.svg";
import sch from "../images/schedule_icon.svg";
import user from "../images/user_icon.svg";
import settings from "../images/setting_icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar({ setShowSidebar }) {
  return (
    <div className="bg-black font-[Montserrat] text-white py-12 rounded-2xl w-full h-full flex flex-col justify-between items-center relative">
      {/* Close Icon on Sidebar (only on small screens) */}
      <div
        onClick={() => setShowSidebar(false)}
        className="close-icon text-xl sm:hidden absolute top-4 right-4"
      >
        <AiOutlineClose />
      </div>

      <div className="top">
        <div className="font-bold text-4xl">DashGo.</div>

        <div className="items [&>*]:cursor-pointer font-light my-14 flex flex-col space-y-8">
          <div className="flex flex-row space-x-5 items-center ">
            <img src={dashboard} alt="" />
            <Link to={"/"} className="text-xl">
              Dashboard
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <img src={trans} alt="" />
            <Link to={"/calendar"} className="text-xl">
              Calender
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <img src={sch} alt="" />
            <Link to={"/projects"} className="text-xl">
              Kanban
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <img src={user} alt="" />
            <Link to={"/users"} className="text-xl">
              Users
            </Link>
          </div>
          {/* <div className="flex flex-row space-x-5 items-center ">
                        <img src={settings} alt="" srcset="" />
                        <div className='text-xl'>Settings</div>
                    </div> */}
        </div>
      </div>

      <div className="contact text-start w-1/2 flex flex-col  text-gray-400 ">
        <a href="https://adityashukla-portfolio.netlify.app/#contact">
          <div>Help</div>
        </a>
        <a href="https://adityashukla-portfolio.netlify.app/#contact">
          <div>Contact us</div>
        </a>
      </div>
    </div>
  );
}
