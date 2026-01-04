export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Dilobo Software
            </span>
            <p className="text-slate-500 text-sm mt-2">
              Creado con pasión desde Argentina 🇦🇷
            </p>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
