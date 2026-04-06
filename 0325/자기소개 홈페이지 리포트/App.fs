import React from 'react';
import './Profile.css';

const ProfilePage = () => {
  const techStack = ["C++", "Java", "Node.js", "React", "Assembly"];

  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Park Min-jin</h1>
        <p>Software Major @ Kyungsung Univ.</p>
        <div className="tags">
          <span>#Busan</span>
          <span>#Developer</span>
          <span>#CatLover</span>
        </div>
      </header>

      {/* Projects Section - 이미지 리포트 내용 반영 */}
      <section className="projects">
        <h2>Learning Roadmap</h2>
        <div className="project-grid">
          <div className="card">
            <h3>HTML/CSS</h3>
            <p>기본적인 웹 구조 설계 및 자기소개 페이지 구축</p>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
            <p>DOM 조작을 통한 동적 이벤트 웹 구현</p>
          </div>
          <div className="card">
            <h3>React (JSX)</h3>
            <p>컴포넌트 기반의 효율적인 SPA 개발</p>
          </div>
          <div className="card">
            <h3>Figma</h3>
            <p>사용자 경험(UX)을 고려한 서비스 프로토타이핑</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="skills">
        <h2>Tech Stack</h2>
        <div className="skill-list">
          {techStack.map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
