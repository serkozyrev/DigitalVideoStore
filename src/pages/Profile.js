import React, { useState, useEffect, useContext, Fragment } from "react";

import AuthContext from "../components/context/auth-context";
import ProfilePage from "../components/ProfilePage";

import "../components/ProfilePage.css";

const Profile = (props) => {
  const authCtx = useContext(AuthContext);

  const [profileInfo, setProfileInfo] = useState("");
  useEffect(() => {
    const fetchMovies = () => {
      fetch(`http://localhost:5000/users/user/${props.id}`, {
        method: "GET",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setProfileInfo(data.body[0]);
        });
    };
    try {
      fetchMovies();
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
