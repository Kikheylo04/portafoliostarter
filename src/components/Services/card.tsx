import "../../styles/components/Service/card.scss";

export type card = {
  emoji: string;
  heading: string;
  detail: string;
};

export default function Card({ emoji, heading, detail }: card) {
  return (
    <div className="card">
      <picture className="card__emoji">
        <img src={emoji} alt="" />
      </picture>

      <h3 className="card__title">{heading}</h3>
      <p className="card__detail">{detail}</p>

      <a className="card__button" href="/contact">
        Más información
      </a>
    </div>
  );
}
