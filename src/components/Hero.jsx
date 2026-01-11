import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-8">
            Desarrollo de Software Indie
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Creando universos <br />
            <span className="gradient-text">una línea de código a la vez</span>
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Dilobo Software es un estudio unipersonal dedicado a crear experiencias digitales únicas, juegos inmersivos y aplicaciones móviles.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity">
              Ver Proyectos
            </a>
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
