import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/pageHeader/PageHeader';
import Card02 from '../components/card02/Card02';
import Card02Big from '../components/card02Big/Card02Big';
import ImgContent01 from '../components/imgContent01/ImgContent01';
import ContactUsStrip from '../components/contactUsStrip/ContactUsStrip';

import Globe from '../images/globe.png';

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
    <section className="section">
      <h2 className="title03">Location</h2>
      <ImgContent01
        title="International"
        img={Globe}
        desc="We (Tacha and Sam) are from Switzerland and moved to Colombia in 2017. We have a network of people working from all over the world. Dev-World is a joint venture between a Swiss and Colombian company. "
        classAdd=""
        animation=""
      />
    </section>
    <section className="contact-us-strip-wrapper">
      <ContactUsStrip />
    </section>
  </Layout>
);

export default About;
