import React, { useState, useEffect, useContext, Fragment } from "react";

import AuthContext from "../components/context/auth-context";
import ProfilePage from "../components/ProfilePage";

import "../components/ProfilePage.css";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState("");

  const username = authCtx.username;
  console.log(username);
  useEffect(async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${username}`);
      const responseData = await response.json();
      console.log(responseData);
      setProfileInfo(responseData.body[0]);
      console.log(profileInfo);
    } catch (err) {
      alert(err.message);
    }
  }, []);
  return (
    <Fragment>
      <ProfilePage
        firstName={profileInfo.firstName}
        lastName={profileInfo.lastName}
        userName={profileInfo.username}
        email={profileInfo.email}
      />
    </Fragment>
  );
};

export default Profile;
