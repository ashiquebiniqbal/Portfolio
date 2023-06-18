import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashique Bin Iqbal </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I am an  IT Professional, working in Newsmedia.
            <br />
            Additionally, I am currently working as a freelance software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never ever give UP!"{" "}
          </p>
          <footer className="blockquote-footer">Ashique</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
