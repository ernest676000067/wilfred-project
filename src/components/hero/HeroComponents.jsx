'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: "chaussures",
    image: "/1.jpg",
    link: "/shop/chaussures"
  },
  {
    title: "pull overt",
    image: "/2.jpg",
    link: "/shop/pull overt"
  },
  {
    title: "Women's Style",
    image: "/3.jpg",
    link: "/shop/womens"
  },
  {
    title: "chapeau",
    image: "/4.jpg",
    link: "/shop/accessories"
  },
  {
    title: "ceinture",
    image: "/belt.jpg",
    link: "/shop/backpacks"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

export default function HeroComponent() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#C7E9C0]"
        >
          New Arrivals
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={itemVariants}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                </motion.div>
              </div>

              <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {category.title}
                </motion.h3>

                {category.title === "Backpack" && (
                  <motion.p 
                    className="text-yellow-300 font-medium mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    Min.40-80% Off
                  </motion.p>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <a 
                    href={category.link}
                    className="inline-flex items-center text-white font-medium hover:text-yellow-300 transition-colors"
                  >
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}