import Image from "next/image";

type ProjectInfoCardProps = {
    imgSrc: string,
    imgAlt: string,
    label: string,
    description: string,
    summaryDescription: string,
    projectDemoLink: string,
    projectCodeLink: string,
}

export function ProjectInfoCard({imgSrc, imgAlt, label, description, summaryDescription, projectDemoLink, projectCodeLink}: ProjectInfoCardProps) {
    return(
        <article className="border p-1">
            <img src={imgSrc} alt={imgAlt} />
            <h3 className="text-2xl font-bold">{label}</h3>
            <p>{description}</p>
            <details>
                <summary>Apps Included</summary>
                <p>{summaryDescription}</p>
            </details>
            <a href={projectDemoLink} className="hover:underline hover:text-blue-600">🖥️ Demo</a>
            <a href={projectCodeLink} className="hover:underline hover:text-blue-600">⚙️ Code</a>
        </article>
    );
}