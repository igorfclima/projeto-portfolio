import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
    return (
        <main className="bg-background text-foreground">
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
