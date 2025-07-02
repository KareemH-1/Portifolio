import React from 'react';
import { cn } from '../lib/utils';
const skills = [
    {name: "C++", level: 80, category: ["Programming" , "Game Development"], devicon: "devicon-cplusplus-plain"},
    {name: "C#", level: 75, category: ["Programming" , "Game Development"], devicon: "devicon-csharp-plain"},
    {name: "Python", level: 60, category: ["Programming"], devicon: "devicon-python-plain"},

    {name: "HTML/CSS", level: 80 , category: ["Frontend"], devicon: "devicon-html5-plain"},
    {name: "JavaScript", level: 70, category: ["Frontend" , "Programming"], devicon: "devicon-javascript-plain"},
    {name: "React", level: 60, category: ["Frontend"], devicon: "devicon-react-original"},

    {name: "Figma", level: 30, category: ["Design"], devicon: "devicon-figma-plain"},
    {name: "SQL", level: 55, category: ["Database"], devicon: "devicon-mysql-plain"},

    {name: "Git/GitHub", level: 95, category: ["Tools"], devicon: "devicon-git-plain"},
    {name: "Visual Studio Code", level: 90, category: ["Tools" , "Code Editors"], devicon: "devicon-vscode-plain"},
    {name: "Visual Studio", level: 90, category: ["Tools" , "Code Editors"], devicon: "devicon-visualstudio-plain"},
    { name: "CLion", level: 90, category: ["Tools" , "Code Editors"], fallbackIcon: "🛠️" },
    { name: "DataGrip", level: 90, category: ["Tools" , "Code Editors"], fallbackIcon: "🗄️" },


    {name: "Unity Engine", level: 70, category: ["Game Development"], devicon: "devicon-unity-original"},
    {name: "Unreal Engine", level: 20, category: ["Game Development"], devicon: "devicon-unrealengine-original"},
];

const categories = ["all", "Frontend", "Programming", "Database", "Design", "Tools", "Game Development" , "Code Editors"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState("all");
const filteredSkills = skills.filter((skill) => 
    activeCategory === "all" || skill.category.includes(activeCategory)
);

return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        className={cn(`px-5 py-2 rounded-full transition-colors duration-300 capitalize`, 
                           activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSkills.map((skill , key) => (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4 flex items-center gap-3">
                    {skill.devicon && (
                    <i className={`${skill.devicon} colored text-2xl`}></i>
                    )}
                    {!skill.devicon && skill.fallbackIcon && (
                        <span className="text-xl">{skill.fallbackIcon}</span>
                    )}
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>

                
                <div className="w-full bg-secondary-50 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{ width: skill.level + "%" }}
                    />
                </div>
                
                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                </div>


                ))}

            </div>
        </div>
    </section>;
}