// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Hero />
        <ProjectList />
      </main>
    </div>
  );
}

export default App;
