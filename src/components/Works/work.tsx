import { useContext } from "react";
import { themeContext } from "../../app/Context";
import { motion } from "framer-motion";
import "../../styles/components/Work/work.scss";

export default function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
      <div className="work__awesone">
        <p style={{ color: darkMode ? "white" : "" }}>
          Trabaja para todas estas
        </p>
        <p>Marcas y Clientes</p>
        <p>
          Desde grandes corporaciones hasta negocios locales, mi trabajo se
          adapta a las necesidades de cada cliente, garantizando creatividad,
          innovación y resultados efectivos.
        </p>
        <a
          href="/contact"
          target="_blank"
          className="button work__awesone__button"
        >
          Contrátame
        </a>
      </div>
      <div className="work__brand">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="work__brand__main"
        >
          <div className="work__brand__main__second">
            <picture>
              <img src="/assets/images/upwork.png" alt="upwork" />
            </picture>
          </div>
          <div className="work__brand__main__second">
            <picture>
              <img src="/assets/images/fiverr.png" alt="fiverr" />
            </picture>
          </div>
          <div className="work__brand__main__second">
            <picture>
              <img src="/assets/images/amazon.png" alt="amazon" />
            </picture>
          </div>
          <div className="work__brand__main__second">
            <picture>
              <img src="/assets/images/shopify.png" alt="shopify" />
            </picture>
          </div>
          <div className="work__brand__main__second">
            <picture>
              <img src="/assets/images/facebook.png" alt="facebook" />
            </picture>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
