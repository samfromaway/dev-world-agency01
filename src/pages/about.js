import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutHero from '../components/aboutHero/AboutHero';
import Card02 from '../components/card02/Card02';
import Card02Big from '../components/card02Big/Card02Big';

import ContactUsStrip from '../components/contactUsStrip/ContactUsStrip';

import team from '../data/team';
import Sam from '../images/Samuel.jpg';
import Tacha from '../images/tacha.jpg';

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutHero />
    <section className="section slim-section">
      <h2 className="title03">Founders</h2>
      <div className="cards01">
        <Card02Big
          title="Tacha"
          subTitle="Founder"
          img={Tacha}
          desc="im the founder and I am so clever because if found things"
          classAdd="card02-big"
        />
        <Card02Big
          title="Sam"
          subTitle="Founder"
          img={Sam}
          desc="im the founder and I am so clever because if found things"
          classAdd="card02-big"
        />
      </div>
    </section>
    <section className="section ">
      <h2 className="title03">Team</h2>

      <div className="cards01">
        {team.map(member => (
          <Card02
            title={member.title}
            subTitle={member.subTitle}
            desc={member.desc}
            img={member.img}
            key={member.id}
          />
        ))}
      </div>
    </section>
    <section className="contact-us-strip-wrapper">
      <ContactUsStrip />
    </section>
  </Layout>
);

export default About;
