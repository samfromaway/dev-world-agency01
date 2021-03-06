import React from 'react';
//data
import testimonials from '../data/testimonials';
import Layout from '../components/layout';
//components
import SEO from '../components/seo';
import Hero from '../components/heroMain/Hero';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import ServicesCards from '../components/servicesCards/ServicesCards';
import StickyBar from '../components/stickyBar/StickyBar';
import ContactMessageBox from '../components/contactMessageBox/ContactMessageBox';
import ContactForm from '../components/contactForm/ContactForm';
import SlickCarousel from '../components/slickCarousel/SlickCarousel';
//images
import Launch from '../images/launch.png';
import BiggerPicture from '../images/bigger-picture.png';
import Client from '../images/client.png';
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';
import WebLogos from '../images/WebLogos.png';
import MarketingLogos from '../images/MarketingLogos.png';
import DesignLogos from '../images/DesignLogos.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <StickyBar />
    <section className="section section01">
      <h2 className="title03">Web Presence</h2>
      <ImgContent01
        title="Why So Technical?"
        img={Client}
        desc="You are passionate about your business. We support you in communicating this passion online, so you focus on your business and we on the technical aspects..."
        classAdd=""
        animation=""
      />
      <ImgContent01
        title="Your Goal – Our Focus"
        img={BiggerPicture}
        desc="...we worked many years in sales which makes us see the web differently. This allows us to focus on your goal, instead of loosing ourselves in technical details..."
        classAdd="img-content-img-wrapreverse"
        animation=""
      />
      <ImgContent01
        title="Launch Together"
        img={Launch}
        desc="...let's launch your new idea in a way that your clients will love. Working with us makes this process fun and productive."
        classAdd=""
        animation=""
      />
    </section>
    <section className="section section02">
      <h2 className="title03">Services</h2>
      <div className="cards01">
        <ServicesCards
          icon={Web}
          title="Web Development"
          listItems={[
            'Websites',
            'Web-Apps',
            'React (Next.js)',
            'Wordpress',
            'Wix (Advanced)',
          ]}
          buttonText="See Projects"
          buttonPath="/our-work/#web"
          logos={WebLogos}
        />
        <ServicesCards
          icon={Design}
          title={'Design & Branding'}
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
        <ServicesCards
          icon={Marketing}
          title="Content Management"
          listItems={[
            'Youtube',
            'Facebook',
            'Blog',
            'SEO',
            'Marketing Strategy',
          ]}
          buttonText="See Projects"
          buttonPath="/our-work/#marketing"
          logos={MarketingLogos}
        />
      </div>
    </section>
    <section className="section section03">
      <h2 className="title03">Testimonials</h2>
      <div className="slick-wrapper">
        <SlickCarousel data={testimonials} />
      </div>
    </section>
    <section className="section section04">
      <h2 className="title03 title03-light">Contact Us</h2>
      <div className="contact-section-wrapper">
        <ContactMessageBox
          stylesAddText="about-box__text-light"
          stylesAddTitle="about-box__title-light"
        />
        <ContactForm formName="home_page2" />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

// test forms

// gatsby browser clean
// prop types
// find replace null in source code?
// testimonial with project button

//preload img https://stackoverflow.com/questions/857618/javascript-how-to-extract-filename-from-a-file-input-control
// https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
// https://www.reddit.com/r/reactjs/comments/4o6hev/how_does_image_preloading_in_react_work/
/*    
imagesArray.forEach(picture => {
  let img = new Image();
  img = picture;
});  
*/
