import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "../../components/Circle";
import { CutCornerButton } from "../../components/CutCornerButton";
import { Hexagon } from "../../components/Hexagon";

export const CallToActionSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

    return (
        <section
            ref={sectionRef}
            className="py-60 overflow-x-clip"
        >
            <div className="container">
                <div className="relative z-0">
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
                        A może
                        <span className="block">
                            współpraca?
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
                        Jeśli jesteś zainteresowany współpracą z miłą chęcią się odpiszę na wiadomość.
                    </p>

                    <div className="flex justify-center mt-12">

                        <a href="/contact">
                            <CutCornerButton>
                                Kontakt
                            </CutCornerButton>
                        </a>
                    </div>



                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                        <Hexagon size={700} duration={30} />
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                        <Hexagon size={1100} reverse duration={50} />
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle className="absolute left-0 -top-[400px]" animate>
                            <motion.img
                                src="/assets/images/cuboid.png"
                                alt="Cuboid 3D Image"
                                className="size-[140px]"
                                style={{ rotate }}
                            />
                        </Circle>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle className="absolute -left-[600px] -top-[70px]" animate>
                            <motion.img
                                src="/assets/images/cylinder.png"
                                alt="Cylinder 3D Image"
                                className="size-[140px]"
                                style={{ rotate }}
                            />
                        </Circle>
                    </div>
                </div>
            </div>
        </section >
    );
};