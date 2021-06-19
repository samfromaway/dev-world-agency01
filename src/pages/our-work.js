import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';

//components
import SEO from '../components/seo';
import Card03 from '../components/card03/Card03';
import Card04 from '../components/card04/Card04';
import VideoContent01 from '../components/videoContent01/VideoContent01';
import SlickCarousel from '../components/slickCarousel/SlickCarousel';
import ContactUsStrip from '../components/contactUsStrip/ContactUsStrip';
import PageHeader from '../components/pageHeader/PageHeader';

//data
import testimonials from '../data/testimonials';
import projects from '../data/projects';
//images
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';

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
        return 'Web Development';

      case 'design':
        return 'Design & Branding';

      case 'marketing':
        return 'Content Management';

      default:
        return '';
    }
  };
  useEffect(() => {
    setCategoryFromURL(window.location.href);
  }, []);

  return (
    <Layout>
      <SEO title="Our Work" />
      <PageHeader title="OUR WORK" />
      <section className="section section-elegant-blue slim-section">
        <VideoContent01
          title="Our Approach"
          videoSrc="https://www.youtube.com/embed/Bhyg42y1oZg"
          desc={`We support you from building the website to getting happy clients.\n In the video Sam explains a popular approach we use for landing-page websites. This should give you an overview of one possible way, of how we approach a project.`}
          classAdd="text-bright "
        />
      </section>
      <section className="section slim-section section05 ">
        <h2 className="title09 title-bright">Choose A Category</h2>
        <section className="spacer-our-work"></section>
        <div className="cards04">
          <Card04
            icon={Web}
            title="Web Development"
            activeStyle={card41Style}
            handleSmallCardClick={handleSmallCardClick}
            value="web"
          />

          <Card04
            icon={Design}
            title={'Design & Branding'}
            activeStyle={card42Style}
            handleSmallCardClick={handleSmallCardClick}
            value="design"
          />

          <Card04
            icon={Marketing}
            title="Content Management"
            activeStyle={card43Style}
            value="marketing"
            handleSmallCardClick={handleSmallCardClick}
          />
        </div>
      </section>
      <section className="project-section">
        <div ref={anchorRef} className="anchor"></div>
        <h2 className="title10">{categoryTitle()}</h2>
        <div className="cards01">
          {projects.map(project => (
            <Card03
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              icons={project.icon}
              link={project.link}
              active={
                project.category === chosenCategory ? 'card03-active' : ''
              }
            />
          ))}
        </div>
      </section>
      <section className="section section-light-color section07">
        <h2 className="title03">Testimonials</h2>
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
