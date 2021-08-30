import React from 'react';
import GithubImg from '../public/icons/github.svg'
import InstagramImg from '../public/icons/instagram.svg'
import LinkedinImg from '../public/icons/linkedin.svg'
import './footer.css';

function Footer() {
  return (
    <div className="Footer">
        <a href="https://github.com/Crionigy" target="_blank" rel="noreferrer" ><img src={GithubImg} alt="Github"></img></a>
        <a href="https://github.com/Crionigy" target="_blank" rel="noreferrer"><img src={InstagramImg} alt="Instagram"></img></a>
        <a href="https://github.com/Crionigy" target="_blank" rel="noreferrer"><img src={LinkedinImg} alt="Linkedin"></img></a>
    </div>
  );
}

export default Footer;

