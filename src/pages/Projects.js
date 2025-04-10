import React from "react";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  const projectList = [
    {
      title: "Web Development",
      description: "A fully responsive and interactive web application.",
    },
    {
      title: "Artistic Design",
      description: "A showcase of creativity through modern design.",
    },
    {
      title: "Music",
      description: "Combining technology with art for unique creations.",
    },
    {
      title: "Tech + Creativity Fusion",
      description: "Combining technology with art for unique creations.",
    },
  ];

  projectList.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
     
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description projects-p">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
