import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audioRef = useRef(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const humpVariants = {
    initial: (direction) => ({
      x: direction === 'left' ? '-100%' : '100%',
    }),
    animate: (direction) => ({
      x: direction === 'left' ? '15%' : '-15%',
      transition: {
        x: { duration: 4, ease: "easeOut" },
      }
    })
  };

  const rotateVariants = {
    rotate: {
      rotate: [-5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "linear",
      }
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}>
      <audio ref={audioRef} loop>
        <source src="https://ia802902.us.archive.org/20/items/ginuwineponylyricsonscreen/Ginuwine-%20Pony%20%28Lyrics%20on%20screen%29.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div className={`h-full w-full relative flex justify-center items-center ${isModalOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className='marquee-sign -mt-[70%] md:-mt-[10%]'>
          <div className='text-center font-bold text-[#FFFACD;] text-[8px] md:text-base'>CA: COMING SOON</div>
          <div className='marquee-text text-6xl md:text-8xl text-center'>HUMPI</div>
        </div>
        <div className='absolute top-5 left-5 flex justify-center items-center z-10'>
          <a href="https://x.com/HUMPISOL" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#FFE70B" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <a href="https://t.me/Humpiportal" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#FFE70B" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
        </div>
        <motion.div
          className="absolute left-0 top-[42%] md:top-1/2 -translate-y-1/2 w-[45%]"
          initial="initial"
          animate="animate"
          variants={humpVariants}
          custom="left"
        >
          <motion.img
            src="/humpl.png"
            alt="Humping dog"
            className="w-full h-full"
            animate="rotate"
            variants={rotateVariants}
          />
        </motion.div>
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] md:w-1/3"
          initial="initial"
          animate="animate"
          variants={humpVariants}
          custom="right"
        >
          <motion.img
            src="/hump.png"
            alt="Humping dog"
            className="w-full h-full"
            animate="rotate"
            variants={rotateVariants}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;