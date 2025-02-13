import { useRef } from "react";
import { Circle } from "../../components/Circle";
import { CutCornerButton } from "../../components/CutCornerButton";
import { Hexagon } from "../../components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
    const icosahedronRef = useRef(null);
    const cubeRef = useRef(null);
    const thorusRef = useRef(null);
    const cuboidRef = useRef(null);

    const { scrollYProgress: icosahedronYScrollProgress } = useScroll({
        target: icosahedronRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: cubeYScrollProgress } = useScroll({
        target: cubeRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: thurusYScrollProgress } = useScroll({
        target: thorusRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: cuboidYScrollProgress } = useScroll({
        target: cuboidRef,
        offset: ["start end", "end start"],
    });

    const icosahedronRotation = useTransform(icosahedronYScrollProgress, [0, 1], [30, -45]);
    const cubeRotation = useTransform(cubeYScrollProgress, [0, 1], [100, -45]);
    const thorusRotation = useTransform(thurusYScrollProgress, [0, 1], [20, -20]);
    const cuboidRotation = useTransform(cuboidYScrollProgress, [0, 1], [20, -20]);

    return (
        <section className="py-24 overflow-x-clip lg:mt-28">
            <div className="container">
                <p className="uppercase text-center text-zinc-500 tracking-wider">
                    Witaj na blogu o programowaniu!
                </p>
                <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
                    Tu zaczyna się nasz Frontendowy maraton
                </h1>
                <p className="text-center text-xl md:text-2xl mt-6 text-zinc-600 max-w-xl mx-auto">
                    Będę się dzielić z tobą wszystkim, co warto wiedzieć o programowaniu od podstaw po zaawansowane tematy.
                </p>

                <div className="flex justify-center mt-10">
                    <a href="/blog">
                        <CutCornerButton>
                            Skusisz się?
                        </CutCornerButton>
                    </a>
                </div>

                <div className="flex justify-center">
                    <div className="inline-flex mt-24 relative -z-10">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon size={1100} />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon size={1800} reverse duration={60} />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle
                                className="absolute left-[200px] -top-[900px]"
                                animate
                            >
                                <motion.img
                                    ref={cubeRef}
                                    src="/assets/images/cube.png"
                                    alt="Cube 3D Image"
                                    className="size-[140px]"
                                    style={{
                                        rotate: cubeRotation
                                    }}
                                />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] top-[270px]">
                                <motion.img
                                    ref={cuboidRef}
                                    src="/assets/images/cuboid.png"
                                    alt="Cuboid 3D Image"
                                    className="size-[140px]"
                                    style={{
                                        rotate: cuboidRotation
                                    }}
                                />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -left-[600px] -top-[80px]">
                                <motion.img
                                    ref={thorusRef}
                                    src="/assets/images/torus.png"
                                    alt="Torus 3D Image"
                                    className="size-[140px]"
                                    style={{
                                        rotate: thorusRotation
                                    }}
                                />
                            </Circle>
                        </div>

                        <motion.div
                            ref={icosahedronRef}
                            className="inline-flex"
                            style={{
                                rotate: icosahedronRotation
                            }}
                        >
                            <img
                                src="/assets/images/icosahedron.png"
                                alt=""
                                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg] blur-sm"
                            />
                            <img
                                src="/assets/images/icosahedron.png"
                                alt="Icosahedron 3D Image"
                                className="w-[500px]"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
                    <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-1 ">
                        <motion.div
                            animate={{
                                translateY: 12,
                                opacity: 0.2
                            }}
                            transition={{
                                duration: 2,
                                ease: 'linear',
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="h-3 w-1 bg-fuchsia-500 rounded-full mt-0.5"
                        />
                    </div>
                    <p className="uppercase text-zinc-500 font-extrabold tracking-wider ">Scroll to learn more</p>
                </div>
            </div>
        </section >
    );
};