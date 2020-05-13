import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

import '../../style/sections/_skills.scss';

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills" className="jumbotron-san">
      <Container>
        <Title title="My Skills" />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col>
                  <h3>Front-end</h3>
                </Col>
              </Row>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <h3>Back-end</h3>
                </Col>
              </Row>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <h3>Other</h3>
                </Col>
              </Row>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
              <div className="skill-logos">
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
                <div className="skill-frame">HTML</div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
