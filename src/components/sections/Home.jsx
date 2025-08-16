import { HoverBorderGradient } from "../ui/border";

export const Home = () => {
    return <section
        id="home"
        className="min-h-screen flex items-center justify-center relative "
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center max-w-6xl px-4 mx-auto">

            <div className="flex items-center justify-center mt-10">
                <HoverBorderGradient className="w-[350px] h-[450px]">
                    <img
                        src="src/assets/DSC01517.JPG"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </HoverBorderGradient>


            </div>
            <div>
                <h1 className="text--5xl md:text-5xl font-bold mb-4 bg-gradient-to-r 
                from-amber-300 to-orange-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm
                </h1>
                <span className="text--5xl md:text-5xl font-bold mb-4 bg-gradient-to-r 
                from-amber-300 to-orange-400 bg-clip-text text-transparent leading-right">
                    Dzamir Akmal
                </span>
                <p className="text-gray-400 text-lg mb-4 max-w-lg mx-auto leading-right text-justify">
                    A Bachelor's graduate in Informatics Engineering from Telkom University,
                    Committed to continuous learning and contributing to tackling challenges in the world of
                    cybersecurity and intelligent, data-driven technologies.
                </p>
                <div className="flex space-x-4">
                    <a href="#projects"
                        className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251, 191, 36,0.4)]">
                        View Projects
                    </a>
                    <a href="#Contact"
                        className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251, 191, 36,0.4)]
                 hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>

        </div>

    </section>
}