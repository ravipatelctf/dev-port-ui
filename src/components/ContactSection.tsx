import "../index.css";
import React from "react";
import { Button } from "@/components/dev-port-ui/button";

export function ContactSection() {
    return(
        <section className="border p-2 mt-10">
            <h2 className="text-3xl font-bold">Connect</h2>
            <p className="text-gray-600 text-xl">Want to talk anything tech? I am just a ping away!</p>
            <hr className="my-5 text-gray-200"/>
            <div className="grid md:grid-cols-3 gap-4 ">
                <article>
                    <h3 className="text-2xl font-bold">Email</h3>
                    <p><a className="text-blue-700 hover:underline" href="https://ravipatelctf@gmail.com">ravipatelctf@gmail.com</a></p>
                </article>
                <article>
                    <h3 className="text-2xl font-bold">Social</h3>
                    <p className="flex gap-4 text-blue-700  hover:underline">
                        <a href="https://github.com/ravipatelctf">Github</a>
                        <a href="https://www.linkedin.com/in/ravipatelctf/">LinkedIn</a>
                        <a href="https://x.com/ravipatelctf">X</a>
                    </p>
                </article>
            </div>
            <Button label="test button" color="bg-green-600"/>
        </section>
    );
}