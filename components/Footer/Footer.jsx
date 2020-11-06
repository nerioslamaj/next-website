import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCodepen, FaDribbble } from 'react-icons/fa';
import './Footer.scss';

export const Footer = () => {

  const socialClick = link => {
    console.log(link)
  }

  return (
    <footer className="Footer row" id="contact">
      <div className="container">
        <h2 className="alt">Let's keep in touch</h2>
        <h3 className="alt"><a onClick={socialClick('Email')} target="_blank" href="mailto:nerios.lamaj@gmail.com">nerios.lamaj@gmail.com</a></h3>
        <div className="social-media">
          <a onClick={socialClick('Linkedin')} target="_blank" href="https://www.linkedin.com/in/nerioslamaj/"><FaLinkedin/></a>
          <a onClick={socialClick('Github')} target="_blank" href="https://github.com/nerioslamaj"><FaGithub/></a>
          <a onClick={socialClick('Goodreads')} target="_blank" href="https://www.goodreads.com/user/show/49899773-nerios-lamaj" className="goodreads">g</a>
          <a onClick={socialClick('Codepen')} target="_blank" href="https://codepen.io/nerios/"><FaCodepen/></a>
          <a onClick={socialClick('Dirbbble')} target="_blank" href="https://dribbble.com/nerioslamaj"><FaDribbble/></a>
          <a onClick={socialClick('Twitter')} target="_blank" href="https://twitter.com/NeriosLamaj"><FaTwitter/></a>
          <a onClick={socialClick('Instagram')} target="_blank" href="https://www.instagram.com/nerioslamaj/"><FaInstagram/></a>
        </div>
        <div className="mini-footer">
          <p>Designed and <a onClick={socialClick('GIT Repo')} target="_blank" href="https://github.com/nerioslamaj/nerios.dev">developed</a> by Nerios Lamaj — For more information you can <a onClick={socialClick('CV Download')} href="files/nlcv.pdf">download my CV</a>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
