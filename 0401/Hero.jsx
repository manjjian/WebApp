// src/components/Hero.jsx
import React from 'react';
import SkillTag from './SkillTag';

const Hero = () => (
  <div className="hero">
    <h1>Park Min-jin</h1>
    <p>Software Engineering @ Kyungsung University</p>
    <div className="skills">
      <SkillTag name="C++" />
      <SkillTag name="Node.js" />
      <SkillTag name="React" />
    </div>
  </div>
);

export default Hero;
