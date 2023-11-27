import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Bookstore"
              description="This project provides an online book store buying experience and helps admins manage items and orders"
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Learing"
              description="A website provides online learning services integrating online courses "
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
