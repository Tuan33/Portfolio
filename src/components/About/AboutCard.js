import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a person who likes to work with deadlines and learn new things.
            I adapt well to working in groups. Here are some general information
            about me:
          </p>
          <ul>
            <li className="about-activity">
              <strong className="purple">Name:</strong> Tran Huy Tuan
            </li>
            <li className="about-activity">
              <strong className="purple">Date of birth:</strong> March 30, 2003
            </li>
            <li className="about-activity">
              <strong className="purple">Email:</strong>{" "}
              tran.huytuan30@gmail.com
            </li>
            <li className="about-activity">
              <strong className="purple">School:</strong> FPT University
            </li>
            <li className="about-activity">
              <strong className="purple">Major:</strong> Software Engineering
            </li>
            <li className="about-activity">
              <strong className="purple">GPA:</strong> 2.9
            </li>
            <li className="about-activity">
              <strong className="purple">Phone:</strong> 0386493285
            </li>
            <li className="about-activity">
              <strong className="purple" style={{ paddingBottom: "10px" }}>
                Language:
              </strong>
              <ul style={{ paddingLeft: "91px" }}>
                <li>Vietnamese (Native)</li>
                <li>English (Upper-Intermediate)</li>
                <li>Japanese (Elementary)</li>
              </ul>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
