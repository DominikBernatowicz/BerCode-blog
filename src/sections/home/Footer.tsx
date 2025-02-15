const socialsIcons = [
    {
        name: 'Github',
        ref: 'https://github.com/DominikBernatowicz',
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="fill-zinc-500 size-5"
        >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
        </svg>
    },
    {
        name: "Linkedin",
        ref: "https://www.linkedin.com/in/dominik-bernatowicz-510b47207/",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-zinc-500 size-5"
        >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
    }
]


export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-zinc-950 relative">
            <div className="container">
                <div className="flex md:justify-between items-center justify-center">
                    <a
                        className="relative"
                        href="/"
                    >
                        <div className={"border-t-2 border-l-2 w-[20%] h-[50%] top-0 left-0 absolute"} />
                        <div className={"border-b-2 border-r-2 w-[20%] h-[50%] bottom-0 right-0 absolute"} />

                        <div className={"font-logo font-black text-2xl md:text-3xl lg:text-4xl p-2.5 pt-1 pb-1"}>
                            BerCode
                        </div>
                    </a>

                    <nav className="hidden md:flex text-zinc-500 font-heading font-black gap-12">
                        <a href="#">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>


                <div className="mt-12 md:mt-24 flex flex-col md:flex-row md:justify-between items-center">
                    <p className="text-zinc-400">
                        &copy; {new Date().getFullYear()} Blockforge. All rights reserved.
                    </p>

                    <div className="mt-10 md:mt-0 flex gap-6">
                        {socialsIcons.map(({ icon, ref }) => (
                            <a
                                className="inline-flex size-10 bg-zinc-800 rounded-full items-center justify-center"
                                href={ref}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};