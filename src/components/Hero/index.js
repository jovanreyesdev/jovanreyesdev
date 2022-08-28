import React from 'react';

import TypewriterEffect from 'components/TypewriterEffect';
import GithubSocial from 'components/Social/Github';
import PhoneSocial from 'components/Social/Phone';
import LinkedinSocial from 'components/Social/Linkedin';
import InstagramSocial from 'components/Social/Instagram';

import DivePhoto from 'assets/images/jovanbanner-min.jpg';
import Photo from 'assets/images/portrait.jpg';
import IntroVideo from 'assets/intro.webm';

import './index.scss';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${DivePhoto})` }}>
      <div className="video-container">
        <video className="introvideo" autoPlay loop muted>
          <source src={IntroVideo} type="video/webm" />
        </video>
      </div>
      <div className="content-wrapper">
        <div className="bio">
          <TypewriterEffect>
            Billionaire
          </TypewriterEffect>
        </div>
        <div className="social-links">
          <GithubSocial />
          <PhoneSocial />
          <LinkedinSocial />
          <InstagramSocial />
        </div>
        <div className="portrait">
          <img src={Photo} alt="photoid" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
