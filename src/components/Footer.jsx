import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>&copy; {year} | Application developed by Gabriel Rosa</p>
    </footer>
  );
};

export default Footer;
