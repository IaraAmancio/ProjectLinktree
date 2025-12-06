import type { ReactNode } from "react";

interface Props{
  url: string;
  children: ReactNode;
};


export function IconNetwork ({url, children} : Props)
 {
    return (
        <a 
        href={url}
        rel="noopener noreferrer"
        target="blanck"
        >
            {children}
        </a>
    )
 }