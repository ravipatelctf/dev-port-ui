import "./index.css";
import React from "react";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

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