"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../app/Context";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validations/userChema";
import "./Contact.css";
export default function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data) => {
    sendMail(data);
  };
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  function sendMail() {
    (function () {
      emailjs.init("zX2Yp5mj5AGwIRv3R");
    })();
    const params = {
      sendername: document.querySelector("#sendername").value,
      replyto: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    const serviceID = "service_m0m68q3";
    const templateID = "template_e0euksu";

    emailjs.send(serviceID, templateID, params).then(
      (res) => {
        alert("Thanks for contactin me!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contatc us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <input
            type="text"
            {...register("sendername")}
            name="sendername"
            className="user"
            placeholder="Name"
            id="sendername"
          />
          {errors.sendername?.message && (
            <p
              style={{
                color: "#e62617",
                fontSize: "12px",
                margin: "-15px auto -15px 0",
              }}
            >
              {" "}
              {errors.sendername?.message}
            </p>
          )}
          <input
            type="email"
            {...register("email")}
            name="email"
            className="user"
            placeholder="Email"
            id="email"
          />
          {errors.email?.message && (
            <p
              style={{
                color: "#e62617",
                fontSize: "12px",
                margin: "-15px auto -15px 0",
              }}
            >
              {errors.email?.message}
            </p>
          )}
          <input
            type="text"
            {...register("user_subject")}
            name="user_subject"
            className="user"
            placeholder="Subject"
            id="subject"
          />
          {errors.user_subject?.message && (
            <p
              style={{
                color: "#e62617",
                fontSize: "12px",
                margin: "-15px auto -15px 0",
              }}
            >
              {" "}
              {errors.user_subject?.message}
            </p>
          )}
          <textarea
            {...register("message")}
            name="message"
            className="user"
            placeholder="Message"
            id="message"
          />
          {errors.message?.message && (
            <p
              style={{
                color: "#e62617",
                fontSize: "12px",
                margin: "-15px auto 0 0",
              }}
            >
              {errors.message?.message}
            </p>
          )}
          {loading ? (
            <input
              type="submit"
              className="button"
              value="Sending..."
              id="button"
            />
          ) : (
            <input
              type="submit"
              value="Send"
              className="button"
              id="button"
              onClick={handleClick}
            />
          )}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
