import React from 'react';
import './Profile.css'; 

const Profile = () => {
  return (
    <div className="parent-container">
      <div className="left-div">
        {/* Content of the left div */}
      </div>
      <img src="/path/to/your/image.jpg" alt="Bridge Image" className="bridge-image" alt="A"/>
      <div className="right-div">
        {/* Content of the right div */}
      </div>
    </div>
  );
};

export default Profile;