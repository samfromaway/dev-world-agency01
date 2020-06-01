import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//components
import SEO from "../components/seo"
import Hero from "../components/hero01/Hero01"
import ImgContent01 from "../components/ImgContent01"
import Cards02 from "../components/Cards02"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"

//images
import Bulb from "../images/idea.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero /> <SocialMedia />
    <section>
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd=""
        //animation="appearanim01"
      />
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd="wrapreverse01"
        //animation="appearanim01"
      />
      <ImgContent01
        title="Your Idea"
        img={Bulb}
        desc="You are passionate about your new business idea. We support you with communicating your new idea, so your business grows faster."
        classAdd=""
        //animation="appearanim01 reverse02 "
      />
    </section>
    <Cards02
      title="hi"
      img="https://image.cnbcfm.com/api/v1/image/105595209-1543339207911gettyimages-1069148086.jpeg?v=1543339234"
      subTitle="fffffff"
      desc="Sam and Tacha are great"
    />
    <ContactForm />
  </Layout>
)

export default IndexPage
