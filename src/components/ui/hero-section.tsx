import '@/styles.css';
import React from "react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
    return(
        <section className="mt-10 p-2 border">
            <h1 className="text-4xl font-bold">Ravi Shankar Patel</h1>
            <p className="text-gray-600 text-xl">Full Stack Developer</p>
            <hr className="my-5 text-gray-200"/>
            <p className="text-gray-900 text-xl mb-5">Recent graduate passionate about building web applications with modern technologies such as React JS, Vanilla JS, Express Js, Node JS and MongoDB to create full-stack applications.</p>
            <div className="flex space-x-5">
                <Button label="Contact Me" color="bg-blue-600" />
                <Button label="Resume" color="bg-gray-500" />
            </div>
        </section>
    );
}