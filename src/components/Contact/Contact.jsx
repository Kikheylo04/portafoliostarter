"use client";
import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { themeContext } from "../../app/Context";

export default function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const estadoInicial = {
    user_name: "",
    user_from: "",
    user_to: "",
    user_subject: "",
    message: "",
  };
  const [datosFormulario, setDatosFormulario] = useState(estadoInicial);
  const resetForm = () => {
    setDatosFormulario(estadoInicial);
  };
  function sendMail() {
    (function () {
      emailjs.init("zX2Yp5mj5AGwIRv3R");
    })();
    const params = {
      sendername: document.querySelector("#sendername").value,
      replyto: document.querySelector("#from").value,
      to: document.querySelector("#to").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    const btn = document.getElementById("button");
    btn.value = "Sending...";
    const serviceID = "service_m0m68q3";
    const templateID = "template_e0euksu";

    emailjs.send(serviceID, templateID, params).then(
      (res) => {
        btn.value = "Send";
        alert("Thanks for contactin me!");
        resetForm();
      },
      (err) => {
        btn.value = "Send";
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
        <form action={sendMail} method="POST">
          <input
            type="text"
            name="user_name"
            value={datosFormulario.user_name}
            onChange={(e) =>
              setDatosFormulario({
                ...datosFormulario,
                user_name: e.target.value,
              })
            }
            className="user"
            placeholder="Name"
            id="sendername"
          />
          <input
            type="email"
            name="user_from"
            value={datosFormulario.user_from}
            onChange={(e) =>
              setDatosFormulario({
                ...datosFormulario,
                user_from: e.target.value,
              })
            }
            className="user"
            placeholder="From email"
            id="from"
            required
          />
          <input
            type="email"
            name="user_to"
            value={datosFormulario.user_to}
            onChange={(e) =>
              setDatosFormulario({
                ...datosFormulario,
                user_to: e.target.value,
              })
            }
            className="user"
            placeholder="To email"
            id="to"
            required
          />
          <input
            type="text"
            name="user_subject"
            value={datosFormulario.user_subject}
            onChange={(e) =>
              setDatosFormulario({
                ...datosFormulario,
                user_subject: e.target.value,
              })
            }
            className="user"
            placeholder="Subject"
            id="subject"
          />
          <textarea
            name="message"
            value={datosFormulario.message}
            onChange={(e) =>
              setDatosFormulario({
                ...datosFormulario,
                message: e.target.value,
              })
            }
            className="user"
            placeholder="Message"
            id="message"
          />
          <input type="submit" value="Send" className="button" id="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
