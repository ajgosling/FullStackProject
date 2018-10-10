import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WorkspaceSidebar from './workspace_sidebar';

const Workspace = () => {
  return (
    <div className="workspace">
      <WorkspaceSidebar />
      <div className="middlechat">
        i'm the chat in the middle!
      </div>
    </div>
  );
};


export default Workspace;
