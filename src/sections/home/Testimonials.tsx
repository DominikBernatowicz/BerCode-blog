import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Jako początkujący programista, ten blog naprawdę mi pomógł. Artykuły są łatwe do zrozumienia, a przykłady praktyczne i bardzo pomocne w nauce!",
        avatar: "/assets/images/avatar-erica-wyatt.jpg",
        name: "Karolina Byk",
        role: "Początkujący programista"
    },
    {
        text: "Znalazłem ten blog, gdy dopiero zaczynałem swoją przygodę z web developmentem. Artykuły są proste i jasne, idealne dla osób na początku drogi.",
        avatar: "/assets/images/avatar-noel-baldwin.jpg",
        name: "Jan Kowalski",
        role: "Nowicjusz w web development"
    },
    {
        text: "Bardzo pomocne artykuły, szczególnie dla początkujących! Wszystko jest wyjaśnione krok po kroku, dzięki czemu łatwo było mi zrozumieć podstawy.",
        avatar: "/assets/images/avatar-harry-bender.jpg",
        name: "Adam Dobry",
        role: "Początkujący programista"
    }
]


export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-zinc-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
                    {testimonials.map(({ text, avatar, name, role }, index) => (
                        <motion.blockquote
                            key={index}
                            className={twMerge(index === 2 && "md:hidden lg:block")}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 1,
                                delay: index * 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            <p className="text-heading text-3xl lg:text-4xl font-black">
                                &ldquo;{text}&rdquo;
                            </p>
                            <cite className="mt-8 block">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <div
                                            className="size-16 bg-zinc-700 rounded-full overflow-hidden bg-cover"
                                            style={{
                                                backgroundImage: `url(${avatar})`
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="font-black not-italic text-lg">
                                            {name}
                                        </div>
                                        <div className="text-zinc-400 not-italic">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};