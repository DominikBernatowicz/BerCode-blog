import { twMerge } from "tailwind-merge";
import { Card } from "../../components/Card";
import type { CollectionEntry } from "astro:content";
import { useRef } from "react";
import { getPostColorFromCategory } from "../../utils/postUtils";
import { Tag } from "../../components/Tag";
import { CutCornerButton } from "../../components/CutCornerButton";
import { motion, useScroll, useTransform } from "framer-motion";

export const LeatestPostsSection = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
    const { latestPosts } = props;
    const targerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targerRef,
        offset: ['start end', 'start center']
    })

    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

    return (
        <section className="py-28 md:py-48 lg:py-60">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
                        Najnowsze wpisy na blogu.
                    </h2>
                    <p className="mt-8 text-xl lg:text-2xl text-zinc-400 text-center">
                        Bądź na bieżąco z najnowszymi wpisami! Znajdziesz tu świeże treści o programowaniu, JavaScript, React i nie tylko. Zobacz, co nowego pojawiło się na blogu.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:mt-28">
                    <div className="flex flex-col gap-16 md:gap-8">
                        {latestPosts.map(({ data: { title, description, category } }, postIndex) => {
                            const color = getPostColorFromCategory(category);

                            return (
                                <div
                                    className="sticky md:static"
                                    style={{
                                        top: `calc(95px + ${postIndex * 20}px)`,
                                    }}
                                >
                                    <Card
                                        key={postIndex}
                                        color={color}
                                        className={twMerge(postIndex % 2 && "md:hidden")}
                                        href={`/blog/${latestPosts[postIndex].slug}`}
                                    >
                                        <div>
                                            <Tag color={color}>
                                                {category}
                                            </Tag>

                                            <h3 className="font-heading font-black text-3xl mt-3">
                                                {title}
                                            </h3>

                                            <p className="text-lg text-zinc-400 mt-6">
                                                {description}
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                    <motion.div
                        ref={targerRef}
                        className="md:flex flex-col gap-8 mt-16 hidden"
                        style={{
                            marginTop
                        }}
                    >
                        {latestPosts.map(({ data: { title, description, category } }, postIndex) => {
                            const color = getPostColorFromCategory(category);

                            return (
                                <Card
                                    key={postIndex}
                                    color={color}
                                    className={twMerge(!(postIndex % 2) && "md:hidden")}
                                    href={`/blog/${latestPosts[postIndex].slug}`}
                                >
                                    <div>
                                        <Tag color={color}>
                                            {category}
                                        </Tag>

                                        <h3 className="font-heading font-black text-3xl mt-3">
                                            {title}
                                        </h3>

                                        <p className="text-lg text-zinc-400 mt-6">
                                            {description}
                                        </p>
                                    </div>
                                </Card>
                            )
                        })}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-32 md:mt-32">
                    <a href="/blog">
                        <CutCornerButton>
                            Odwiedź blog
                        </CutCornerButton>
                    </a>
                </div>
            </div >
        </section >
    );
};