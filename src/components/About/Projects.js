import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookShop from "../../Assets/Projects/BookShop.jpg";
import OnlineLearning from "../../Assets/Projects/OnlineLearning.jpg";

function Projects() {
  return (
    <Container fluid className="">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookShop}
              isGithub={true}
              title="Online Bookstore"
              description="This project provides an online book store buying experience and helps admins manage items and orders"
              ghLink="https://github.com/Tuan33/MyBookShop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnlineLearning}
              isGithub={false}
              title="Online Learing"
              description="A website provides online learning services integrating online courses "
              ghLink="https://gitlab.com/spw391-gr3/OnlineLearning"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
