// Importamos las librerias necesarias
import React from 'react';
import { Link } from 'react-router-dom';

// Definimos el componente ListaTareas que recibe las tareas como prop
const ListaTareas = ({ tareas }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <h1 className="text-2xl font-bold mb-4 col-span-full">Lista de Tareas</h1>
      {/* Lo que hace es Mapear cada tarea y crea un contenedor para cada una */}
      {tareas.map(tarea => (
        <div key={tarea.id} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100">
          <Link to={`/tarea/${tarea.id}`}>
            <h3 className="mb-2 text-xl font-bold">{tarea.title}</h3>
          </Link>
          <p className="text-gray-700">{tarea.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;