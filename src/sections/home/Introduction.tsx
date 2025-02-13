import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CutCornerButton } from "../../components/CutCornerButton";

const listItems = [
    "Aktualne informacje o nowinkach w React i TypeScript",
    "Wskazówki, które ułatwią Ci codzienną pracę programisty",
    "Inspiracje do tworzenia własnych projektów"
]

export const IntroductionSection = () => {
    // keyboard
    const keyboardRef = useRef<HTMLImageElement>(null);
    const { scrollYProgress: keyboardYScrollProgress } = useScroll({
        target: keyboardRef,
        offset: ["start end", "end start"],
    });
    const keyboardTranslateY = useTransform(keyboardYScrollProgress, [0, 1], [100, -100]);
    const keyboardRotate = useTransform(keyboardYScrollProgress, [0, 1], [30, -30]);

    // Dashboard
    const dashboardRef = useRef<HTMLImageElement>(null);
    const { scrollYProgress: dashboardYScrollProgress } = useScroll({
        target: dashboardRef,
        offset: ["start end", "end start"],
    });
    const dashboardTranslateY = useTransform(dashboardYScrollProgress, [0, 1], [200, -200]);
    const dashboardRotate = useTransform(dashboardYScrollProgress, [0, 1], [-45, 45]);
    const dashboardScale = useTransform(dashboardYScrollProgress, [0, 1], [0.7, 1.2])


    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-lg mx-auto">
                    Chyba pora aby się krótko przedstawić.
                    <span className="block">
                        A więc...
                    </span>
                </h2>

                <div className="flex flex-col gap-56 md:gap-48 lg:gap-80 mt-24 md:mt-32 lg:md-48">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl">
                                Cześć! Jestem Dominik
                            </h2>

                            <div className="flex flex-col mt-6 text-xl lg:text-2xl text-zinc-400 gap-6">
                                <p>
                                    Zacząłem interesować się programowaniem dobrych kilka lat temu i od tamtej pory nieustannie rozwijam swoje umiejętności, szczególnie w obszarze Reacta i TypeScriptu. Tworzenie aplikacji webowych stało się dla mnie nie tylko pracą, ale przede wszystkim pasją, którą chcę się dzielić z innymi.
                                </p>
                                <p>
                                    Pomysł na stworzenie tego bloga zrodził się z potrzeby uporządkowania zdobytej wiedzy oraz chęci dalszego poszerzania horyzontów. Mam nadzieję, że moje doświadczenia i przemyślenia okażą się pomocne także dla Ciebie!
                                </p>
                            </div>

                        </div>
                        <div className="hidden md:block">
                            <div className="relative inline-flex z-0">
                                <motion.img
                                    ref={keyboardRef}
                                    src="/assets/images/keyboard.png"
                                    alt="Torus Knot 3D Image"
                                    className="size-96 max-w-none"
                                    style={{
                                        translateY: keyboardTranslateY,
                                        rotate: keyboardRotate
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="relative hidden md:block">
                            <div className="absolute right-0 z-0">
                                <motion.img
                                    ref={dashboardRef}
                                    src="/assets/images/dashboard-growth.png"
                                    alt="Cone 3D Image"
                                    className="size-96 max-w-none rotate-12"
                                    style={{
                                        translateY: dashboardTranslateY,
                                        rotate: dashboardRotate,
                                        scale: dashboardScale
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">

                            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                                Dlaczego warto czytać bloga?
                            </h2>

                            <p className="mt-8 text-xl lg:text-2xl text-zinc-400">
                                Znajdziesz tu treści, które pomogą Ci rozwijać wiedzę teoretyczną dzięki czemu możesz stać się lepszym programistą.
                            </p>

                            <ul className="flex flex-col gap-4 mt-12">
                                {listItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="inline-flex flex-shrink-0 items-center justify-center size-8 outline outline-4 -outline-offset-2 outline-fuchsia-500/10 rounded-full">
                                            <div className="size-1.5 bg-fuchsia-500 rounded-full" />
                                        </div>
                                        <span className="text-xl font-bold">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className=" flex gap-8 mt-12">
                                <a href="/blog">
                                    <CutCornerButton>
                                        Wejdź i sprawdź
                                    </CutCornerButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};