import Link from "next/link";

export function Nav() {
    return(
        <nav className="border flex justify-between p-2">
            <Link className="font-bold" href="/">devportui™</Link>
            <ul className="flex space-x-2">
                <li><Link href="/docs" className="hover:text-blue-600">Documentation</Link></li>
                <li><Link href="/blogs" className="hover:text-blue-600">Blogs</Link></li>
            </ul>
        </nav>
    );
}