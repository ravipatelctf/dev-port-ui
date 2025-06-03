import "@/index.css";;
import React from "react";

type ProjectDemoCardProps = {
    imgSrc: string;
    label: string;
    description: string;
    summary: string;
    details: string;
}

export function ProjectDemoCard({imgSrc, label, description, summary, details}: ProjectDemoCardProps) {
    return(
        <section className="border p-2">
            <img src={imgSrc} alt="a black puppy" />
            <h2 className="text-3xl font-bold">{label}</h2>
            <p className="text-gray-600 text-xl">{description}</p>
            <hr className="my-5 text-gray-200"/>
            <details>
                <summary>{summary}</summary>
                <p>{details}</p>
            </details>
        </section>
    );
}