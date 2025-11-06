'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  if (windowSize.width === 0) return null;

  const elements = [
    { icon: Sparkles, delay: 0, duration: 8, x: 100, y: -50 },
    { icon: Zap, delay: 1, duration: 10, x: -80, y: 30 },
    { icon: Target, delay: 2, duration: 12, x: 120, y: 80 },
    { icon: Award, delay: 3, duration: 9, x: -100, y: -80 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-purple-500/10"
            initial={{ 
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              rotate: 0,
              scale: 0.5,
            }}
            animate={{
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height
              ],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <Icon size={40} />
          </motion.div>
        );
      })}
      
      {/* Gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;