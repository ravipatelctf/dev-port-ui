import "../index.css";
import React from "react";

export function SkillsSection() {
    return(
        <section className="border p-2 mt-10">
            <h2 className="text-3xl font-bold">Technologies</h2>
            <p className="text-gray-600 text-xl">What I've been working on lately.</p>
            <hr className="my-5 text-gray-200"/>
            <div className="grid md:grid-cols-3 gap-4 ">
                <article>
                    <h3 className="text-2xl font-bold">Frontend</h3>
                    <ul className="text-md list-disc pl-10">
                        <li>HTML5 & CSS3</li>
                        <li>Vanilla JS</li>
                        <li>Bootstrap & TailwindCSS</li>
                        <li>React JS</li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-2xl font-bold">Backend</h3>
                    <ul className="text-md list-disc pl-10">
                        <li>Node JS</li>
                        <li>Express JS</li>
                        <li>Mongo DB</li>
                        <li>RESTful APIs</li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-2xl font-bold">Tools</h3>
                    <ul className="text-md list-disc pl-10">
                        <li>Git & Github</li>
                        <li>VS Code</li>
                        <li>NPM</li>
                        <li>Postman</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}