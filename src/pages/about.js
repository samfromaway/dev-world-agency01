import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/pageHeader/PageHeader';
import Card02 from '../components/card02/Card02';
import Card02Big from '../components/card02Big/Card02Big';
import ContactUsStrip from '../components/contactUsStrip/ContactUsStrip';

import team from '../data/team';
import Sam from '../images/Samuel.jpg';
import Tacha from '../images/tacha.jpg';

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <PageHeader title="ABOUT US" />
    <section className="section section08">
      <h2 className="title03">Founders</h2>
      <div className="cards01">
        <Card02Big
          title="Natacha Suter"
          subTitle="Founder"
          img={Tacha}
          desc="Natacha loves to work with colors and forms to create beautiful and functional designs. She has a happy and outgoing personality and likes to work with honest and straight-forward people."
          classAdd="card02-big"
        />
        <Card02Big
          title="Sam Rollin"
          subTitle="Founder"
          img={Sam}
          desc="Sam takes care of everything regarding development. He loves to organize things which helps him create websites. Sam appriciates working with people that are passionate about what they do."
          classAdd="card02-big"
        />
      </div>
    </section>
    <section className="section section07">
      <h2 className="title03">Team</h2>

      <div className="cards01">
        {team.map(member => (
          <Card02
            title={member.title}
            subTitle={member.subTitle}
            desc={member.desc}
            img={member.img}
            key={member.id}
            classAdd=""
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
