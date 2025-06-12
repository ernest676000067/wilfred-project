'use client'

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { Mail, Phone, MapPin, Send } from 'lucide-react';


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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ContactComponent() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-2xl"
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name" 
                    required 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email" 
                    required 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 text-center"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">contact@yourdomain.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700"
            >
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (123) 456-7890</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700"
            >
              <div className="p-3 bg-purple-500/10 rounded-full">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}