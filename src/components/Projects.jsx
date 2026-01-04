import { motion } from 'framer-motion';
import { ExternalLink, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Universo Lovecraft",
    description: "Explora los horrores cósmicos y la mitología de H.P. Lovecraft. Una guía completa para los amantes del terror cósmico.",
    tags: ["Ionic", "Android", "Play Store"],
    link: "https://play.google.com/store/apps/details?id=lovecraft.ionic&hl=es_AR",
    status: "Disponible",
    color: "from-purple-500 to-indigo-600",
    hasPrivacy: true
  },
  {
    title: "Trucazo",
    description: "El juego de cartas más popular de Argentina, reimaginado. Compite contra la IA o contra amigos en este clásico juego de estrategia y engaño.",
    tags: ["Game Dev", "Multiplayer", "WIP"],
    link: "#",
    status: "En Desarrollo",
    color: "from-amber-500 to-orange-600",
    hasPrivacy: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde aplicaciones informativas hasta juegos competitivos. Aquí es donde la magia sucede.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Disponible' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.status === 'Disponible' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      <Smartphone size={16} />
                      Play Store
                    </a>
                  )}
                  {project.hasPrivacy && (
                    <Link 
                      to="/privacy/universo-lovecraft"
                      className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Shield size={16} />
                      Privacidad
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
