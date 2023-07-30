import React from 'react';

var date = new Date();
var year = date.getFullYear();

function Footer() {
  return (
    <div className = "footer">
      <p>copyright ahreum {year}</p>
    </div>
  );
}

export default Footer;