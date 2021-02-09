import React, { Component } from "react";
import st from "./header.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaCaretDown,
  FaSearch,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <div className={`${st.site_header}`}>
          <Container className={`${st.site_container}`}>
            <Row className={`${st.header_top}`}>
              <Col>
                <a className={`${st.tel_link}`} href="tel:+998917911122">
                  <FaPhoneAlt className={`${st.phone_icon}`} />
                  <span>+99891 791 11 22</span>
                </a>
                <a className={`${st.mail_link}`} href="mailto:info@elab.uz">
                  <FaEnvelope className={`${st.mail_icon}`} />
                  <span>info@elab.uz</span>
                </a>
              </Col>
            </Row>
            <Row className={`${st.header_middle}`}>
              <Col xs="auto">
                <a className={`${st.site_logo}`} href="#">
                  Karvon
                </a>
              </Col>
              <Col xs="auto">
                <button className={`${st.categories_btn}`}>
                  <FaBars className={`${st.bars_icon}`} />
                  <span>Kategoriyalar</span>
                </button>
              </Col>
              <Col xs="6">
                <div className={`${st.search_area}`}>
                  <input
                    className={`${st.searching_input}`}
                    type="text"
                    placeholder="Izlash"
                  />
                  <button className={`${st.searching_btn}`}>
                    <FaSearch />
                  </button>
                </div>
              </Col>
              <Col xs="auto">
                <div className={`${st.user_tools}`}>
                  <button className={`${st.log_in}`}>Log in</button>
                  <button className={`${st.sign_up}`}>
                    <FaRegUser className={`${st.user_icon}`} />
                    Sign up
                  </button>
                </div>
              </Col>
              <Col xs="auto">
                <button className={`${st.change_lang__btn}`}>
                  <span>Uz</span>
                  <FaCaretDown />
                </button>
              </Col>
            </Row>
            <div className={`${st.header_bottom}`}>
              <ul className={`${st.site_nav__list}`}>
                <li className={`${st.site_nav__item}`}>
                  <Link
                    className={`${st.site_nav__link} ${st.active_nav}`}
                    to="/"
                  >
                    Bosh sahifa
                  </Link>
                </li>
                <li className={`${st.site_nav__item}`}>
                  <Link className={`${st.site_nav__link}`} to="/online-bozor">
                    Onlayn bozor
                  </Link>
                </li>
                <li className={`${st.site_nav__item}`}>
                  <Link className={`${st.site_nav__link}`} to="/products">
                    Mahsulotlar
                  </Link>
                </li>
                <li className={`${st.site_nav__item}`}>
                  <Link className={`${st.site_nav__link}`} to="#">
                    Blog
                  </Link>
                </li>
                <li className={`${st.site_nav__item}`}>
                  <Link className={`${st.site_nav__link}`} to="#">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
