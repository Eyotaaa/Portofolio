export const Home = () => {
    return <section 
    id="home"
    className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text--5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent leading-right">
                Hi, I'm Dzamir Akmal
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                A Bachelor's graduate in Informatics Engineering from Telkom University,  
                Committed to continuous learning and contributing to tackling challenges in the world of 
                cybersecurity and intelligent, data-driven technologies.
            </p>
            <div className="flex justify-center space-x-4">
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
    </section>
}