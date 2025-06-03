import { Button } from "@/components/ui/button";

export default function Home() {
    return(
        <>
            <header className="my-4 mx-4 md:mx-40 border p-2 flex justify-between">
                <h1 className="border p-2 font-bold">devportui</h1>
                <nav className="">
                    <ul className="flex space-x-4 justify-center p-2 border">
                        <li><a href="#" className="hover:text-blue-600 border p-2">Documentation</a></li>
                        <li><a href="#" className="hover:text-blue-600 border p-2">Components</a></li>
                        <li><a href="#" className="hover:text-blue-600 border p-2">Blogs</a></li>
                    </ul>
                </nav>
            </header>
            <main className="my-4 mx-4 md:mx-40 p-2 border flex justify-between">

            </main>
            <footer className="my-4 mx-4 md:mx-40 p-2 border flex justify-between">

            </footer>
        </>
    );
}