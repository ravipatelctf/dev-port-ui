import React from "react";
import '@/styles.css';

type ButtonProps = {
    label: string;
    color: string;
}

export function Button({label, color}: ButtonProps) {
    return(
        <button className={`border rounded-md px-6 py-4 ${color} text-gray-100 text-xl`} >
            {label}
        </button>
    );
}