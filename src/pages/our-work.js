import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
//components
import SEO from '../components/seo';
import Card03 from '../components/card03/Card03';
import Card04 from '../components/card04/Card04';
//data
import {
  webProjects,
  designProjects,
  marketingProjects,
} from '../data/projects';
//images
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';

//https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react

const OurWork = () => {
  const [chosenCategory, setchosenCategory] = useState(null);
  const [card41Style, setCard41Style] = useState('');
  const [card42Style, setCard42Style] = useState('');
  const [card43Style, setCard43Style] = useState('');

  const handleSmallCardClick = category => {
    setchosenCategory(category);
    activeStyle(category);
  };

  const setCategoryFromURL = url => {
    if (url.indexOf('web') > -1) {
      setchosenCategory('web');
      activeStyle('web');
    } else if (url.indexOf('design') > -1) {
      setchosenCategory('design');
      activeStyle('design');
    } else if (url.indexOf('marketing') > -1) {
      setchosenCategory('marketing');
      activeStyle('marketing');
    } else return null;
  };

  const activeStyle = category => {
    switch (category) {
      case 'web':
        setCard41Style('card04-active');
        setCard42Style('');
        setCard43Style('');
        break;
      case 'design':
        setCard41Style('');
        setCard42Style('card04-active');
        setCard43Style('');
        break;
      case 'marketing':
        setCard41Style('');
        setCard42Style('');
        setCard43Style('card04-active');
        break;
      default:
        setCard41Style('');
        setCard42Style('');
        setCard43Style('');
    }
  };

  useEffect(() => {
    setCategoryFromURL(window.location.href);
  }, []);

  const showCategory = category => {
    if (category === 'web') {
      return webProjects;
    } else if (category === 'design') {
      return designProjects;
    } else if (category === 'marketing') {
      return marketingProjects;
    } else {
      return webProjects;
    }
  };

  return (
    <Layout>
      <SEO title="Our Work" />
      <section className="section section02">
        <h2 className="title03">Services</h2>
        <h4 className="title04 pulse01">Choose A Category</h4>
        <div className="cards01">
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleSmallCardClick('web')}
            onKeyDown={() => handleSmallCardClick('web')}
            className="card04-wrapper"
          >
            <Card04
              icon={Web}
              title="Web Development"
              desc="We help you create a stunning website that generates leads and helps existing customers navigate your offer."
              buttonText="See Examples"
              activeStyle={card41Style}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleSmallCardClick('design')}
            onKeyDown={() => handleSmallCardClick('design')}
            className="card04-wrapper"
          >
            <Card04
              icon={Design}
              title={'Graphic Design'}
              desc="Photo Editing"
              buttonText="See Projects"
              activeStyle={card42Style}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleSmallCardClick('marketing')}
            onKeyDown={() => handleSmallCardClick('marketing')}
            className="card04-wrapper"
          >
            <Card04
              icon={Marketing}
              title="Online Marketing"
              desc="SEO Strategy"
              buttonText="See Projects"
              activeStyle={card43Style}
            />
          </div>
        </div>
      </section>
      <section
        className={
          chosenCategory === null
            ? 'section project-section'
            : 'section project-section-active'
        }
      >
        <h2 className="title03">Top 3 Projects</h2>

        <div className="cards01">
          {showCategory(chosenCategory).map(project => (
            <Card03
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              icons={project.icon}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
