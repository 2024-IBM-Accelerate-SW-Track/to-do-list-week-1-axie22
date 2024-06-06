import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/profilePictureIBM.jpg"; 
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img className="profile_image" src={profilePic} alt="Profile Pic"></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Alexander Xie</div>
              <div className="brief_description">
                <p>I'm currently a sophomore at NYU studying computer science and data science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}