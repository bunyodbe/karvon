import React, { Component } from "react";
import st from "./discount.module.css";
import { FaEye, FaComment } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";

class Discount extends Component {
  render() {
    return (
      <>
        <div className={`${st.discounts}`}>
          <Container className={`${st.site_container}`}>
            <h2 className={`${st.section_title}`}>Chegirmalar</h2>
            <Row className={`${st.discounts_cards__wrapper}`}>
              <Col>
                <div className={`${st.discount_card}`}>
                  <div className={`${st.discount_card__img}`}>
                    {/* rasm uchun joy*/}
                  </div>
                  <a className={`${st.discount_card__link}`} href="#">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, delectus!
                  </a>
                  <div className={`${st.discount_card__content}`}>
                    <span>Admin</span>
                    <span>
                      <FaEye className={`${st.eye_icon}`} />
                      <span>100</span>
                      <FaComment className={`${st.comment_icon}`} />
                      <span>70</span>
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={`${st.discount_card}`}>
                  <div className={`${st.discount_card__img}`}>
                    {/* rasm uchun joy*/}
                  </div>
                  <a className={`${st.discount_card__link}`} href="#">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, delectus!
                  </a>
                  <div className={`${st.discount_card__content}`}>
                    <span>Admin</span>
                    <span>
                      <FaEye className={`${st.eye_icon}`} />
                      <span>100</span>
                      <FaComment className={`${st.comment_icon}`} />
                      <span>70</span>
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={`${st.discount_card}`}>
                  <div className={`${st.discount_card__img}`}>
                    {/* rasm uchun joy*/}
                  </div>
                  <a className={`${st.discount_card__link}`} href="#">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, delectus!
                  </a>
                  <div className={`${st.discount_card__content}`}>
                    <span>Admin</span>
                    <span>
                      <FaEye className={`${st.eye_icon}`} />
                      <span>100</span>
                      <FaComment className={`${st.comment_icon}`} />
                      <span>70</span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Discount;
