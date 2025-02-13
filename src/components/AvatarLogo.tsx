import { twMerge } from "tailwind-merge";
import { findBgColor, type ColorType } from "../utils/colorsUtils";
import { motion } from "framer-motion";

export const AvatarLogo = ({ src, name, color }: { src: string, name: string, color: ColorType }) => {
    return (
        <div className="relative">
            <div
                className={twMerge(
                    "size-16 rounded-full bg-cover bg-center overflow-hidden",
                    findBgColor(color),
                )}
            >
                <div
                    className="after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-full after:outline-white/20 "
                >
                    <img src={src} alt={`${name}'s avatar'`} />
                </div>

                <motion.div
                    className="absolute -top-3 -left-6 text-white text-[16px] z-10 font-bold font-logo"
                    initial={{
                        opacity: 0,
                        rotate: -10
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "anticipate",
                        repeatDelay: 2,
                        delay: 1.5
                    }}
                >
                    click
                </motion.div>

                <motion.div
                    className="absolute top-2 -right-4 text-white text-[12px] z-10 font-bold font-logo"
                    initial={{
                        opacity: 0,
                        rotate: 10
                    }}
                    animate={{
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "anticipate",
                        repeatDelay: 2,
                        delay: 1.0
                    }}
                >
                    click
                </motion.div>

                <motion.div
                    className="absolute top-7 -left-2 text-white text-[8px] z-10 font-bold font-logo"
                    initial={{
                        opacity: 0,
                        rotate: -10
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "anticipate",
                        repeatDelay: 2,
                        delay: .5
                    }}
                >
                    click
                </motion.div>
            </div>
        </div>
    );
};