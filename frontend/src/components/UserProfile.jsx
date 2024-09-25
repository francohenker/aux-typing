// import React, { useState } from 'react';
// import '../styles/UserProfile.css';

// function UserProfile({ username, profilePic }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsOpen(false);
//   };

//   const handleCustomText = () => {
//     window.location.href = '/CustomText';
//   };

//   return (
//     <div className="user-profile-container">
//       <div className="profile-info" onClick={toggleDropdown}>
//         <img src={profilePic} alt="Profile" className="profile-pic" />
//         <span className="username">{username}</span>
//       </div>

//       {isOpen && (
//         <div className="dropdown-menu">
//           <ul>
//             <li>Settings</li>
//             <li onClick={handleCustomText}>Custom Text </li> 
//             <li onClick={handleLogout}>Logout </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile;

import React, { useState } from 'react';
import '../styles/UserProfile.css';

function UserProfile({ username, profilePic }) {
  const [isOpen, setIsOpen] = useState(false);

  // imagen si el usuario no está logeado
  const defaultProfilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

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
        <img 
          src={profilePic || defaultProfilePic} // para usar la imagen por defecto si el usuario no tiene una pfp (profile picture)
          alt="Profile" 
          className="profile-pic" 
        />
        <span className="username">{username}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Settings</li>
            <li onClick={handleCustomText}>Custom Text</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
