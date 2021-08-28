import React from 'react';
import GithubImg from '../public/icons/github.svg'
import './footer.css';

function Footer() {
  return (
    <div className="Footer">
        <h5>Imagine um Footer aqui!</h5>
        <img src={GithubImg} href="https://github.com/Crionigy"></img>
    </div>
  );
}

export default Footer;

