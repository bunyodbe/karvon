import React, { Component } from "react";
import st from "./footer.module.css";
import {
  FaMap,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className={`${st.site_footer}`}>
          <Container className={`${st.site_container}`}>
            <Row>
              <Col>
                <div className={`${st.support}`}>
                  <div>
                    <BiSupport className={`${st.support_icon}`} />
                  </div>
                  <div>
                    <div className={`${st.support_text}`}>
                      Savolingiz bormi? Bizga 24/7 <br /> qo'ng'iroq qilishingiz
                      mumkin!
                    </div>
                    <a className={`${st.support_tel}`} href="tel:+998913713156">
                      +99891 371 31 56
                    </a>
                  </div>
                </div>
                <div className={`${st.footer_location}`}>
                  <ul className={`${st.location_list}`}>
                    <li className={`${st.location_item}`}>
                      <a className={`${st.location_link}`} href="#">
                        <FaMap />
                        <span>Toshkent shahri, Amir Temur ko'chasi 108-uy</span>
                      </a>
                    </li>
                    <li className={`${st.location_item}`}>
                      <a
                        className={`${st.location_link}`}
                        href="mailto:info@elab.uz"
                      >
                        <FaEnvelope />
                        <span>www.info@elezona.uz</span>
                      </a>
                    </li>
                    <li className={`${st.location_item}`}>
                      <a
                        className={`${st.location_link}`}
                        href="tel:+998712583696"
                      >
                        <FaPhoneAlt />
                        <span>+998 71 258 36 96</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${st.social_media}`}>
                  <div className={`${st.social_media__title}`}>
                    Bizni kuzating
                  </div>
                  <ul className={`${st.social_media__list}`}>
                    <li className={`${st.social_media__item}`}>
                      <a className={`${st.social_media__link}`} href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className={`${st.social_media__item}`}>
                      <a className={`${st.social_media__link}`} href="#">
                        <FaTelegram />
                      </a>
                    </li>
                    <li className={`${st.social_media__item}`}>
                      <a className={`${st.social_media__link}`} href="#">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li className={`${st.social_media__item}`}>
                      <a className={`${st.social_media__link}`} href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className={`${st.footer_part__title}`}>Kompaniya</div>
                <ul className={`${st.footer_part__list}`}>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Kompaniya haqida
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Litsenziyalar va sertifikatlar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Bizning hamkorlarimiz
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Aloqa
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <div className={`${st.footer_part__title}`}>Ma'lumot</div>
                <ul className={`${st.footer_part__list}`}>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Aktsiyalar va maxsus takliflar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Maqolalar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Yangiliklar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Xizmatlar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      To'lov va etkazib berish
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <div className={`${st.footer_part__title}`}>Ma'lumot</div>
                <ul className={`${st.footer_part__list}`}>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Shaxsiy ma'lumot
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Buyurtmalar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Kredit varaqalari
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Xizmatlar
                    </a>
                  </li>
                  <li className={`${st.footer_part__item}`}>
                    <a className={`${st.footer_part__link}`} href="#">
                      Mening istaklarim ro'yxati
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
