import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Logo = () => {
    const logo = 'BerCode'
    const [isAnimated, setIsAnimated] = useState<boolean>(false)

    useEffect(() => {
        setIsAnimated(true)
    }, [])

    return (
        <div className="relative">
            <div className={twMerge(
                "border-t-2 border-l-2 w-[20%] h-[50%] top-0 left-0 absolute transition-all duration-300 ease-linear opacity-0",
                isAnimated && 'opacity-100'
            )} />
            <div
                className={twMerge(
                    "border-b-2 border-r-2 w-[20%] h-[50%] bottom-0 absolute transition-all duration-300 ease-linear opacity-0",
                    isAnimated && 'opacity-100 right-0'
                )}
            />
            <a
                className={twMerge(
                    "font-logo font-black text-2xl md:text-3xl lg:text-4xl p-0.5 pt-1 lg:pt-2 pb-1 lg:pb-2 transition-all duration-300 ease-linear",
                    isAnimated && 'p-2.5'
                )}
                href="/"
            >
                {[...logo].map((letter, index) =>
                    <span
                        className={twMerge(
                            "transition-all duration-300 ease-linear opacity-0",
                            isAnimated && `opacity-100`
                        )}
                        style={{
                            transitionDelay: `calc(0.1s * ${index})`
                        }}
                    >
                        {letter}
                    </span>
                )}
            </a>
        </div>
    );
};