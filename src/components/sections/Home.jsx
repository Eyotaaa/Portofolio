import { useState, useEffect } from "react"
import { HoverBorderGradient } from "../ui/border"
import DecryptedText from "../ui/decrypted"
import { motion, AnimatePresence } from "framer-motion"


export const Home = () => {
    const texts = ["Dzamir Akmal","Cyber Security Enthusiast","Digital Forensics Analyst","Data Science Enthusiast"]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 4000) 
        return () => clearInterval(interval)
    }, [texts.length])

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl px-4 mx-auto pb-20">
                {/* FOTO */}
                <div className="flex items-center justify-center mt-20">
                    <HoverBorderGradient className="w-[350px] h-[450px]">
                        <img
                            src="src/assets/DSC01517.JPG"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </HoverBorderGradient>
                </div>

                {/* TEKS */}
                <div>
                    <h1
                        className="text-5xl md:text-5xl font-bold mb-3 bg-gradient-to-r 
                         from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight"
                    >
                        Hi, I'm
                    </h1>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={texts[index]} // ✅ supaya animasi dijalankan tiap ganti teks
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DecryptedText
                                key={texts[index]}
                                text={texts[index]}
                                speed={70}
                                maxIterations={10}
                                sequential={true}
                                revealDirection="start"
                                className="text-4xl md:text-4xl font-bold mb-6 
                                bg-gradient-to-r from-amber-300 to-orange-400 
                                bg-clip-text text-transparent leading-tight font-sans"
                                encryptedClassName="text-4xl md:text-4xl font-bold mb-6 
                                leading-tight font-sans text-orange-400/70 blur-[1px]"
                            />



                        </motion.div>
                    </AnimatePresence>

                    <p className="mt-4 text-gray-400 text-lg mb-6 max-w-lg mx-auto leading-relaxed text-justify">
                        A Bachelor's graduate in Informatics Engineering from Telkom University,
                        committed to continuous learning and contributing to tackling challenges in the
                        world of cybersecurity and intelligent, data-driven technologies.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:bg-blue-500/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
