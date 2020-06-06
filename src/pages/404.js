import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ButtonInt from '../components/button01/ButtonInt';
import Error404 from '../images/404.png';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="section">
      <img src={Error404} alt="Error404" style={{ width: '280px' }} />
      <h2>404 NOT FOUND</h2>
      <p>We Have No Idea How You Landed Here</p>
      <ButtonInt text="Back To Home" path="/" addClasses="" />
    </div>
  </Layout>
);

export default NotFoundPage;
