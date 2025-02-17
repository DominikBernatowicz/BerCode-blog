import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { findTextColor, type ColorType } from "../utils/colorsUtils";

export const TextButton = (props: ComponentPropsWithoutRef<"button"> & { color: ColorType, href: string, withHoverGroup?: boolean }) => {
    const { className, children, color, href, withHoverGroup = false } = props;

    return (
        <a href={href}>
            <button className={twMerge(
                "text-sm font-heading uppercase font-extrabold tracking-wider transition-all duration-300 ease-linear",
                findTextColor(color, withHoverGroup),
                className
            )}>
                {children}
            </button>
        </a>
    );
};