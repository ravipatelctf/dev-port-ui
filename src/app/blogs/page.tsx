import { Nav } from "@/components/ui/nav";

export default function Page() {
    return(
        <>
            <header className="my-4 mx-4 md:mx-40 border p-2">
                <Nav />
            </header>
            <main className="my-4 mx-4 md:mx-40 p-2 border flex flex-col">
                <h2 className="text-3xl font-bold">Blogs</h2>
                <p>Comming Soon...</p>
            </main>
            <footer className="my-4 mx-4 md:mx-40 p-2 border">
                <p className="text-sm flex place-content-center">© 2025 ravipatelctf | Built with Next.js • React • TailwindCSS • TypeScript | frontend ui component library for building developer portfolios</p>
            </footer>
        </>
    );
}