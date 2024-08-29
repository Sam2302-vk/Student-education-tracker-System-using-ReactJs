import React from 'react'
import './navbar.css';
import { IoPeopleSharp } from "react-icons/io5";
import { VscLayoutPanel } from "react-icons/vsc";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiGrid42 } from "react-icons/ci";
import { HiDocumentReport } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="download.jpg" alt="" />
        </div>
        <div className="lists">
            <ul>
                <li><IoPeopleSharp className="icon"/><br />Student Management</li>
                <li><VscLayoutPanel className='icon'/><br />Financial Management</li>
                <li><RiDiscountPercentFill className='icon'/><br />Quality Control</li>
                <li><CiGrid42 className='icon'/><br />Report Delivery</li>
                <li><HiDocumentReport className='icon'/><br />Attendance</li>
            </ul>
        </div>
        <div className="bottom">
            <FaCircleQuestion className="icon"/>
            <IoIosSettings className="icon"/>
            <FaArrowRightFromBracket className="icon"/>
        </div>
    </div>
  )
}

export default Navbar;