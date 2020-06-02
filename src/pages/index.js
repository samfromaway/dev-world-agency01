import React from 'react';

import Layout from '../components/layout';
//import Image from "../components/image"
//components
import SEO from '../components/seo';
import Hero from '../components/hero01/Hero01';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import Card01 from '../components//card01/Card01';
import Card02 from '../components/card02/Card02';
import StickyBar from '../components/StickyBar/StickyBar';
import ContactForm from '../components/contactForm/ContactForm';

//images
import Bulb from '../images/idea.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <StickyBar />
    <section className="section section03">
      <h2 className="title03">How We Work</h2>
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd=""
        //animation="appearanim01"
      />
      <ImgContent01
        title="Your Idea"
        img={Bulb}
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
      <h2 id="title06" className="title03">
        Services
      </h2>
      <div className="cards01">
        <Card01
          icon={'x'}
          title="Title"
          listItems={[
            'Web Design',
            'HTML, CSS, JS',
            'Wordpress',
            'Wix(Advanced)',
            'React',
          ]}
          buttonText="See Projects"
          buttonPath="/about"
        />
        <Card01
          icon={'x'}
          title="Title"
          listItems={[
            'Strategy & Planning',
            'Facebook Ads',
            'Google Ads',
            'Content Writing',
            'Video Editing',
          ]}
          buttonText="See Projects"
          buttonPath="/about"
        />
        <Card01
          icon={'x'}
          title="Title"
          listItems={[
            'Photo Editing',
            'UI / UX',
            'Logo Design',
            'Print Design',
            'Style Guides',
          ]}
          buttonText="See Projects"
          buttonPath="/about"
        />
      </div>
    </section>
    <section className="section section01">
      <h2 id="title06" className="title03">
        Testimonials
      </h2>
      <div className="cards01">
        <Card02
          title="Jimmy Neutro"
          img="https://image.cnbcfm.com/api/v1/image/105595209-1543339207911gettyimages-1069148086.jpeg?v=1543339234"
          subTitle="United States"
          desc="Sam and Tacha are great Sam and Tacha are great Sam and Tacha are great Sam and Tacha are great"
        />
        <Card02
          title="Frank Heinzenmeier"
          img="https://image.cnbcfm.com/api/v1/image/105595209-1543339207911gettyimages-1069148086.jpeg?v=1543339234"
          subTitle="Switzerland"
          desc="Sam and Tacha are great Sam and Tacha are great"
        />
        <Card02
          title="Frank Heinzenmeier"
          img="https://image.cnbcfm.com/api/v1/image/105595209-1543339207911gettyimages-1069148086.jpeg?v=1543339234"
          subTitle="Switzerland"
          desc="Sam and Tacha are great Sam and Tacha are great"
        />
      </div>
    </section>
    <section className="section section03">
      <h2 id="title06" className="title03">
        Contact Us
      </h2>
      <ContactForm formName="home_page1" />
    </section>
  </Layout>
);

export default IndexPage;
