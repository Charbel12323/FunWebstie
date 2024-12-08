import React from 'react';

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-10 px-4">
            <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-10 transform hover:scale-105 transition-transform duration-500">
                <h1 className="text-5xl font-extrabold text-blue-600 mb-6 border-b-4 border-blue-500 pb-2 inline-block animate-fade-in">
                    About Me
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Hey there! I’m <span className="font-bold text-blue-600">Charbel</span> – part dreamer, part doer, and 100% enthusiast for all things adventurous and creative. Born with an innate curiosity (and maybe a bit too much energy), I’ve spent my life chasing dreams, solving puzzles, and finding joy in the most unexpected places.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    From brainstorming the next big project to laughing way too hard at a good joke, I believe life is meant to be lived with passion and a dash of humor. If you’re looking for someone who brings excitement, creativity, and just the right amount of chaos to every adventure—well, look no further!
                </p>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-blue-500 border-b-2 border-blue-300 pb-2 inline-block">
                        Fun Facts About Me
                    </h2>
                    <ul className="list-disc ml-6 mt-4 space-y-4 text-gray-700">
                        <li className="hover:text-blue-600 transition-colors duration-300">
                            I once spent an afternoon learning origami from a 6-year-old—she totally outclassed me.
                        </li>
                        <li className="hover:text-blue-600 transition-colors duration-300">
                            I love over-ambitious projects that sound crazy but turn into something awesome.
                        </li>
                        <li className="hover:text-blue-600 transition-colors duration-300">
                            If I could have any superpower, it’d be the ability to stop time just before I say something embarrassing.
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-blue-500 border-b-2 border-blue-300 pb-2 inline-block">
                        Let’s Connect!
                    </h2>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Whether you’re here to share a laugh, collaborate on a project, or just say hi, I’m always excited to connect with new people. Let’s yap and create something amazing together!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
