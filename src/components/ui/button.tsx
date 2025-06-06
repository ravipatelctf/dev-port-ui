
type ButtonProps = {
    label: string,
}

export function Button({label} : ButtonProps) {
    return(
        <button className="border">{label}</button>
    );
}