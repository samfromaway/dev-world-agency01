import React from 'react';
import Layout from '../components/layout';
//components
import SEO from '../components/seo';
import Card03 from '../components/card03/Card03';
import InfoCard04 from '../components/card04/Card04';
//data
import {
  webProjects,
  designProjects,
  marketingProjects,
} from '../data/projects';
//images
import Marketing from '../images/bullhorn-solid.svg';
import Web from '../images/desktop-solid.svg';
import Design from '../images/feather-alt-solid.svg';

//https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react

const OurWork = () => {
  return (
    <Layout>
      <SEO title="Our Work" />
      <section className="section section02">
        <h2 className="title03">Services</h2>
        <h4 class="title04 pulse01">Choose A Category</h4>

        <div className="cards01">
          <InfoCard04
            icon={Web}
            title="Web Development"
            desc="We help you create a stunning website that generates leads and helps existing customers navigate your offer."
            buttonText="See Examples"
            buttonPath="/our-work/#web"
          />
          <InfoCard04
            icon={Design}
            title={'Graphic Design'}
            desc="Photo Editing"
            buttonText="See Projects"
            buttonPath="/our-work/#design"
          />
          <InfoCard04
            icon={Marketing}
            title="Online Marketing"
            desc="SEO Strategy"
            buttonText="See Projects"
            buttonPath="/our-work/#marketing"
          />
        </div>
      </section>
      <section className="section project-section" id="web">
        <h2 className="title03">Top 3 Projects</h2>

        <div className="cards01">
          {webProjects.map(project => (
            <Card03
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              icons={project.icon}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <section className="section project-section" id="design">
        <h2 className="title03">Top 3 Projects</h2>

        <div className="cards01">
          {designProjects.map(project => (
            <Card03
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              icons={project.icon}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <section className="section project-section" id="marketing">
        <h2 className="title03">Top 3 Projects</h2>
        <div className="cards01">
          {marketingProjects.map(project => (
            <Card03
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              icons={project.icon}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
