import React from 'react';

const Workspace = ({currentUser, logout}) => {
  return (
    <div>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>


    </div>

  );
}

export default Workspace;
