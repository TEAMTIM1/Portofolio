import PokedexProject from '/assets/pokedex.png';

const ProjectItems = ({title, description, stack, image, path}) => {
    return (
        
        <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gradient-to-r from-gray-300 to-red-400"> 
            <a href={path}>
            <h2 className="text-2xl font-medium mb-4">{title}</h2>
            <img className=' w-full object-cover rounded-lg' src={`assets/${image}`} alt="image of my project" />
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="flex flex-wrap">
                {stack.map((tech, index) => (
                    <li key={index} className="bg-gray-200 rounded-full text-sm font-medium py-1 px-3 mr-2 mb-2">{tech}</li>
            ))}
          </ul>
          </a>
        </div>
        
      );
}

export default ProjectItems;