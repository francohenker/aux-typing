import React, { useState } from 'react';
import '../styles/UserProfile.css';

function UserProfile({ username, profilePic }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsOpen(false);
  };

  const handleCustomText = () => {
    window.location.href = '/CustomText';
  };

  return (
    <div className="user-profile-container">
      <div className="profile-info" onClick={toggleDropdown}>
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="username">{username}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Settings</li>
            <li onClick={handleCustomText}>Custom Text </li> 
            <li onClick={handleLogout}>Logout </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
