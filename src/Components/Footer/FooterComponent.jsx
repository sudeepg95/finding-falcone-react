import React from 'react';

import './FooterComponent.scss';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="small-footer-text">
            <a
              href="https://www.geektrust.in/coding-problem/frontend/space"
              rel="noopener noreferrer"
              target="_blank"
            >
              Problem link (Geektrust)
            </a>
          </div>
          <div className="small-footer-text">Created by Sudeep</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
