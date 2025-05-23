import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} Jordan Buckley. All rights reserved.
    </footer>
  );
}

export default Footer;