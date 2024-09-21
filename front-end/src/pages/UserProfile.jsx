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


  return (
    <div className="user-profile-container">
      <div className="profile-info" onClick={toggleDropdown}>
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="username">{username}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Configuración</li>
            <li>Preferencias</li>
            <li onClick={handleLogout}>Cerrar sesión </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
