import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const contactMethods = [
    {
      icon: HiMail,
      href: 'mailto:nicholas.mcguffin.developer@gmail.com',
      color: 'hover:text-red-600',
      ariaLabel: 'Send email'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/nicholas-mcguffin/',
      color: 'hover:text-blue-700',
      ariaLabel: 'LinkedIn profile'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/nickmcguffin',
      color: 'hover:text-gray-900',
      ariaLabel: 'GitHub profile'
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect!
          </p>

          <div className="flex justify-center gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Link
                  key={method.href}
                  href={method.href}
                  className={`${method.color} transition-all duration-300 hover:scale-110`}
                  style={{ color: 'var(--text-secondary)' }}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={method.ariaLabel}
                >
                  <IconComponent className="w-8 h-8" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}