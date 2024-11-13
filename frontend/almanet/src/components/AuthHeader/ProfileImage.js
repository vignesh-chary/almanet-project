// src/components/Header/ProfileImage.js
import React from 'react';

function ProfileImage({ profileUrl }) {
  return (
    <img
      src={profileUrl || "default-profile-image.jpg"} // Use a default image if profileUrl is not provided
      alt="User profile"
      className="w-10 h-10 rounded-full cursor-pointer"
    />
  );
}

export default ProfileImage;
