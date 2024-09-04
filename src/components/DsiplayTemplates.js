import React from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, templates } = location.state;

  return (
    <div className="display-templates">
      <Header />

      <h1>
        {category} - {series}
      </h1>
      <div className="template-cards">
        {templates.map((template, index) => (
          <div key={index} className="template-card">
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h2>{template.title}</h2>
            <a href={template.link} target="_blank" rel="noopener noreferrer">
              {template.text}
            </a>
            <a href={template.link2} target="_blank" rel="noopener noreferrer">
              {template.text2}
            </a>
            <a href={template.link3} target="_blank" rel="noopener noreferrer">
              {template.text3}
            </a>
            <a href={template.link4} target="_blank" rel="noopener noreferrer">
              {template.text4}
            </a>
            <a href={template.link5} target="_blank" rel="noopener noreferrer">
              {template.text5}
            </a>
            <a href={template.link6} target="_blank" rel="noopener noreferrer">
              {template.text6}
            </a>{" "}
            <a href={template.link7} target="_blank" rel="noopener noreferrer">
              {template.text7}
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DisplayTemplates;
