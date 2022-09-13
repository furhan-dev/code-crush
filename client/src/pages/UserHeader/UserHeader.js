import React from 'react'
import "./UserHeader.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Link } from "react-router-dom";

function UserHeader( {backButton}) {
  return (
    <div className='header'>
      {backButton ? (
        <IconButton> 
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
      <IconButton>
        <PersonIcon fontSize="large" className='header_icon'/>
      </IconButton>
      )}
    {/* <Link to="/">

      <img
      className='header_logo'
      src={require("./images/datinglogo.png")}
      alt=""
      />
  </Link> */}
  <Link to="/chat">
    <IconButton>
        <ForumIcon fontSize="large" className='header_icon'/>
    </IconButton>
    </Link>
    

    </div>
  )
}

export default UserHeader
