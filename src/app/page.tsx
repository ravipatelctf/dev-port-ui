import { ProjectInfoCard } from "@/components/ui/project-info-card";


export default function Home() {
    return(
        <>
            <header className="my-4 mx-4 md:mx-40 border p-2">
                <nav className="border flex justify-between p-2">
                    <h1 className="font-bold">devportui™</h1>
                    <ul className="flex space-x-2">
                        <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                        <li><a href="#" className="hover:text-blue-600">Components</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
                    </ul>
                </nav>
            </header>
            <main className="my-4 mx-4 md:mx-40 p-2 border flex flex-col">
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
            </main>
            <footer className="my-4 mx-4 md:mx-40 p-2 border">
                <p className="text-sm flex place-content-center">© 2025 ravipatelctf | Built with Next.js • React • TailwindCSS • TypeScript | frontend ui component library for building developer portfolios</p>
            </footer>
        </>
    );
}