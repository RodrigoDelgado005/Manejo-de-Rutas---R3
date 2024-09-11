// Importamos las librerias necesarias
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Definimos el componente DetallesTareas que recibe las tareas como prop
const DetallesTareas = ({ tareas }) => {
  const { id } = useParams();

  // Buscara la tarea con el id proporcionado en los parámetros de la URL
  const tarea = tareas.find((t) => t.id === parseInt(id));

  // Si no se encuentra la tarea, muestra un mensaje de error
  if (!tarea) return <div>Tarea no encontrada</div>;

  // Mostrara por pantalla la tarea correspondiente con todos los detalles.
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{tarea.title}</h2>
      <p className="text-gray-700 mb-4">{tarea.description}</p>
      <p className="text-sm text-gray-500 mb-2">Creada el: {tarea.createdAt}</p>
      <p className="text-sm font-semibold mb-4">
        Estado: {tarea.completed ? 'Completada' : 'Pendiente'}
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver a la lista de tareas
      </Link>
    </div>
  );
};

export default DetallesTareas;
