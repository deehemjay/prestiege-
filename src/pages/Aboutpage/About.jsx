import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import banner from "../../images/heropics.png";
import SectionOne from "../../components/SectionOne";
import img from "../../images/years.png";
import { FaCheckSquare } from "react-icons/fa";
import AboutSecTwo from "./AboutSecTwo";
import AboutSecFour from "./AboutSecFour";
import Footer from "../../components/Footer";
import LastSec from "./LastSec";
import AboutSecFive from "./AboutSecFive";

const About = () => {
  return (
    <>
      <Header />
      <Banner text="About Us" img={banner} />
      <SectionOne
        image={img}
        text1="ABOUT US"
        text2="Passionate  About Cleaning Since Day One...."
        text3="At [Prestige Hygiene], we believe a clean space is a happy space. With a team of trained, trustworthy professionals, we provide reliable and detailed cleaning services for homes and businesses. Whether it’s a one-time deep clean or regular upkeep, we’re committed to making your environment spotless, fresh, and stress-free."
        text4="Prestige hygiene is a leading sanitation company that provides professional cleaning and janitorial services. We design, implement and execute functional solutions for local and international clients. Our professional services are currently directed at facilities and infrastructural assets across many sectors in Nigeria economy including commercial ,educational, and residential."
        text5="Loaded with professional and honest cleaners"
        text6="Provide the finest cleaning service"
        text7="100% satisfaction cleaning service"
        text8="We are bonded and insured"
        icon={FaCheckSquare}
      />
      <AboutSecTwo />
      <AboutSecFour />
      <AboutSecFive/>
      <LastSec/>
      <Footer/>
    </>
  );
};

export default About;
