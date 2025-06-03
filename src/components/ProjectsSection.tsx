import "../index.css";
import React from "react";
import { ProjectDemoCard } from "./ProjectDemoCard";

export function ProjectsSection() {
    const summaryHeading = "Apps Included";
    const smartMarketerImg = "https://picsum.photos/id/180/600/400";
    const friendlyFinanceImg = "https://picsum.photos/id/190/600/400";
    const personalProjectImg = "https://picsum.photos/id/200/600/400";
    return(
        <section className="border p-2">
            <h2 className="text-3xl font-bold">My Projects</h2>
            <p className="text-gray-600 text-xl">What I've been working on lately.</p>
            <hr className="my-5 text-gray-200"/>
            <div className="grid md:grid-cols-3 gap-2">
                <ProjectDemoCard imgSrc={smartMarketerImg} label="SmartMarketer" description="A comprehensive toolkit for marketers featuring campaign tracking, social media scheduling, and messaging tools.This tool helps marketers." summary={summaryHeading}  details="Twitter Link Generator, WAMI Link Generator, and GitHub Url Generator." />
                <ProjectDemoCard imgSrc={friendlyFinanceImg} label="Friendly Finance" description="Personal finance management with expense tracking, budget planning, currency convertor, discount deducer and investment suggestions." summary={summaryHeading} details="Paise Planner, Currency Converter, Discount Deducer and Bill Batwara." />
                <ProjectDemoCard imgSrc={personalProjectImg} label="Personal Project" description="A responsive developer portfolio built with HTML, CSS, JavaScript, React JS, TailwindCSS. It showcases my latest work. " summary={summaryHeading} details="Project Showcase, Skills Display, Contact Details and Theme Switcher." />
            </div>
        </section>
    );
}