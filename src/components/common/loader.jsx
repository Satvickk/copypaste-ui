import { motion } from "motion/react";

const Loader = ({ className, ...prop }) => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-white"
      {...prop}
    >
      <motion.div
        className={`w-12 h-12 rounded-full border-4 border-t-[#f79837] border-gray-200 ${className}`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
