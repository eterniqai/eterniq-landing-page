import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Database, Monitor, Braces } from "lucide-react";

export default function Hero3DGraphic() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 perspective-1000">
      {/* Main 3D Container */}
      <div className="relative w-full h-full transform-style-3d">
        
        {/* Central Core - Rotating Cube */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 transform-style-3d"
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 15, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Cube Faces */}
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[hsl(var(--neon-pink))] to-[hsl(var(--electric-cyan))] rounded-lg border-2 border-white/20 flex items-center justify-center transform translate-z-16">
            <Code2 className="w-12 h-12 text-white" />
          </div>
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[hsl(var(--electric-cyan))] to-[hsl(var(--lime-green))] rounded-lg border-2 border-white/20 flex items-center justify-center transform rotate-y-90 translate-z-16">
            <Cpu className="w-12 h-12 text-white" />
          </div>
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[hsl(var(--lime-green))] to-[hsl(var(--vibrant-orange))] rounded-lg border-2 border-white/20 flex items-center justify-center transform rotate-y-180 translate-z-16">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[hsl(var(--vibrant-orange))] to-[hsl(var(--royal-purple))] rounded-lg border-2 border-white/20 flex items-center justify-center transform rotate-y-270 translate-z-16">
            <Database className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-16 left-20 w-16 h-16 bg-gradient-to-r from-[hsl(var(--neon-pink))] to-[hsl(var(--electric-cyan))] rounded-full flex items-center justify-center border border-white/30"
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 180, 360]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Monitor className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-24 right-16 w-20 h-20 bg-gradient-to-r from-[hsl(var(--lime-green))] to-[hsl(var(--vibrant-orange))] rounded-lg flex items-center justify-center border border-white/30"
          animate={{ 
            y: [0, 15, 0],
            rotateX: [0, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Braces className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-r from-[hsl(var(--royal-purple))] to-[hsl(var(--neon-pink))] rounded-full flex items-center justify-center border border-white/30"
          animate={{ 
            x: [0, 30, -15, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-6 bg-white rounded-full opacity-80" />
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-24 w-14 h-14 bg-gradient-to-r from-[hsl(var(--electric-cyan))] to-[hsl(var(--lime-green))] rounded-lg flex items-center justify-center border border-white/30"
          animate={{ 
            y: [0, -25, 0],
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-8 border-2 border-white rounded-full" />
        </motion.div>

        {/* Orbiting Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-[hsl(var(--electric-cyan))]/30 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[hsl(var(--electric-cyan))] rounded-full neon-glow" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-2 border-[hsl(var(--lime-green))]/40 rounded-full"
          animate={{ rotate: [360, 0] }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[hsl(var(--lime-green))] rounded-full neon-glow" />
        </motion.div>

        {/* Particle Effects */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[hsl(var(--neon-pink))] to-[hsl(var(--electric-cyan))] rounded-full"
            style={{
              top: `${20 + i * 8}%`,
              left: `${10 + i * 10}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Background Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[hsl(var(--primary-blue))]/20 via-[hsl(var(--neon-pink))]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[hsl(var(--electric-cyan))]/15 to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  );
}