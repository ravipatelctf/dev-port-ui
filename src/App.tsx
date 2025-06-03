import '@/styles.css';
import React from "react";
import { ContactSection } from "./components/ui/contact-section";
import { FooterSection } from "./components/ui/footer-section";
import { HeroSection } from "./components/ui/hero-section";
import { NavBar } from "./components/ui/nav-bar";
import { ProjectsSection } from "./components/ui/projects-section";
import { SkillsSection } from "./components/ui/skills-section";

export default function App() {
  return(
    <>
        <header className="mx-4 md:mx-40 my-4 p-2 border">
            <NavBar />
            <HeroSection />
        </header>
        <main className="mx-4 md:mx-40 my-4 p-2 border">
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>
        <footer className="mx-4 md:mx-40 my-4 p-2 border">
            <FooterSection />
        </footer>
    </>
  );
}