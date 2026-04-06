// src/components/ProjectList.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const projects = [
    { id: 1, title: "HTML Basic", desc: "나를 소개하는 첫 정적 페이지" },
    { id: 2, title: "JS Interaction", desc: "자바스크립트 이벤트 핸들링" },
    { id: 3, title: "React SPA", desc: "컴포넌트 기반의 웹 기획 및 구현" }
  ];

  return (
    <section className="projects">
      <h2>My Learning Journey</h2>
      <div className="grid">
        {projects.map(p => (
          <ProjectCard key={p.id} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
