import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ButtonInt from '../components/button01/ButtonInt';
import Email from '../images/email.png';

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <div className="section">
      <img src={Email} alt="Thanks" style={{ width: '250px' }} />
      <h2>Thanks We Received Your Email</h2>
      <h3>We Will Reply ASAP</h3>
      <ButtonInt text="Back To Home" path="/" addClasses="" />
    </div>
  </Layout>
);

export default Thanks;
