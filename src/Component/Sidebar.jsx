
import React from 'react';
import './Sidebar.css'; 
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li ><IoMdMenu style={{height:'40px',width:'30px'}} /></li>
                <li><FaHome style={{height:'40px',width:'30px'}}/></li>
                <li><SiYoutubeshorts style={{height:'40px',width:'30px'}}/></li>
                <li><MdSubscriptions style={{height:'40px',width:'30px'}} /></li>
                <li><MdLibraryAdd style={{height:'40px',width:'30px'}} /></li>
                <li><LuHistory style={{height:'40px',width:'30px'}} /></li>
                <li><LuDownload style={{height:'40px',width:'30px'}} /></li>
                <li><AiFillLike style={{height:'40px',width:'30px'}} /></li>
                <li><FiMoreVertical style={{height:'40px',width:'30px'}} /></li>
            </ul>
        </div>
    );
};

export default Sidebar;
