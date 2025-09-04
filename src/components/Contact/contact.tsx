import "../../styles/components/Contact/contact.scss";

export default function ContactComponente() {
  return (
    <div className="contact">
      <form action="" className="contact__form">
        <div className="contact__form__user">
          <label htmlFor="">Nombre</label>
          <input type="nombre" placeholder="Escribir nombre" required />
        </div>
        <div className="contact__form__user">
          <label htmlFor="">Correo electrónico</label>
          <input type="email" placeholder="Escribrir correo" required />
        </div>
        <div className="contact__form__user">
          <label htmlFor="">Asunto</label>
          <input type="text" placeholder="Escribir asunto" required />
        </div>
        <div className="contact__form__user">
          <label htmlFor="">Mensaje</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Escribir mensaje"
          ></textarea>
        </div>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
  );
}
