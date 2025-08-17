import { HoverEffect } from "../ui/card";
import { BackgroundGradient } from "../ui/gradient";


export const Project = () => {
    const listprojects = [
        {

            title: "UI/UX Design Booknow App",
            description:
                "BookNow is a mobile and web app for buying, selling, and reading digital books. I contributed by designing the user interface using Figma.",
            link: "https://stripe.com",
            image: 'src/assets/Projek/Booknow.png',
        },
        {
            title: "Forensic Web Analysis Attacks",
            description:
                "The Web Attack Digital Forensic Analysis Project uses Splunk to investigate web attacks, analyze evidence, find vulnerabilities, and improve security skills.",
            link: "https://stripe.com",
            image: 'src/assets/Studi/web.png',
        },
        {
            title: "Temperature Project",
            description:
                "This program uses MQTT with Python to simulate sensors sending temperature data, with subscribers computing averages in a scalable, parallel system.",
            link: "https://stripe.com",
            image: 'src/assets/Projek/suhu.png',
        },
        {
            title: "HDD & Web Domain AUTOPSY",
            description:
                "This project analyzes a WordPress backdoor and deface attack using Autopsy, revealing a hidden b374k.php file and a modified index.php, showing the attack came from local file upload.",
            link: "https://meta.com",
            image : 'src/assets/Projek/autopsy.png',
        },
        {
            title: "Penetration Test DVWA",
            description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
            image: 'src/assets/Projek/dvwa.png',
        },
        {
            title: "Microsoft",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
        },
    ];

    return (
        <section
            id="project"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="flex flex-col text-justify items-center w-full max-w-5xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
                    Recent Projects
                </h2>
                <HoverEffect items={listprojects} />
            </div>
        </section>
    );
};
