import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ColorType } from "../../utils/colorsUtils";
import { Card } from "../../components/Card";

type CardDataType = {
    imageSrc: string,
    imageAlt: string,
    title: string,
    description: string,
    color: ColorType
}

const cardData: CardDataType[] = [
    {
        imageSrc: "/assets/images/html.png",
        imageAlt: "HTML Logo",
        title: "HTML: Struktura Stron Internetowych",
        description: "Poznaj podstawy HTML, budowania struktur stron i aplikacji internetowych.",
        color: "orange"
    },
    {
        imageSrc: "/assets/images/css.png",
        imageAlt: "CSS Logo",
        title: "CSS: Stylowanie Stron Internetowych",
        description: "Opanuj CSS, aby tworzyć piękne, responsywne i stylowe strony internetowe.",
        color: 'darkblue'
    },
    {
        imageSrc: "/assets/images/javascript.png",
        imageAlt: "JavaScript Logo",
        title: "JavaScript: Podstawy i Zaawansowane Funkcje",
        description: "Dowiedz się, jak tworzyć dynamiczne strony internetowe i aplikacje z użyciem JavaScriptu.",
        color: "yellow"
    },
    {
        imageSrc: "/assets/images/react.png",
        imageAlt: "React Logo",
        title: "React: Budowanie Interaktywnych UI",
        description: "Zdobądź umiejętności w budowaniu nowoczesnych, reaktywnych aplikacji webowych z React.",
        color: "sky"
    },
]


export const FeaturesCardsSection = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        if (isHovered) return;

        const timeout = setTimeout(() => {
            setSelectedCardIndex(selectedCardIndex === cardData.length - 1 ? 0 : selectedCardIndex + 1);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [selectedCardIndex, isHovered]);
    return (
        <section className="py-24 md:py-52 overflow-x-clip bg-zinc-900/50 backdrop:blur-lg relative z-0 ">
            <div className="container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
                    Tematy które będę poruszać na blogu.
                </h2>

                <div className="mt-36 lg:mt-48 flex">
                    <div className="flex flex-none gap-8">
                        {cardData.map(({ imageSrc, imageAlt, title, description, color }) => (
                            <div
                                key={title}
                                className="inline-flex transition-all duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                                }}
                            >
                                <Card
                                    key={title}
                                    color={color}
                                    buttonText="Sprawdź"
                                >
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute w-full h-4 top-[calc(100%+16px)] rounded-[100%] bg-zinc-950/70 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:scale-110 group-hover:bg-zinc-950/50 transition duration-300" />

                                            <img
                                                src={imageSrc}
                                                alt={imageAlt}
                                                className="size-40 group-hover:scale-110 group-hover:-translate-y-6 transition duration-300"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-heading font-black text-3xl mt-12">
                                        {title}
                                    </h3>

                                    <p className="text-lg text-zinc-400 mt-4">
                                        {description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="bg- bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full relative items-center">
                        {cardData.map(({ title }, index) => {
                            return (
                                <div
                                    key={title}
                                    className={twMerge(
                                        "size-2.5 bg-zinc-500 rounded-full cursor-pointer opacity-100 transition blur-none duration-300",
                                        index === selectedCardIndex && "blure-lg opacity-50"
                                    )}
                                    onClick={() => setSelectedCardIndex(index)}
                                />
                            )
                        })}
                        <div
                            className="absolute size-3 rounded-full bg-zinc-300 transition duration-300"
                            style={{
                                transform: `translateX(calc((1.6rem) * ${selectedCardIndex}))`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};