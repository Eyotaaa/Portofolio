export const About = () => {
    const digitalForensicsSkills = [
        "Autopsy",
        "FTK Imager",
        "Splunk",
        "Wireshark",
        "Volatility"];
    const dataScienceSkills = [
        "Python",
        "pandas",
        "NumPy",
        "colab"];
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS"];
    const artificialIntelligenceSkills = [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision"];
    const cybersecuritySkills = [
        "Network Security",
        "Penetration Testing",
        "Vulnerability Assessment"];

    return <section id="about"
        className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>

            <div classNamae="rounded-xl p-8 border-white/10 border-4 hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Actively developing skills in these fields with a strong
                    enthusiasm for the latest technological advancements
                </p>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-9 ">

                    <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all rounded-xl border-1 border-orange-500/20">
                        <div className="w-40 h-40 justify-center mx-auto">
                            <img src="src\assets\Skill\forensic.png"></img>
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Digital Forensics
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {digitalForensicsSkills.map((skill, key) => (
                                <span key={key}
                                    className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_0_15px_rgba(245, 158, 11,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border-1 border-orange-500/20  rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <div className="w-40 h-40 justify-center mx-auto">
                            <img src="src\assets\Skill\cyber.png"></img>
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Cyber Security
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {cybersecuritySkills.map((skill, key) => (
                                <span key={key}
                                    className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_0_15px_rgba(245, 158, 11,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className=" rounded-xl border-1 border-orange-500/20 rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <div className="w-40 h-40 justify-center mx-auto">
                            <img src="src\assets\Skill\data.png"></img>
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Data Science
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {dataScienceSkills.map((skill, key) => (
                                <span key={key}
                                    className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_0_15px_rgba(245, 158, 11,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border-1 border-orange-500/20 rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <div className="w-40 h-40 justify-center mx-auto">
                            <img src="src\assets\Skill\ai.png"></img>
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Artificial Intelligence
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {artificialIntelligenceSkills.map((skill, key) => (
                                <span key={key}
                                    className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_0_15px_rgba(245, 158, 11,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </section >
}