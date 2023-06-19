import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.PNG";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Photo gallery application"
              description="This is a photo gallery application built using web development technologies. It allows users to scroll through a collection of images and view additional information related to each photo by clicking on them. The application utilizes a modal view, which is a pop-up window that appears in the center of the screen."
              ghLink="https://github.com/ashiquebiniqbal/gallery-app/tree/master"
              demoLink="https://ananda89-photo-gallery-app.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Multi counter app"
              description="Counter App, built with React.js, offers a user-friendly interface for counting and tracking values. With features like Increase, Decrease, Reset, Maximum, and Minimum, users can easily perform counting operations and monitor their progress. This simple yet powerful app can find applications in various scenarios where counting and tracking values are essential."
              ghLink="https://github.com/ashiquebiniqbal/multi-counter-app/tree/master"
              demoLink="https://ananda89-counterapp.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Asset Management App"
              description="Asset Management Application is a robust full-stack asset management application built using Django, It is designed to help businesses efficiently track and manage their corporate assets. By providing a centralized platform for asset monitoring, customizable categories, user access control, and reporting features, it enhances operational efficiency, accountability, and informed decision-making. With MyApp, businesses can streamline asset management processes, mitigate risks, and optimize asset utilization."
              ghLink="https://github.com/ashiquebiniqbal/asset-management"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Global Climate Change Data Forecasting"
              description="The objective of this project is to develop a forecasting model that can predict future global climate change patterns based on historical data. By employing a random forest ensemble approach, we can develop a powerful forecasting model for global climate change. This project not only demonstrates the application of ensemble learning in Python but also addresses the pressing issue of climate change by providing insights into its future trends. The analysis and forecasts generated through this project can contribute to better understanding and management of global climate change phenomena."
              ghLink="https://github.com/ashiquebiniqbal/Global-Climate-Change-Data-forecast"
              demoLink="https://github.com/ashiquebiniqbal/Global-Climate-Change-Data-forecast/blob/main/Global_Average_Temperature.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Forecasting Opening and Closing Stock Prices"
              description="By utilizing Facebook Prophet, we can accurately forecast opening and closing stock prices. This project demonstrates the power of time series analysis and forecasting using a popular library like Prophet. The ability to predict future stock prices can assist investors, traders, and financial analysts in making informed decisions. With the insights gained from this forecasting model, stakeholders can better navigate the dynamic nature of the stock market and optimize their investment strategies."
              ghLink="https://github.com/ashiquebiniqbal/Forecast-Opening-closing-Stock-price"
              demoLink="https://github.com/ashiquebiniqbal/Forecast-Opening-closing-Stock-price/blob/main/forecast_the_opening_and_closing_prices_of_S%26P500.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ai-powered People Counter Application: Smart Video IoT Solution"
              description="The People Counter Application demonstrates the creation of a smart video IoT solution using Intel® hardware and software tools. By utilizing the Inference Engine from the Intel® Distribution of OpenVINO™ Toolkit, it accurately detects and counts people in video frames, providing valuable insights. With features like real-time counting, duration calculation, and data transmission to a local web server, this application showcases the potential of intelligent video analytics in various domains such as crowd management, retail analytics, and security monitoring."
              ghLink="https://github.com/ashiquebiniqbal/People-counter-app"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
