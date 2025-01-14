import { Projects } from "../utils/projects";
import FullProjectCard from "../Components/fullProjectCard";
import "../styles/projects-page.css";
import React, { memo } from "react";

const ProjectsPage = memo(() => {
  return (
    <section className="projects-page">
      <header>
        <div className="header-text">
          <h1>Projects</h1>
          <p>A Plethora of Projects are being developed at Sandbox!</p>
        </div>
      </header>
      <div className="projects">
        {Projects.map((element, i) => {
          return (
            <FullProjectCard
              key={i}
              img={element.image}
              links={element.links}
              title={element.title}
              desc={element.description}
              points={element.summary.points}
              brief={element.summary.brief}
            />
          );
        })}
      </div>
    </section>
  );
});

export default ProjectsPage;
