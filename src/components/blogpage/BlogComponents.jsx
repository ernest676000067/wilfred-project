'use client';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Facebook } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BlogComponent() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/yourusername" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/yourusername" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/yourusername" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com/yourusername" }
  ];

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1 
          variants={itemVariants}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          About Me
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative aspect-square w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
               <img src="/p4.jpeg" alt="photo" />

              </div>
            </div>
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl opacity-70"></div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-primary p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <h2 className="text-3xl font-bold mb-4">Hi, I'm <strong>wilfried</strong></h2>
              <p className="text-gray-700 leading-relaxed">
                A passionate developer specializing in modern web technologies. 
                I love creating beautiful, functional websites and applications 
                that deliver exceptional user experiences.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4">Building This Site</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I developed this e-commerce platform using cutting-edge technologies 
                to ensure blazing fast performance and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4">Education & Skills</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I studied Computer Science at [Seven academy] and have mastered 
                various programming languages and frameworks:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <ul className="space-y-1 text-gray-700">
                    {['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'].map((lang) => (
                      <li key={lang} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frameworks</h4>
                  <ul className="space-y-1 text-gray-700">
                    {['React', 'Next.js', 'Node.js', 'Express'].map((frame) => (
                      <li key={frame} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {frame}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}