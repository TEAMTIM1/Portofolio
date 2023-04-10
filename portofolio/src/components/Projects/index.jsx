// local import
import ProjectItemps from './ProjectItems';
import projectData from '../../utils/projectData';

const Projects = () => {
  return (
    <div id='project' className=" max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] pb-6 text-center">My Projects</h1>
      <p className="text-center py-6">Check out some of my latest projects below.</p>
      <div className="grid  md:grid-cols-2 gap-20 ">
        {projectData.map((project, index) => (
          <ProjectItemps key={index} title={project.title} description={project.description} stack={project.stack} image={project.img} />
        ))}
        
      </div>
    </div>
  );
};

export default Projects