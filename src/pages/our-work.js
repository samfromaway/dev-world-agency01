import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';

//components
import SEO from '../components/seo';
import Card03 from '../components/card03/Card03';
import Card04 from '../components/card04/Card04';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import SlickCarousel from '../components/slickCarousel/SlickCarousel';
import ContactUsStrip from '../components/contactUsStrip/ContactUsStrip';

//data
import testimonials from '../data/testimonials';
import {
  webProjects,
  designProjects,
  marketingProjects,
} from '../data/projects';
//images
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';
import Solution from '../images/bigger-picture.png';

const OurWork = () => {
  const [chosenCategory, setchosenCategory] = useState('web');
  const [card41Style, setCard41Style] = useState('card04-active');
  const [card42Style, setCard42Style] = useState('');
  const [card43Style, setCard43Style] = useState('');

  const anchorRef = useRef(null);

  const handleSmallCardClick = category => {
    setchosenCategory(category);
    activeStyle(category);
    categoryTitle(category);
    scrollToAnchor();
  };

  const scrollToAnchor = () => {
    anchorRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToAnchorDelayed = () => {
    setTimeout(scrollToAnchor, 200);
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
    scrollToAnchorDelayed();
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
        setCard41Style('card04-active');
        setCard42Style('');
        setCard43Style('');
    }
  };

  const categoryTitle = () => {
    switch (chosenCategory) {
      case 'web':
        return 'Web Projects';

      case 'design':
        return 'Design Projects';

      case 'marketing':
        return 'Marketing Projects';

      default:
        return 'Web Prodjects';
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
      <section className="section section-elegant-blue slim-section">
        <h2 className="title03 title-bright">Our Work</h2>
        <ImgContent01
          title="Complete Solution"
          img={Solution}
          desc={`We offer a complete solution for your "Web-Endeavours". We support you from building the website to getting happy clients.`}
          classAdd="text-bright "
        />
      </section>
      <section className="section slim-section section05 ">
        <h2 className="title09 title-bright pulse01">Choose A Category</h2>
        <section className="spacer-our-work"></section>
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
      <section className="project-section">
        <div ref={anchorRef} className="anchor"></div>
        <h2 className="title10">{categoryTitle()}</h2>
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

      <section className="section section01">
        <h2 id="title06" className="title03">
          Testimonials
        </h2>
        <div className="slick-wrapper">
          <SlickCarousel data={testimonials} />
        </div>
      </section>
      <section className="contact-us-strip-wrapper">
        <ContactUsStrip />
      </section>
    </Layout>
  );
};

export default OurWork;
