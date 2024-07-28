import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        className="relative flex justify-center"
        animate={shakeAnimation}
      >
        <img src="/caut.png" alt="Caution" className="w-[70%] md:w-[35%] rounded-lg" />
        <button
          onClick={onClose}
          className="absolute text-black bottom-[15%] md:bottom-[17%] left-1/2 transform -translate-x-1/2 px-2 py-1.5 border-2 border-black bg-red-600 w-min h-min flex items-center justify-center text-2xl md:text-[28px] font-bold rounded-lg"
        >
          ENTER
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;