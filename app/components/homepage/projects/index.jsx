import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

return (
  <div id='projects' className="relative z-50 my-12 lg:my-24">
    <div className="sticky top-10">
      {/* Centered Background Circle */}
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-30"></div>
      
      {/* Centered PROJECTS Text with Horizontal Line */}
      <div className="flex items-center justify-center relative">
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md z-10">
          PROJECTS
        </span>

        <span className="absolute w-full h-[2px] bg-[#1a1443] top-1/2 -translate-y-1/2"></span>
      </div>
    </div>


    {/* Project Cards Section */}
    <div className="pt-24">
    <br/>
    <br/>
      <div className="flex flex-col gap-8 items-center">
        {projectsData.slice(0, 5).map((project, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            className="sticky-card w-full mx-auto max-w-2xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-500">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default Projects;