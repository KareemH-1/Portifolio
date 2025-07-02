import { ArrowUp } from "lucide-react";
    
export const Footer = () => {
    return (
        <footer className="bg-card py-12 px-4 border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <div className="container mx-auto text-center">
                <p className="text-muted-foreground text-md">
                    &copy; {new Date().getFullYear()} Kareem Hassan. All rights reserved.
                </p>
                <p className="text-muted-foreground mt-2">
                    Built with React and Tailwind CSS
                </p>
            </div>
            <a href="#hero" className=" p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary">
                <ArrowUp size={20}/>
            </a>
        </footer>
    );
}