import React from 'react';
import me from "../media/me.jpeg";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="picture">
      <img className="profile-img" src={me} alt="A" />
    </div>
  );
};

export default Profile;