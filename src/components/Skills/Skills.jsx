import React from 'react';
import { Container } from 'react-bootstrap';

import '../../style/components/_skills.scss';

const Skills = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <section id="skills" className="jumbotron">
      <Container>
        <div className="item">
          <div className="container skills-category">
            <div className="row skill-title">
              <h3>Front-end</h3>
            </div>
            <div className="row skill-logos">
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
            </div>
            <div className="row skill-logos">
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
              <div className="skill-frame">react</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
