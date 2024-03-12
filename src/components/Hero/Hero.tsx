import heroImg from '../../images/blogAllArticlesIntroFrameColors.svg';

import './Hero.css';

const Hero = () => {
  return (
    <header className="hero_wrapper">
      <div className="heroImgContainer">
        <img src={heroImg} className="heroImg" alt="hero-background" />
      </div>

      <div className="title-subtitle_grid">
        <h1 className="heroTitle">BloG-ME</h1>

        <div className="subTitle_wrapper">
          <h2 className="subTitle">Express yourself!</h2>

          <p /* ref={headerSectionRef} */ className="subTitle_paragraph">
            A ready to go app for your articles and opinions
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
