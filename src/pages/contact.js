import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutBox from '../components/aboutBox/AboutBox';
import ContactForm from '../components/contactForm/ContactForm';
import PageHeader from '../components/pageHeader/PageHeader';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title="CONTACT" />
    <section className="section">
      <div className="contact-section-wrapper">
        <AboutBox />
        <ContactForm formName="contact_page1" />
      </div>
    </section>
  </Layout>
);

export default Contact;
