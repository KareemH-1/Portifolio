import React from 'react';
import { Code  , Gamepad2 , BrainCircuit} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                   About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Developer & Competitive Programmer</h3>
                        
                        
                        <p className="text-muted-foreground">
                            Hi there! I'm a Computer Science student with a keen interest in front-end development, game dev, and competitive programming.
                        </p>

                        <p className="text-muted-foreground">
                            I thrive on building projects and picking up new technologies. These are what I really enjoy, always pushing myself to learn and improve.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="public/My_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Front-end Development</h4>
                                    <p className="text-muted-foreground">
                                     Crafting responsive and interactive user interfaces with a strong foundation in HTML, CSS, and JavaScript, currently expanding knowledge in React and Tailwind CSS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        


                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Gamepad2 className="h-6 w-6 text-primary"/>
                                 </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Game Development</h4>
                                <p className="text-muted-foreground">
                                    Developing engaging game experiences, from complex C++ ASCII games to hands-on projects in Unity, continuously building and learning.  
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Competitive Programming</h4>
                                <p className="text-muted-foreground">
                                      Dedicated to daily algorithmic problem-solving across platforms like Codeforces, VJudge, CodeChef, and LeetCode. Actively preparing for this year's ECPC.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}