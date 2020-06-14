import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactUsMessageBox from '../components/contactMessageBox/ContactMessageBox';
import ContactForm from '../components/contactForm/ContactForm';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgContent01 from '../components/imgContent01/ImgContent01';

import Globe from '../images/globe.png';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title="CONTACT" />
    <section className="section section09">
      <div className="contact-section-wrapper">
        <ContactUsMessageBox stylesAddText="" stylesAddTitle="" />
        <ContactForm formName="contact_page1" />
      </div>
    </section>
    <section className="section section-light-color slim-section ">
      <h2 className="title03">Location</h2>
      <ImgContent01
        title="International"
        img={Globe}
        desc="We (Tacha and Sam) are from Switzerland and moved to Colombia in 2017. We have a network of people working from all over the world. Dev-World is a joint venture between a Swiss and a Colombian company."
        classAdd=""
        animation=""
      />
    </section>
  </Layout>
);

export default Contact;
