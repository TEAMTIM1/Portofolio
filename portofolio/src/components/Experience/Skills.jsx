import skillsData from "../../utils/dataSkills";

const Skills = () => {
   
  return (
    
   <div className="">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">Skills</h1>
      {skillsData.map((skill, index) => (
        <div key={index} className="my-4 ">
          <div className={`text-base font-medium ${skill.textColor}`}>{skill.skill}</div>
          <div className="h-3 w-full bg-gray-200 rounded-full mt-2">
            <div className={`h-3 rounded-full ${skill.color}`} style={{ width: skill.experience }}>

            </div>
          </div>
        </div>
      ))}
 </div>
  

  )
}

export default Skills