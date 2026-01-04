import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyLovecraft() {
  return (
    <div className="min-h-screen bg-dilobo-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-2">Política de Privacidad</h1>
          <h2 className="text-xl text-cyan-400 mb-6">Universo Lovecraft</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-6">
              <strong>Última actualización:</strong> 3 de Enero de 2026
            </p>

            <p className="text-slate-300 mb-6">
              Esta política de privacidad describe cómo <strong>Dilobo Software</strong> maneja la información en la aplicación "Universo Lovecraft".
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Recopilación y Uso de Datos</h3>
            <p className="text-slate-300 mb-4">
              La aplicación "Universo Lovecraft" no recopila, almacena ni comparte ningún dato personal de los usuarios. La aplicación funciona de manera local en el dispositivo. No utilizamos servidores externos para procesar información del usuario.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Permisos</h3>
            <p className="text-slate-300 mb-4">
              La aplicación puede solicitar permisos básicos necesarios para su funcionamiento técnico (como acceso a almacenamiento si fuera necesario para guardar preferencias locales), pero estos no se utilizan para recopilar información personal identificable.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Publicidad</h3>
            <p className="text-slate-300 mb-4">
              Actualmente la aplicación no contiene anuncios de terceros ni rastreadores de actividad.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Contacto</h3>
            <p className="text-slate-300">
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de la página de la tienda de aplicaciones o mediante el soporte de desarrollador en Google Play.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          &copy; 2026 Dilobo Software.
        </div>
      </div>
    </div>
  );
}
