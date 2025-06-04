import { ProjectInfoCard } from "@/components/ui/project-info-card";

export default function Page() {
    return(
        <>
            <section className="">
                <h2 className="text-3xl font-bold">My Projects</h2>
                <p className="text-md">What I've been working on lately.</p>
                <hr className="my-5" />
            </section>
                <section className="grid md:grid-cols-3 gap-1">
                    <ProjectInfoCard 
                        imgSrc="https://picsum.photos/id/180/400/300" 
                        imgAlt="an image to demonstrate marketing tools"
                        label="SmartMarketer"
                        description="A comprehensive toolkit for marketers featuring campaign tracking, social media scheduling, and messaging tools."
                        summaryDescription="Twitter Link Generator, WAMI Link Generator, and GitHub Url Generator."
                        projectDemoLink="https://qxyckn.csb.app/"
                        projectCodeLink="https://codesandbox.io/p/sandbox/charming-kilby-qxyckn"
                    />
                    <ProjectInfoCard 
                        imgSrc="https://picsum.photos/id/180/400/300" 
                        imgAlt="an image to demonstrate marketing tools"
                        label="SmartMarketer"
                        description="A comprehensive toolkit for marketers featuring campaign tracking, social media scheduling, and messaging tools."
                        summaryDescription="Twitter Link Generator, WAMI Link Generator, and GitHub Url Generator."
                        projectDemoLink="https://qxyckn.csb.app/"
                        projectCodeLink="https://codesandbox.io/p/sandbox/charming-kilby-qxyckn"
                    />
                    <ProjectInfoCard 
                        imgSrc="https://picsum.photos/id/180/400/300" 
                        imgAlt="an image to demonstrate marketing tools"
                        label="SmartMarketer"
                        description="A comprehensive toolkit for marketers featuring campaign tracking, social media scheduling, and messaging tools."
                        summaryDescription="Twitter Link Generator, WAMI Link Generator, and GitHub Url Generator."
                        projectDemoLink="https://qxyckn.csb.app/"
                        projectCodeLink="https://codesandbox.io/p/sandbox/charming-kilby-qxyckn"
                    />
                </section>
                <section>
                    <hgroup className="my-4">
                        <h2 className="text-3xl font-bold">Technical Skills</h2>
                        <p className="text-md">Skills I'm currently learning and practicing.</p>
                        <hr className="my-5" />
                    </hgroup>
                    <article className="grid md:grid-cols-3 gap-1">
                        <hgroup className="border p-1">
                            <h3 className="text-2xl font-bold border p-2">Frontend</h3>
                            <hr className="my-2" />
                            <ul className="list-disc border px-6 p-2">
                                <li>HTML5 & CSS3</li>
                                <li>Vanilla JS</li>
                                <li>Bootstrap & Pico CSS</li>
                                <li>React JS</li>
                            </ul>
                        </hgroup>
                            <hgroup className="border p-1">
                            <h3 className="text-2xl font-bold border p-2">Backend</h3>
                            <hr className="my-2" />
                            <ul className="list-disc border px-6 p-2">
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Mongo DB</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </hgroup>
                        <hgroup className="border p-1">
                            <h3 className="text-2xl font-bold border p-2">Tools</h3>
                            <hr className="my-2" />
                            <ul className="list-disc border px-6 p-2">
                                <li>Git & Github</li>
                                <li>VS Code</li>
                                <li>NPM</li>
                                <li>Postman</li>
                            </ul>
                        </hgroup>
                    </article>
                </section>

                {/* connect section */}
                <section>
                    <hgroup className="my-4">
                        <h2 className="text-3xl font-bold">Connect</h2>
                        <p className="text-md">Want to talk anything tech? I am just a ping away!</p>
                        <hr className="my-5" />
                    </hgroup>
                    <article className="grid md:grid-cols-2 gap-1">
                        <hgroup className="border p-1">
                            <h3 className="text-2xl font-bold border p-2">Email</h3>
                            <hr className="my-2" />
                            <div className="p-2 border flex gap-2">
                                <a href="https://ravipatelctf@gmail.com" className="border px-2 hover:text-blue-700 hover:underline">ravipatelctf@gmail.com</a>
                            </div>
                        </hgroup>
                        <hgroup className="border p-1">
                            <h3 className="text-2xl font-bold border p-2">Social</h3>
                            <hr className="my-2" />
                            <div className="p-2 border flex gap-2">
                                <a href="https://www.linkedin.com/in/ravipatelctf" className="border px-2 hover:text-blue-700 hover:underline">LinkedIn</a>
                                <a href="https://github.com/ravipatelctf" className="border px-2 hover:text-blue-700 hover:underline">Github</a>
                            </div>
                        </hgroup>
                    </article>
                </section>
        </>
    );
}