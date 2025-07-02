import { Mail , Phone , MapPin , Linkedin , Github , Send} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
export const ContactSection = () => {

const {toast} = useToast(); 
const[isSubmitting, setIsSubmitting] = useState(false);
    
    
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    try {
        const res = await fetch('/api/send-email.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });



        if (!res.ok) throw new Error('Failed to send');

        toast({
            title: "Message Sent",
            description: "Thanks for reaching out!",
        });
    } catch (error) {
        toast({
            title: "Error",
            description: "There was a problem sending your message.",
        });
    }

    setIsSubmitting(false);
};


    return <section id = "contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
            <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch </span></h2>
        
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className ="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="text-primary h-6 w-6"/>
                            </div>

                            <div>
                                <h4 className ="font-medium">Email</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:kareem99710@gmail.com">kareem99710@gmail.com</a>
                            </div>

                        </div>



                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="text-primary h-6 w-6"/>
                            </div>
                            
                            <div>
                                <h4 className ="font-medium">Phone</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+20121112598">+20(121112598)</a>
                            </div>

                        </div>



                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="text-primary h-6 w-6"/>
                            </div>
                            
                            <div>
                                <h4 className ="font-medium">Location</h4>
                                <a className="text-muted-foreground">Cairo, Egypt </a>
                            </div>

                        </div>

                    </div>

                    <div className="pt-8">
                        <h4 className ="font-medium mb-4"> Connect With Me</h4>
                        
                        <div className= "flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/kareem-hassan-4a6380332/ " target="_blank">
                                <Linkedin />  
                            </a>
                            <a href="https://github.com/KareemH-1" target="_blank">
                                <Github />  
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" >
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                       <div>
                         <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                         <input 
                             type="text" 
                             name="name" 
                             id="name" 
                             required 
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                             placeholder="Kareem Hassan..." 
                         />
                    </div>


                       <div>
                         <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                         <input 
                             type="email" 
                             name="email" 
                             id="email" 
                             required 
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                             placeholder="Kareem@gmail.com" 
                         />
                    </div>

                       <div>
                         <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                         <textarea
                             name="message" 
                             id="message" 
                             required 
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                             placeholder="Hello, I'd like to talk about..." 
                         />
                    </div>
                    
                    <button 
                    disabled={isSubmitting}
                    type="submit"
                     className= {cn(
                        "cosmic-button w-full flex items-center justify-center gap-2",

                    )}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={16} />
                    </button>

                    </form>

                </div>
            </div>
        </div>

    </section>
}