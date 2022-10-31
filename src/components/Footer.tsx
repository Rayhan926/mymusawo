import { quickLinks, socials } from "@config/constants";
import Image from "next/image";
import React from "react";
import Input from "./Input";
import TextArea from "./Textarea";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-[150px]">
      {/** Footer Top --Start-- */}
      <div
        style={{
          backgroundImage: "url('/img/footer-bg.png')",
          // clipPath: " circle(75.7% at 48% 100%)",
        }}
        className="py-[90px] xl:py-[124px] bg-no-repeat bg-cover bg-top"
      >
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap gap-[70px] xl:gap-[100px] text-white">
            <div>
              <h4 className="text-lg xl:text-xl font-semibold">Quick Links</h4>
              <ul className="my-5 xl:my-[30px]">
                {quickLinks.map(({ text, url }, i) => (
                  <li key={i}>
                    <Link href={url}>
                      <a className="text-[15px] xl:text-[16px] py-0.5 hover:underline inline-block">
                        {text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-[30px]">
                <div className="max-w-[145px]">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mymusawo"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      src={"/img/Google-Play.svg"}
                      width={170}
                      height={58}
                      alt="Google-Play"
                    />
                  </a>
                </div>
                <div className="max-w-[145px]">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mymusawo"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      src={"/img/App-Store.svg"}
                      width={170}
                      height={58}
                      alt="App-Store"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[15px] xl:text-[16px]">
              <h4 className="text-lg xl:text-xl font-semibold mb-5 xl:mb-[30px]">
                Contact us
              </h4>

              <div className="space-y-0.5">
                {" "}
                <p>Phone : +256 (0) 706 193 685</p>
                <p>Location: 14A Naguru drive, Kampala, Uganda</p>
                <p>Email: support@mymusawo.com</p>
              </div>

              <ul className="flex flex-wrap gap-5 md:gap-7 mt-7">
                {socials.map(({ icon, url }, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center bg-white text-[#0EB6D3] border border-white hover:bg-transparent hover:text-white"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-[525px] ml-auto">
              <h4 className="text-lg xl:text-xl font-semibold mb-5 xl:mb-[30px]">
                Get in Touch
              </h4>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values, actions) => {
                  axios
                    .post("/api/contact", values)
                    .then(() => {
                      toast.success("Message sent successfully");
                      actions.resetForm();
                    })
                    .catch(() => {
                      toast.error("Failed to sent message");
                    })
                    .finally(() => {
                      actions.setSubmitting(false);
                    });
                }}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        name="name"
                        type="text"
                        className="__input"
                        placeholder="Name"
                      />
                      <Input
                        name="email"
                        type="email"
                        className="__input"
                        placeholder="Email"
                      />
                    </div>
                    <TextArea
                      name="message"
                      className="__input"
                      placeholder="Message"
                      rows={4}
                    />
                    <div className="flex sm:justify-end">
                      <button
                        type="submit"
                        className="__input w-auto px-9 bg-white"
                      >
                        <span className="gradient_text">
                          {isSubmitting ? "Please wait.." : "Submit"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/** Footer Top --End-- */}

      {/** Footer Bottom --Start-- */}
      <div className="text-center py-5 gap-3 container  text-sm xl:text-base flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <p className="opacity-60">© My Musawo 2021. All Rights Reserved.</p>

        <div className="flex gap-5 opacity-60">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            User Agreement
          </a>
        </div>
      </div>
      {/** Footer Bottom --End-- */}
    </footer>
  );
};

export default Footer;
