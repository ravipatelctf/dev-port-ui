export function Nav() {
    return(
        <nav className="border flex justify-between p-2">
            <a className="font-bold" href="/">devportui™</a>
            <ul className="flex space-x-2">
                <li><a href="/docs" className="hover:text-blue-600">Documentation</a></li>
                <li><a href="/blogs" className="hover:text-blue-600">Blogs</a></li>
            </ul>
        </nav>
    );
}