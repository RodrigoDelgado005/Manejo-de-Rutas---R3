// Importamos las librerias necesarias
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Funcion para almacenar el titulo, la descripcion, el estado de tarea completada y la navegacion de rutas.
const AgregarTarea = ({ addTarea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  // Funcion para el envio del formulario 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTarea = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
      completed,
    };
    addTarea(newTarea);
    navigate('/');
  };

  // Muestra por pantalla el formulario para agregar una nueva tarea 
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-bold">Título:</label>
        <input
          type="text"
          id="title"
          minLength={5}
          value={title}
          placeholder='Ej: Mantenimiento...'
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold">Descripción:</label>
        <textarea
          id="description"
          value={description}
          placeholder='Ej: Se Realizara el Mantenimiento de 20 Computadoras...'
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="mr-2"
          />
          <span>Completada</span>
        </label>
      </div>
      <button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
        Crear Tarea
      </button>
    </form>
  );
};

export default AgregarTarea;