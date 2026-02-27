import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
    return (
        <main className="bg-background text-foreground">
            <Hero />
            <About />
            <Technologies />
        </main>
    );
}
