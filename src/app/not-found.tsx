import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada — Kikheylo Sebastian",
};

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__content__code">404</h1>
        <p className="notfound__content__title">Página no encontrada</p>
        <p className="notfound__content__desc">
          La página que buscas no existe o fue movida.
        </p>
        <Link href="/" className="button">
          Volver al inicio
        </Link>
      </div>
      <style>{`
        body { background: #0b0b0b; margin: 0; }
        .notfound {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0b0b0b;
          font-family: Arial, sans-serif;
        }
        .notfound__content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .notfound__content__code {
          font-size: clamp(6rem, 20vw, 10rem);
          font-weight: 900;
          margin: 0;
          background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .notfound__content__title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .notfound__content__desc {
          color: #788097;
          font-size: 1rem;
          margin: 0;
        }
        .button {
          border-radius: 34px;
          border: none;
          color: white;
          font-size: 16px;
          padding: 11px 26px;
          background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
          box-shadow: 0px 2px 4px 3px rgba(251,161,40,0.42);
          cursor: pointer;
          text-decoration: none;
          margin-top: 8px;
          display: inline-block;
          transition: transform 0.2s;
        }
        .button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
