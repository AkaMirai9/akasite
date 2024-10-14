import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Parallax, Background } from 'react-parallax'
import { Menu, X, Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import './App.css'
import Peaks from './components/peaks';
import HomePng from 'assets/home.png'
import ScanPng from 'assets/scan.png'

const sections = [
  { id: 'home', title: 'Home', icon: Code },
  { id: 'projects', title: 'Projects', icon: Briefcase },
  { id: 'about', title: 'About', icon: User },
  { id: 'contact', title: 'Contact', icon: Mail },
]

const projects = [
  {
    id: 1,
    title: 'Gaia Nature\'s Kitchen',
    description: 'The healthiest full-stack mobile solution with React Native and Go',
    fullDescription: 'This mobile application allows users to track the amount of nutrients in their food every day, while paying attention to their eco-score!',
    images: [HomePng, ScanPng],
    technologies: ['React', 'Go', 'Postgresql'],
    link:'https://github.com/Master-Trolls-of-IT/PLIC-front-mobile'
  },
  {
    id: 2,
    title: 'Ice Berry',
    description: 'A new gen ai powered CRM',
    fullDescription: 'This Customer Relationship Management owned by AMA European Consulting is about to make is own revolution in the world of consulting',
    images: [],
    technologies: ['Angular'],
    link: 'https://ice-berry.com'
  },
]

export default function Component() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const activeSection = sections.find((section, index) => {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
        }
        return false
      })
      if (activeSection) {
        setActiveSection(activeSection.id)
      }
    }

    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-md border-b border-purple-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Tom Frenois
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {sections.map((section) => (
                  <motion.li key={section.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a
                      className={`flex items-center space-x-2 relative group ${
                        activeSection === section.id ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'
                      }`}
                      onClick={(e) => {
                        e.preventDefault(); // Évitez le comportement par défaut
                        handleScroll(section.id); // Appelez la fonction pour faire défiler
                      }}
                    >
                      <section.icon className="w-5 h-5" />
                      <span>{section.title}</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={activeSection === section.id ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <button className="md:hidden relative w-8 h-8" onClick={() => setMenuOpen(!menuOpen)}>
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-purple-400"
                initial={false}
                animate={menuOpen ? { rotate: 180, opacity: 0 } : { rotate: 0, opacity: 1 }}>
                <Menu className="w-6 h-6" />
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-purple-400"
                initial={false}
                animate={menuOpen ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}>
                <X className="w-6 h-6" />
              </motion.span>
            </button>
          </div>
        </div>
        <motion.nav
          className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm"
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <ul className="flex flex-col items-center py-4 space-y-4">
            {sections.map((section) => (
              <motion.li key={section.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${section.id}`}
                  className={`flex items-center space-x-2 ${
                    activeSection === section.id ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  <section.icon className="w-6 h-6" />
                  <span>{section.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </header>

      {menuOpen && (
        <motion.nav
          className="fixed inset-0 z-40 bg-gray-800 bg-opacity-95 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map((section) => (
              <motion.li key={section.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${section.id}`}
                  className={`flex items-center space-x-2 text-2xl ${
                    activeSection === section.id ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  <section.icon className="w-6 h-6" />
                  <span>{section.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}

      <main>
        <Parallax strength={500}>
          <Background>
            <div className="blobs-container">
              <div className="blob blob-1"></div>
              <div className="blob blob-2"></div>
            </div>
          </Background>
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                Web Developer
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Crafting digital experiences with code
              </motion.p>
              <motion.a
                onClick={(e) => {
                  e.preventDefault(); // Évitez le comportement par défaut
                  handleScroll("contact"); // Appelez la fonction pour faire défiler
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Get in touch
              </motion.a>
            </div>
          </section>
        </Parallax>

        <section id="projects" className="min-h-screen pt-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`bg-gray-700 rounded-lg p-6 shadow-lg cursor-pointer ${
                    expandedProject === project.id ? 'col-span-2' : ''
                  }`}
                  onClick={() => toggleProjectExpansion(project.id)}
                  layoutId={`project-${project.id}`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <AnimatePresence>
                    {expandedProject === project.id ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="flex gap-4">
                          <div className="flex-1 flex flex-col justify-between">
                            <p className="text-gray-300 mb-4">{project.fullDescription}</p>
                            <div className="mb-4">
                              <h4 className="text-xl font-semibold mb-2">Technologies used:</h4>
                              <ul className="list-disc list-inside">
                                {project.technologies.map((tech, index) => (
                                  <li key={index}>{tech}</li>
                                ))}
                              </ul>
                            </div>
                            <a
                              href={project.link}
                              className="inline-flex items-center text-purple-400 hover:text-purple-300"
                              onClick={(e) => e.stopPropagation()}>
                              View Project <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </div>
                          <div className="flex-1 flex justify-center items-center gap-2 mb-4">
                            {project.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={200}
                                className="rounded-lg"
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-gray-300">{project.description}</p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Parallax strength={200}>
          <Background>
            <div style={{ width: '110vw' }}>
              <Peaks />
            </div>
          </Background>
          <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                I'm a passionate web developer with expertise in React, Angular, Node.js, and modern web technologies. With a
                keen eye for design and a love for clean code, I create engaging digital experiences that blend form and
                function.
              </p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/AkaMirai9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}>
                  <Github className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tom-frenois/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}>
                  <Linkedin className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="mailto:contact@tom-frenois.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}>
                  <Mail className="w-8 h-8" />
                </motion.a>
              </div>
            </div>
          </section>
        </Parallax>

        <section id="contact" className="min-h-screen py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Send Message
              </motion.button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}