import { motion } from 'framer-motion';
import { Gamepad2, Rocket, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-dilobo-dark/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img src="/logo.png" alt="Dilobo Software Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Dilobo Software
            </span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyectos</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Nosotros</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
