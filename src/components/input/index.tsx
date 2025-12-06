import type { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input (props: inputProps) {
    return (
                <input
                    className=" bg-white border-0 rounded px-2 mb-3 h-9 outline-0"
                    {...props}    
                >
                </input>
    )
}