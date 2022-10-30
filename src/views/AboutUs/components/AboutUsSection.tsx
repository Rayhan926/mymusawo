import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-[url('/img/about-bg.png')] bg-no-repeat bg-bottom pt-[450px] lg:pt-[500px] -mt-[400px] pb-[70px]">
      <div className="container">
        <h2 className="__title text-center">About Us</h2>

        <p className="max-w-[1008px] text-lg mt-6 mx-auto text-center">
          My Musawo, which is Luganda for “My Doctor”, is a mobile app that
          gives Ugandans access to quality health care information, services and
          products. We believe that everyone’s health and wellbeing is a
          priority and the efficiency with which they have their health care
          needs met matters. We want to inspire Ugandans to take control of
          their lives by having direct access to expert health and wellness
          information, as well as a robust support system. Our team of health
          experts are licensed and verified by the Uganda Medical and Dental
          Practitioners Council. All responses to questions are highly moderated
          and fact checked by our peer review team of highly experienced.
        </p>
        <div className="flex mt-12 justify-center w-full">
          <button className="gradient_btn">
            <span>Join our mailing list</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
