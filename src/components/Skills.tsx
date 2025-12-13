export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'React', 'KnockoutJS', 'TypeScript', 'NextJS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Java']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Jest', 'Webpack', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="cursor-default p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                borderWidth: '1px'
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#475569' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}