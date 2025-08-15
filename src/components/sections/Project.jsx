import { img } from "motion/react-client";
import { HoverEffect } from "../ui/card";

export const listprojects = [
    {   
        
        title: "UI/UX Design Booknow App",
        description:
            "BookNow is a mobile and web app for buying, selling, and reading digital books. I contributed by designing the user interface using Figma.",
        link: "https://stripe.com",
        image: 'src/assets/Projek/Booknow.png',
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

export const Project = () => {
    return (
        <section
            id="project"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
                    Recent Projects
                </h2>
                <HoverEffect items={listprojects} />
            </div>
        </section>
    );
};
