import React, { useState } from 'react'
import './header.css'
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { BsPersonStanding } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiDocumentReport } from "react-icons/hi";
import { FaHospital } from "react-icons/fa";

function Header() {
    const [regular,setRegular]=useState(8);
  const [club,setClub]=useState(0);
  const [remedial,setRemedial]=useState(13);
  const handleIncrement=()=>{
    setClub(club+1)
  }
  const handleRemedial=()=>{
    setRemedial(remedial+1)
  }
  const handleRegular=()=>{
    setRegular(regular+1)
  }
  return (
    <div className='content'>
        <div className="head">
            <h2>Student Management</h2>
        </div>
        <div className="grid-items">
            <div className="regular" onClick={handleRegular}>
                <FaUser class="icon"/>
                <h3>{regular}</h3>
                <p>Regular Student</p>
            </div>
            <div className="Remedial" onClick={handleRemedial}>
                <FaUserTie class="icon"/>   
                <h3>{remedial}</h3>
                <p>Remedial Student</p>
            </div>
            <div className="in-paid" onClick={handleIncrement}>
                <BsPersonStanding class="icon"/>   
                <h3>{club}</h3>
                <p>In Paid Clubs</p>
            </div>
        </div>
        <h1 className='menu'>Menu</h1>
        <div className="enrollment">
            <div className="user-enroll" onClick={handleRegular}>
                <FaUser class="icon"/>
                <p>Regular Enrollment</p>
            </div>
            <div className="remedial-enroll" onClick={handleRemedial}>
                <FaBook class="icon"/>
                <p>Remedial Enrollment</p>
            </div>
            <div className="club-enroll" onClick={handleIncrement}>
                <BsPersonStanding class="icon"/>
                <p>Club Enrollment</p>
            </div>
            <div className="classroom">
                <FaBookOpenReader class="icon"/>
                <p>Classroom Management</p>
            </div>
            <div className="mail">
                <IoIosMail class="icon"/>
                <p>SMS/Mail</p>
            </div>
            <div className="Attendance-management">
                <HiDocumentReport class="icon"/>
                <p>Attendance</p>
            </div>
            <div className="clinic">
                <FaHospital class="icon"/>
                <p>Clinic</p>
            </div>
        </div>
    </div>
  )
}

export default Header;