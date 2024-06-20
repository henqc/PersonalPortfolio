import { projectList } from "@/utils/constants";

export default function Projects() {
  return (
    <div id="projects" className="section">
      <div className="text-center text-5xl mb-7">Projects</div>
      <div className="flex gap-4">
        {projectList.map((projectList: any) => {
          return (
            <a
              key={projectList.title}
              href={projectList.link}
              className="border-[2px] border-gray-500 w-96 h-[500px] rounded-[20px] py-6 px-10 hover:shadow-lg"
            >
              <div className="text-4xl text-center">{projectList.title}</div>
              <div className="my-4 text-xl text-center">
                {projectList.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {projectList.skills.map((skill: any) => {
                  return (
                    <div
                      key={skill}
                      className="bg-slate-800 rounded-3xl p-2 text-white"
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
