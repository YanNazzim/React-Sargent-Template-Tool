import React from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ExitDevices } from '../data/ExitDeviceData';

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, id } = location.state;

  // Get the list of templates based on series
  const templates = ExitDevices[series] || [];

  // Filter templates to match the selected device id
  const filteredTemplates = templates.filter(template => template.device === id);

  return (
    <div className="display-templates">
      <Header />
      <h1>{category} - {series} - {id}</h1>
      <div className="template-cards">
        {filteredTemplates.map((template, index) => (
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
            {template.link1 && <a href={template.link1} target="_blank" rel="noopener noreferrer">{template.text1}</a>}
            {template.link2 && <a href={template.link2} target="_blank" rel="noopener noreferrer">{template.text2}</a>}
            {template.link3 && <a href={template.link3} target="_blank" rel="noopener noreferrer">{template.text3}</a>}
            {template.link4 && <a href={template.link4} target="_blank" rel="noopener noreferrer">{template.text4}</a>}
            {template.link5 && <a href={template.link5} target="_blank" rel="noopener noreferrer">{template.text5}</a>}
            {template.link6 && <a href={template.link6} target="_blank" rel="noopener noreferrer">{template.text6}</a>}
            {template.link7 && <a href={template.link7} target="_blank" rel="noopener noreferrer">{template.text7}</a>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DisplayTemplates;
