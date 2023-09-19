import DigiContact from "@components/contact-us/DigiContact";
import HeroFourteen from "@components/hero-section/HeroFourteen";
import DigiSerives from "@components/services/DigiServies";
import DigiWhyChoose from "@components/workprocess/DigiWhyChoose";
import PromoTwo from "@components/promo/PromoTwo";
import Footer from "@layout/Footer/Footer";
import Layout from "@layout/Layout";
import React from "react";

const DigitalMarketing = () => {
  return (
    <Layout>
      <PromoTwo />
      {/* <Navbar /> */}
      <HeroFourteen />
      <DigiWhyChoose />
      <DigiSerives />
      <DigiContact />
      <Footer footerGradient />
    </Layout>
  );
};

export default DigitalMarketing;
