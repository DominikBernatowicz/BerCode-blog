import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { findBgColor, findTextColor, type ColorType } from "../utils/colorsUtils";

export const Tag = (props: ComponentPropsWithoutRef<"div"> & { color: ColorType }) => {
    const { className, children, color } = props;

    return (
        <div className={twMerge(
            "px-3 py-1.5 rounded-full inline-flex",
            color === 'amber' && `bg-amber-500/10`,
            color === 'yellow' && `bg-yellow-500/10`,
            color === 'sky' && `bg-sky-500/10`,
            color === 'orange' && `bg-orange-500/10`,
            color === 'blue' && `bg-blue-500/10`,
            color === 'darkblue' && `bg-blue-700/10`,
            color === 'indigo' && `bg-indigo-500/10`,
            color === 'fuchsia' && `bg-fuchsia-500/10`,
            color === 'lime' && `bg-lime-500/10`,
            color === 'cyan' && `bg-cyan-500/10`,
            color === 'violet' && `bg-violet-500/10`,
            className
        )
        }>
            <span className={twMerge(
                "font-extrabold font-heading tracking-wider text-xs uppercase group-hover:animate-pulse",
                findTextColor(color)
            )}>
                {children}
            </span>
        </div >
    );
};