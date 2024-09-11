// Importamos estilos, librerias y componentes necesarios 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaTareas from './pages/ListaTareas';
import DetallesTareas from './pages/DetallesTareas';
import AgregarTarea from './pages/AgregarTarea';
import { tareas as initialTareas } from './datos';


// Estados y Funciones para importar los datos de las tareas, controlar la apertura del menu y agregar nuevas tareas.
function App() {
  const [tareas, setTareas] = useState(initialTareas);
  const [menuOpen, setMenuOpen] = useState(false);

  const addTarea = (newTarea) => {
    setTareas([...tareas, newTarea]);
  };

  // Muestra por Pantalla la barra de navegacion con las rutas correspondientes.
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-indigo-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-200">Gestor de Tareas</Link>
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-white hover:text-indigo-200 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <ul className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-indigo-600 md:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none shadow-md md:shadow-none`}>
                <li><Link to="/" className="text-white hover:text-indigo-200" onClick={() => setMenuOpen(false)}>Lista de Tareas</Link></li>
                <li><Link to="/AgregarTarea" className="block py-2 md:py-0 text-white hover:text-indigo-200" onClick={() => setMenuOpen(false)}>Agregar Tarea</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ListaTareas tareas={tareas} />} />
            <Route path="/tarea/:id" element={<DetallesTareas tareas={tareas} />} />
            <Route path="/AgregarTarea" element={<AgregarTarea addTarea={addTarea} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Gestor de Tareas. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;