export const Project = () => {
    
    return <section id="projects">
        <div className="max-w-3xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
                My Projects
            </h2>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl p-6 border border-yellow-500 hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4">Project Title 1</h3>
                    <p className="text-gray-300 mb-4">
                        Brief description of the project, highlighting its purpose and technologies used.
                    </p>
                </div>
                <div className="rounded-xl p-6 border border-yellow-500 hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4">Project Title 1</h3>
                    <p className="text-gray-300 mb-4">
                        Brief description of the project, highlighting its purpose and technologies used.
                    </p>
                </div>
                <div className="rounded-xl p-6 border border-yellow-500 hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4">Project Title 1</h3>
                    <p className="text-gray-300 mb-4">
                        Brief description of the project, highlighting its purpose and technologies used.
                    </p>
                </div>
            </div>
        </div>


    </section>
}