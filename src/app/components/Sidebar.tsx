import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <>
            <aside className="w-1/2 bg-white flex flex-col justify-between p-6 shadow-lg sticky top-0 h-screen">
                <div className="py-10 w-full">
                    <h1 className="text-3xl font-bold">Nicholas McGuffin</h1>
                    <p className="text-lg text-neutral-400 mt-1">Software Engineer</p>

                    <p className="text-neutral-400">
                        Full-stack software engineer specializing in web apps and integrations
                    </p>

                    <nav className="mt-10 space-y-4">
                        <a href="#about" className="block hover:text-white">About</a>
                        <a href="#experience" className="block hover:text-white">Experience</a>
                        <a href="#projects" className="block hover:text-white">Projects</a>
                    </nav>
                </div>

                <div className="flex space-x-4 mt-6">
                    <a href="https://github.com/nickmcguffin" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/nicholas-mcguffin/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                    <a href="mailto:nicholas.mcguffin.developer@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={24} /></a>
                </div>
            </aside>
        </>
    )
}
