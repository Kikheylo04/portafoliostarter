"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { userSchema } from "../../validations/userSchema";
import type { z } from "zod";
import "../../styles/components/Contact/contact.scss";

type FormData = z.infer<typeof userSchema>;

type SendStatus = "idle" | "sending" | "success" | "error";

export default function ContactComponente() {
  const [status, setStatus] = useState<SendStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: data.sendername,
          reply_to: data.email,
          subject: data.user_subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact">
      <form
        className="contact__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="contact__form__user">
          <label htmlFor="sendername">Nombre</label>
          <input
            id="sendername"
            type="text"
            placeholder="Escribe tu nombre"
            aria-invalid={!!errors.sendername}
            aria-describedby={errors.sendername ? "err-name" : undefined}
            {...register("sendername")}
          />
          {errors.sendername && (
            <span id="err-name" className="contact__form__error" role="alert">
              {errors.sendername.message}
            </span>
          )}
        </div>

        <div className="contact__form__user">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Escribe tu correo"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <span id="err-email" className="contact__form__error" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="contact__form__user">
          <label htmlFor="user_subject">Asunto</label>
          <input
            id="user_subject"
            type="text"
            placeholder="Escribe el asunto"
            aria-invalid={!!errors.user_subject}
            aria-describedby={errors.user_subject ? "err-subject" : undefined}
            {...register("user_subject")}
          />
          {errors.user_subject && (
            <span id="err-subject" className="contact__form__error" role="alert">
              {errors.user_subject.message}
            </span>
          )}
        </div>

        <div className="contact__form__user">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            cols={30}
            rows={10}
            placeholder="Escribe tu mensaje"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <span id="err-message" className="contact__form__error" role="alert">
              {errors.message.message}
            </span>
          )}
        </div>

        {status === "success" && (
          <p className="contact__form__feedback contact__form__feedback--success" role="status">
            ¡Mensaje enviado con éxito! Te responderé pronto.
          </p>
        )}
        {status === "error" && (
          <p className="contact__form__feedback contact__form__feedback--error" role="alert">
            Hubo un error al enviar. Intenta de nuevo o escríbeme directamente.
          </p>
        )}

        <button
          type="submit"
          className="button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>
      </form>
    </div>
  );
}
