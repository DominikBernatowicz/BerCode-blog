import { twMerge } from "tailwind-merge";
import { TextButton } from "./TextButton";
import type { ComponentPropsWithoutRef } from "react";
import { findBgColor, findTextColor, type ColorType } from "../utils/colorsUtils";

export const Card = (props: ComponentPropsWithoutRef<"div"> & { color: ColorType, href: string, buttonText?: string }) => {
    const { children, className, color, href, buttonText = 'Czytaj dalej' } = props;

    return (
        <div className={twMerge(
            "relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group flex flex-col justify-between",
            className
        )}>
            <div className={twMerge(
                "absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                findBgColor(color)
            )} />
            <div className={twMerge(
                "absolute size-16 rounded-xl transition duration-300 top-1.5 right-1.5 -z-10",
                findBgColor(color, true)
            )} />

            <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

            {children}

            <div className="flex justify-between items-center mt-12">
                <TextButton
                    color={color}
                    withHoverGroup={true}
                    href={href}
                >
                    {buttonText}
                </TextButton>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-zinc-500 group-hover:text-zinc-300 -translate-x-2 group-hover:translate-x-0 transition duration-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </div>
        </div>
    );
};