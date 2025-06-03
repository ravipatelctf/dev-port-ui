type ButtonProps = {
    label: string,
}

export function Button({label} : ButtonProps) {
    return(
        <button>{label}</button>
    );
}