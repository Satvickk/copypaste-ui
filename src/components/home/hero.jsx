import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { sidebarConfig } from "../../data";

const Hero = () => {
      const [isHovered, setIsHovered] = useState(false);
  return (
    
    <section className="lg:max-w-7xl mx-auto grid place-items-center py-20 text-center gap-4">
      <h1 className="text-6xl font-extrabold">CopyPaste UI</h1>
      <p className="text-gray-600">Free Tailwind CSS v4 + Motion Components</p>
      <div className="flex items-center justify-center gap-4">
        <span className="rounded-full px-3 py-1 border border-green-600 text-green-600 text-sm">
          No install
        </span>
        <span className="rounded-full px-3 py-1 border border-blue-600 text-blue-600 text-sm">
          No config
        </span>
        <span className="rounded-full px-3 py-1 border border-amber-600 text-amber-600 text-sm">
          No setup
        </span>
      </div>
      <p className="text-gray-400 max-w-2xl">
        CopyPaste UI is a free collection of Tailwind CSS and Motion components
        for your next project. With a wide range of components, you can build
        quickly by simply copying and pasting—without worrying about the UI/UX.
      </p>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mt-8 group bg-black text-white px-6 py-3 text-xl font-semibold hover:shadow-lg overflow-hidden relative"
      >
        <Link
          to={sidebarConfig[0].link}
          className="no-underline flex justify-center items-center"
        >
          Components
          <span className="relative w-10 h-5 overflow-hidden">
            <AnimatePresence initial={false}>
              {!isHovered ? (
                <motion.span
                  key="default"
                  initial={{ y: 0 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="hovered"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </Link>
      </button>
    </section>
  );
};

export default Hero;
