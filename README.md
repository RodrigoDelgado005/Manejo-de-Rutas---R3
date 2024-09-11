# Manejo-de-Rutas---R3

Para realizar los puntos debemos tener instalado node, npm, react, react router y el Framework Tailwind CSS. Para instalarlo podemos seguir lo siguiente:

Paso 1: Instala Node.js y npm Antes de instalar React, necesitas tener Node.js y npm (Node Package Manager) instalados en tu sistema. Si aún no los has instalado, sigue estos pasos:

Visita la página de descargas de Node.js en: https://nodejs.org/en/download/ Descarga el instalador para tu sistema Windows

Una vez completada la instalación, puedes comprobar que Node.js y npm están instalados abriendo un símbolo del sistema y ejecutando los siguientes comandos: node -v npm -v

Paso 2: Instala Create React App Create React App es una herramienta de línea de comandos que simplifica el proceso de configuración de un nuevo proyecto React con una estructura y configuración de proyecto recomendadas. Para instalar Create React App de forma global, abre un símbolo del sistema y ejecuta el siguiente comando:

npm install -g create-react-app

Este comando instala Create React App en tu sistema, haciendo que esté disponible para su uso en cualquier directorio.

Paso 3: Crea un nuevo proyecto React Ahora que tienes Create React App instalado, puedes utilizarlo para crear un nuevo proyecto React. Para ello, abre un símbolo del sistema, dirígete al directorio en el que quieres que se aloje el proyecto y ejecuta el siguiente comando:

create-react-app my-app Sustituye «my-app» por el nombre que desees para tu proyecto. Create React App creará un nuevo directorio con el nombre especificado y generará un nuevo proyecto React con una estructura y configuración de proyecto recomendadas.

Paso 4: Ve al directorio del proyecto e inicia el servidor de desarrollo Una vez creado el proyecto, dirígete al directorio del proyecto ejecutando el siguiente comando en el símbolo del sistema: cd my-app

Sustituye «my-app» por el nombre del directorio de tu proyecto. 

Paso 5: Instala React Router y Tailwind CSS para el diseño

npm install react-router-dom
yarn add react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Paso 6: Debemos configurar el archivo tailwind.config.js con lo siguiente.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Paso 7: Debemos Actualizar el archivo src/index.css para incluir las directivas de Tailwind

@import 'tailwindcss/base';

@import 'tailwindcss/components';

@import 'tailwindcss/utilities';

Paso 8: Crear la Carpeta Pages en src, con los archivos AgregarTarea, ListaTareas y DetallesTareas

Paso 9: Debemos crear el archivo datos.jsx en src, en el cual estaran las tareas que utilizaremos

Paso 10: Ya teniendo todo esto, ya podemos comenzar con el desarrollo de la aplicacion

Ahora, inicia el servidor de desarrollo ejecutando el siguiente comando: npm start

Este comando inicia el servidor de desarrollo, que vigila los cambios en los archivos de tu proyecto y recarga automáticamente el navegador cuando detecta cambios.

Problema:   

Crear una nueva aplicación de React utilizando Create React App.

Instalar React Router y las dependencias necesarias. 

Crear un archivo de datos para almacenar la lista de tareas y su información. 

Este archivo puede ser un simple array de objetos.

Crear la página de inicio y la página de detalle, utilizando React Router para manejar la navegación entre ellas.

Crear el componente de tarea que se utilizará en la página de inicio y en la página de detalle.

Crear la página de creación y el formulario correspondiente.

Añadir estilos y asegurarse de que la aplicación sea responsive.

Requerimientos:

La aplicación debe tener tres páginas:

Página de inicio: muestra una lista de tareas y un enlace para crear una nueva tarea.

Página de detalle: muestra la información completa de una tarea.

Página de creación: muestra un formulario para crear una nueva tarea.


Debe utilizar el enrutador de React Router para manejar la navegación entre las páginas.
La aplicación debe utilizar el estado de React para almacenar la lista de tareas y la información de cada tarea.
