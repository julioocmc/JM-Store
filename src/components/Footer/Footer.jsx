import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon';
import logo from './../../assets/img/Logo1.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer
        className="footer container-fluid mt-5"
        style={{ backgroundColor: '#f5deb3' }}
      >
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center mt-2">
            <Link to="/">
              <img src={logo} alt="Logo" className="footer__logo" />
            </Link>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 text-center text-white">
            <h3 className="footer__texto">
              <b>Puedes seguirnos en:</b>
            </h3>
            <div className="redes__sociales">
              <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                {' '}
                <InstagramIcon />{' '}
              </a>
              <a
                href="https://www.linkedin.com/in/julio-mijares-59672a254/"
                target="_blank"
              >
                {' '}
                <LinkedinIcon />{' '}
              </a>
              <a href="https://github.com/julioocmc" target="_blank">
                {' '}
                <GithubIcon />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-final row text-center">
          <h4 className="text-white">© All Rights Reserved by Julio Mijares</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
