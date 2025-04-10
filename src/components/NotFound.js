import React from "react";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-header">404</h1>
      <p className="not-found-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className="not-found-link">
        Back Home
      </a>
    </div>
  );
};

export default NotFound;
