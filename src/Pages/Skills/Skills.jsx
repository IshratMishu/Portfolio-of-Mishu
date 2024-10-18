

const Skills = () => {
    return (
        <div className="mt-28 relative">
            <h1 className="text-center mb-20 text-6xl font-bold">Skills</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
                <div>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl rotate-6 absolute top-44 md:left-auto left-10">JavaScript</p>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl absolute top-64 -rotate-6 md:left-auto left-8">React</p>
                </div>
                <div>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative md:top-32 top-16">Tailwind</p>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative md:left-80 left-32">CSS</p>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative md:left-80 left-32 -rotate-12">HTML</p>
                </div>
                <div>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl absolute top-[22rem] md:left-auto left-5">NodeJS</p>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative md:top-44 md:right-24 top-48 -right-80 -rotate-45">ExpressJS</p>
                </div>
                <div>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative lg:top-44 lg:left-52 md:top-10 md:left-5 -rotate-3">MongoDB</p>
                    <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl rotate-12 relative left-36 md:left-56 lg:top-5 md:top-1">Github</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative left-36 rotate-6">Figma</p>
                <p className="bg-yellow-300 md:w-44 w-32 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl relative left-32">Web Design</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-3 mt-6 gap-10">
                <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl rotate-12 relative md:left-auto left-5 md:top-auto top-4">Surge</p>
                <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl">Netlify</p>
                <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl rotate-3">Vercel</p>
                <p className="bg-yellow-300 md:w-36 w-28 p-2 md:p-4 text-center rounded-2xl text-xl md:text-2xl -rotate-12 relative md:left-auto left-8">Firebase</p>
            </div>
        </div>
    );
};

export default Skills;