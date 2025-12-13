import Link from 'next/link';
import { FaLaptopCode, FaMobileAlt, FaChartBar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icon: <FaLaptopCode />,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Firebase', 'CSS3'],
      icon: <FaMobileAlt />,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analysis with custom charts, filters, and real-time data processing capabilities.',
      technologies: ['Python', 'D3.js', 'PostgreSQL'],
      icon: <FaChartBar />,
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white" style={{ color: 'var(--text-primary)' }}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 bg-white dark:bg-slate-800 flex flex-col"
            >
              <div className="bg-gradient-to-br from-slate-600 to-slate-700 h-48 flex items-center justify-center text-white shrink-0">
                <span className="text-6xl opacity-80" aria-hidden="true">{project.icon}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.githubUrl}
                    className="font-medium transition-colors flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label={`View source code for ${project.title}`}
                  >
                    <FaGithub aria-hidden="true" /> Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="font-medium transition-colors flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}