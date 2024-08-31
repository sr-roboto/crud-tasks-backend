# crud-tasks-backend

Este es un proyecto de backend para una aplicación CRUD de tareas, construido con Node.js, Express y MongoDB.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB (versión 4 o superior)

## Instalación
1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/crud-tasks-backend.git
   cd crud-tasks-backend/server

2. Instala las dependencias:
   ```sh
   npm install
3. Crea un archivo .env en la carpeta server basado en el archivo .env.template:
   ```sh
   cp .env.template .env
5. Configura las variables de entorno en el archivo .env
   
  _ PORT=8080
  _ MONGODB_URI=mongodb://localhost:27017/task_crud
  _ JWT_SECRET=qwerty
  _ FRONTEND_URL=http://localhost:5173

## Uso
1. Inicia el servidor
   ```sh
    npm run dev

3. El servidor estará disponible en http://localhost:8080.

## Endpoints:
1. Autenticación
_ POST /auth/login: Iniciar sesión.
_ POST /auth/register: Registrar un nuevo usuario.
2. Tareas
_ POST /tasks: Crear una nueva tarea.
_ GET /tasks: Obtener todas las tareas.
_ GET /tasks/:id: Obtener una tarea por ID.
_ PUT /tasks/:id: Actualizar una tarea por ID.
_ DELETE /tasks/:id: Eliminar una tarea por ID.
