import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyScreenPets() {
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
          <h2 className="text-xl text-cyan-400 mb-6">ScreenPets (Pets)</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-6">
              <strong>Última actualización:</strong> 29 de Marzo de 2026
            </p>

            <p className="text-slate-300 mb-6">
              Esta política de privacidad describe cómo <strong>Dilobo Software</strong> maneja la información en la aplicación "ScreenPets" (también conocida internamente como "Pets").
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Permiso de Superposición (System Alert Window)</h3>
            <p className="text-slate-300 mb-4">
              La aplicación solicita el permiso especial de Android "Mostrar sobre otras aplicaciones" (<code>SYSTEM_ALERT_WINDOW</code>). Este permiso es estrictamente necesario para la funcionalidad principal de la aplicación, permitiendo que la mascota virtual se dibuje y camine sobre la pantalla de tu dispositivo mientras utilizas otras aplicaciones. <strong>Este permiso no se utiliza para grabar la pantalla, leer lo que escribes, ni espiar tus actividades en otras aplicaciones.</strong>
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Almacenamiento Local</h3>
            <p className="text-slate-300 mb-4">
              Todos tus datos de progreso, configuraciones, estadísticas de las mascotas y preferencias se almacenan <strong>exclusivamente de forma local</strong> en tu dispositivo. Dilobo Software no transmite, sincroniza ni almacena estos datos personales en servidores externos.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Analíticas e Información de Uso</h3>
            <p className="text-slate-300 mb-4">
              Para mejorar la experiencia del usuario y corregir errores, la aplicación puede utilizar servicios de analíticas de terceros (como Firebase Analytics). Estos servicios pueden recopilar datos anónimos de uso, reportes de fallos (crashes), y características generales del dispositivo (como modelo y versión del sistema operativo). Esta información no está vinculada a tu identidad personal y se utiliza únicamente con fines estadísticos y de mantenimiento de la aplicación.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Publicidad</h3>
            <p className="text-slate-300 mb-4">
              Actualmente la aplicación no contiene anuncios de terceros.
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
