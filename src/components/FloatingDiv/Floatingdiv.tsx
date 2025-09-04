import "../../styles/components/FloatingDiv/Floatingdiv.scss";

export default function Floatingdiv({ image, text }) {
  return (
    <div className="floatingdiv">
      <div className="floatingdiv__image">
        <picture>
          <img src={image} alt="" />
        </picture>
      </div>
      <p>{text}</p>
    </div>
  );
}
