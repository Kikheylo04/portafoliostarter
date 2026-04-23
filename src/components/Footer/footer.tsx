import { UilInstagram as Insta, UilFacebook as Facebook, UilGithub as Github } from "../icons";
import "../../styles/components/Footer/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kikheylo@gmail.com" target="_blank" rel="noopener noreferrer">kikheylo@gmail.com</a>
        <div className="footer__content__icons">
          <a href="https://www.instagram.com/sebas._.white/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Insta color="white" size="3rem" aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/kikheylosebastian.chavezsilva/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook color="white" size="3rem" aria-hidden="true" />
          </a>
          <a href="https://github.com/Kikheylo04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github color="white" size="3rem" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
