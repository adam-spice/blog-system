import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <!-- <div className="container-fluid"> --> */}
      <nav>
        <li>
          <a href='/'>
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa fa-twitter'></i>
          </a>
        </li>

        <li>
          <a href='/'>
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa fa-wordpress'></i>
          </a>
        </li>

        <li id='copyRight'>@Copyright 2018 www.lucasstahl.com</li>
      </nav>
      {/* <!-- </div> --> */}
    </footer>
  );
};

export default Footer;
