import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import '../../style/sections/_skills.scss';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { frontEnd1, frontEnd2 } = skills;

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
                {frontEnd1 &&
                  frontEnd1.map(image => {
                    return (
                      <div className="skill-frame" key={image}>
                        <img src={image} alt="HTML" className="skill-logo" />
                      </div>
                    );
                  })}
              </div>
              <div className="skill-logos">
                {frontEnd2 &&
                  frontEnd2.map(image => {
                    return (
                      <div className="skill-frame" key={image}>
                        <img src={image} alt="HTML" className="skill-logo" />
                      </div>
                    );
                  })}
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
