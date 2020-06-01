import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
//import Image from "../components/image"
//components
import SEO from '../components/seo';
import Hero from '../components/hero01/Hero01';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import Cards02 from '../components/cards02/Cards02';
import StickyBar from '../components/StickyBar/StickyBar';
import ContactForm from '../components/contactForm/ContactForm';

//images
import Bulb from '../images/idea.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <StickyBar />
    <section>
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
    <Cards02
      title="hi"
      img="https://image.cnbcfm.com/api/v1/image/105595209-1543339207911gettyimages-1069148086.jpeg?v=1543339234"
      subTitle="fffffff"
      desc="Sam and Tacha are great"
    />
    <ContactForm formName="home_page1" />
  </Layout>
);

export default IndexPage;
