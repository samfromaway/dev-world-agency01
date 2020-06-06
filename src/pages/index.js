import React from 'react';
import Layout from '../components/layout';
//import Image from "../components/image"
//components
import SEO from '../components/seo';
import Hero from '../components/hero01/Hero01';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import Card01 from '../components/card01/Card01';
import StickyBar from '../components/stickyBar/StickyBar';
import AboutBox from '../components/aboutBox/AboutBox';
import ContactForm from '../components/contactForm/ContactForm';
import SlickCarousel from '../components/slickCarousel/SlickCarousel';
//images
import Bulb from '../images/idea.png';
import BiggerPicture from '../images/bigger-picture.png';
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';
import WebLogos from '../images/WebLogos.png';
import MarketingLogos from '../images/MarketingLogos.png';
import DesignLogos from '../images/DesignLogos.png';
//data
import testimonials from '../data/testimonials';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <StickyBar />
    <section className="section section01">
      <h2 className="title03">How We Work</h2>
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd=""
        //animation="appearanim01"
      />
      <ImgContent01
        title="Your Goal - Our Focus"
        img={BiggerPicture}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd="wrapreverse01"
        //animation="appearanim01"
      />
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd=""
        //animation="appearanim01 reverse02 "
      />
    </section>
    <section className="section section02">
      <h2 className="title03">Services</h2>
      <div className="cards01">
        <Card01
          icon={Web}
          title="Web Development"
          listItems={[
            'Websites',
            'HTML, CSS, JS',
            'Wordpress',
            'Wix (Advanced)',
            'React',
          ]}
          buttonText="See Projects"
          buttonPath="/our-work/#web"
          logos={WebLogos}
        />
        <Card01
          icon={Design}
          title={'Graphic Design & Branding'}
          listItems={[
            'Photo Editing',
            'UI / UX',
            'Logo Design',
            'Video Creation',
            'Brand Strategy',
          ]}
          buttonText="See Projects"
          buttonPath="/our-work/#design"
          logos={DesignLogos}
        />
        <Card01
          icon={Marketing}
          title="Online Marketing"
          listItems={[
            'SEO Strategy',
            'Facebook Ads',
            'Google Ads',
            'Content Writing',
            'Marketing Strategy',
          ]}
          buttonText="See Projects"
          buttonPath="/our-work/#marketing"
          logos={MarketingLogos}
        />
      </div>
    </section>
    <section className="section section03">
      <h2 id="title06" className="title03">
        Testimonials
      </h2>
      <div className="slick-wrapper">
        <SlickCarousel data={testimonials} />
      </div>
    </section>
    <section className="section section04">
      <h2 className="title03 title03-light">Contact Us</h2>
      <div className="contact-section-wrapper">
        <AboutBox
          stylesAddText="about-box-text-light"
          stylesAddTitle="about-box-title-light"
        />
        <ContactForm formName="home_page1" />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

// hero background color match photo
// search replace id
//smoot scroll contact page
// contact form netlify
// find replace dev Wolrd
// terms and conditions
// prop types
// ie conform
