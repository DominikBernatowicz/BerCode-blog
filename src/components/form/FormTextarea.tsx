import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const FormTextarea = (props: ComponentPropsWithoutRef<"textarea">) => {
    const { className, name, id, placeholder, value, onChange } = props;

    return (
        <div className={twMerge("relative group z-0 flex p-3", className)}>
            <div
                className="absolute inset-0 outline outline-2 -outline-offset-2 outline-zinc-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500 -z-10"
            />

            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 text-zinc-700 group-focus-within:text-fuchsia-500"
            >
                <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                />
            </svg>

            <textarea
                name={name}
                id={id}
                className="bg-transparent min-h-32 w-full outline-none px-1 pr-4 z-10"
                placeholder={placeholder}
            />
        </div>
    );
};