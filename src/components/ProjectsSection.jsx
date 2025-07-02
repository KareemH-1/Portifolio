import { ExternalLink , Github , ArrowRight} from "lucide-react";

const projects = [
    {   
        id: 1,
        title: "React Movies App",
        description: "Movie App using React , tailwind and AppWrite.",
        technologies: ["React", "TailwindCSS", "AppWrite"],
        linkGitHub: "https://github.com/KareemH-1/React/tree/main/Movie-React-Project",
        linkPage: "https://react-movies-project1.netlify.app/",
        image: "/projects/Project1.png"
    },
    
    {   
        id: 2,
        title: "Frontend Projects",
        description: "A collection of various frontend projects.",
        technologies: ["HTML/CSS", "JavaScript"],
        linkGitHub: "https://github.com/KareemH-1/Front-end-projects",
        linkPage: "https://kareemh-1.github.io/Front-end-projects/",
        image: "/projects/Project2.png"
    },
    
    {   
        id: 3,
        title: "ASCII Game",
        description: "A Complex ASCII game built using C++ Only as a team project.",
        technologies: ["C++"],
        linkGitHub: "https://github.com/KareemH-1/GameProject-CS102x",
        linkPage: "#",
        image: "/projects/Project3.png"
    },
    
    {   
        id: 4,
        title: "Pong 3D Game",
        description: "A 3D version of the classic Pong game built using Unity.",
        technologies: ["Unity", "C#"],
        linkGitHub: "https://github.com/KareemH-1/GameDevelopment/tree/main/Unity/Pong3D",
        linkPage: "https://github.com/KareemH-1/GameDevelopment/blob/main/Unity/Pong3D/Pong3D.zip",
        image: "/projects/Project4.png"
    },
    
    {   
        id: 5,
        title: "Space Shooter Game",
        description: "A 2D Space Shooter Game built using Unity.",
        technologies: ["Unity", "C#"],
        linkGitHub: "https://github.com/KareemH-1/GameDevelopment/tree/main/Unity/SpaceGame",
        linkPage: "#",
        image: "/projects/Project5.png"
    },

    {
        id: 6,
        title: "C++ Projects",
        description: "A collection of various mini C++ projects done mainly for practicing.",
        technologies: ["C++"],
        linkGitHub: "https://github.com/KareemH-1/Cpp-Projects/tree/main/Cpp-Basic-Codes",
        linkPage: "#",
        image: "/projects/Project6.png"
    },
]

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
        
        
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects, Each of these projects was made to learn through practice. Click on the project titles to view them on GitHub or see the live demo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className ="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>
        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.linkPage} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a>
                                <a href={project.linkGitHub} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/> </a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
            ))}
        </div>

            <div className= "text-center mt-12">
                <a href="https://github.com/KareemH-1" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank"> Check My GitHub <ArrowRight size={16}/> </a>
            </div>

        </div>
    </section>
   


    );
}
