import React from "react";
// import img
import profilePic from "../img/profile__avatar.jpg";

const Profile = () => {
  return (
    <div className="todo__profile">
      <div className="profile-pic">
        <img className="avatar" src={profilePic} alt="avatar" />
      </div>
    </div>
  );
};

export default Profile;
