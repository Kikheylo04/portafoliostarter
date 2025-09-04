import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "../../styles/components/Footer/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kikheylo@gmail.com" target="_blank">kikheylo@gmail.com</a>
        <div className="footer__content__icons">
          <a href="https://www.instagram.com/sebas._.white/" target="_blank">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/kikheylosebastian.chavezsilva/" target="_blank">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/Kikheylo04" target="_blank">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
