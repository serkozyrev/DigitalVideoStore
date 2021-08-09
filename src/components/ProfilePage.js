import React from "react";

const ProfilePage = (props) => {
  console.log(props);
  return (
    <div className="grid_movie movie_details">
      <div className="info_section">
        <div className="movie_header">
          <span className="profile grid-profile">
            <span>Full Name: </span>
            <span>
              {props.firstName} {props.lastName}
            </span>
          </span>

          <div className="type">Email: {props.email}</div>
          <div>Username: {props.userName}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
