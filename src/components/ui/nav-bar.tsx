import '@/styles.css';
import React from "react";

export function NavBar() {
    return(
        <>
            <nav className="border p-2">
                <ul className="flex flex-row gap-8 place-content-start text-blue-800 text-xl">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Connect</a></li>
                </ul>
            </nav>
        </>
    );
}