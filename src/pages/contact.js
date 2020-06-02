import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutBox from '../components/aboutBox/AboutBox';
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="section section04">
      <h2 id="title06" className="title03">
        Contact Us
      </h2>
      <div className="contact-section">
        <AboutBox />
        <ContactForm formName="home_page1" />
      </div>
    </section>
  </Layout>
);

export default Contact;
