// local import
import ProjectItemps from './ProjectItems';
import projectData from '../../utils/projectData';


const Projects = () => {
  return (
    <div id='project' className=" max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] pb-6 text-center">Mes Projets</h1>
      <p className="text-center text-lg py-6">Découvrez mes derniers projets</p>
      <div className="grid  md:grid-cols-2 gap-20 ">
        {projectData.map((project, index) => (
          <ProjectItemps
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.img}
            lien={project.lien}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;