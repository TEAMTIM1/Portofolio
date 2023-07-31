import React from 'react';
import ProjectItemps from './ProjectItems';
import projectData from '../../utils/projectData';
import backgroundImage from '/assets/bgimage.jpg';

const Projects = () => {

  return (
    <div id='project' className={`w-full h-auto p-6 m-auto md:pl-20 py-16 flex flex-col items-center  bg-slate-300/60 `}>
      <h1 className="text-4xl font-bold text-[#fe4d03] pb-6 text-center">Mes Projets</h1>
      <p className="text-center text-gray-800 font-semibold text-lg py-6">Découvrez mes derniers projets</p>
      <div className="grid md:grid-cols-3 lg:col-span-3 h-auto m-auto gap-4">
        {projectData.map((project, index) => (
          <ProjectItemps
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.img}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
