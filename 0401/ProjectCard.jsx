// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, desc }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;
