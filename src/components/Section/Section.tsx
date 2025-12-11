import type { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
