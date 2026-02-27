import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
    return (
        <main className="bg-background text-foreground">
            <Hero />
            <About />
            <Technologies />
            <Experience />
        </main>
    );
}
