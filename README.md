# Descripción del Proyecto

Esta es una aplicación Full Stack para gestionar tareas personales (To-Do List), donde un usuario puede:

- Registrarse
- Iniciar sesión
- Crear tareas
- Listarlas
- Editarlas
- Eliminarlas
- Marcar como completadas o pendientes
- Ver únicamente sus propias tareas

El proyecto utiliza autenticación con JWT, rutas protegidas en frontend y backend, validaciones y un diseño pensado para entorno móvil usando Ionic + Angular.

# Tecnologías utilizadas

## Frontend (Ionic + Angular)

- Ionic 7
- Angular 17
- TypeScript
- HTML / SCSS

## Backend (Node.js)

- Node.js 18+
- Express.js
- JWT (jsonwebtoken)
- Bcrypt (hash de contraseñas)
- MySQL2 (conexión a la base de datos)

## Base de Datos

- MySQL
- Script SQL incluido en /backend/database/schema.sql

# Variables de entorno

Crear un archivo .env dentro de la carpeta backend con:

```ini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=todo_app
PORT=3000
JWT_SECRET=tu_llave_secreta
```

Asegúrate de modificar usuario y contraseña según tu instalación de MySQL.

# Backend ToDo App
🛠️ Inicialización del Backend y Base de Datos

Este proyecto incluye un sistema backend con Node.js y MySQL.
Para ejecutarlo correctamente, debes seguir los pasos en el orden indicado.

## 1. Abrir la consola

Abre tu terminal o CMD favorito.

## 2. Navegar a la carpeta del backend

Desde la raíz del proyecto, entra al directorio:

```bash
cd backend
```

## 3. Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```

## 4. Inicializar la base de datos

El proyecto incluye un script SQL y un comando que crea la base de datos y las tablas necesarias.

Ejecuta:

```bash
npm run db-init
```

Este comando:

Crea la base de datos todo_app

Crea las tablas users y tasks

Asegúrate de tener MySQL iniciado en tu sistema antes de ejecutar este paso.

## 5. Iniciar el servidor backend

Finalmente, levanta el servidor:

```bash
npm run start
```

# Frontend ToDo App

🛠️ Inicialización del Frontend

Este proyecto utiliza Ionic + Angular como framework frontend.
Sigue los siguientes pasos para instalar, configurar y ejecutar la aplicación.

## 1. Abrir la consola

Abre tu terminal o CMD favorito.

## 2. Navegar a la carpeta del backend

Desde la raíz del proyecto, entra al directorio:

```bash
cd frontend
```

## 3. Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```

## 4. Iniciar la aplicación Ionic

Para ejecutar el proyecto en un entorno local: 

```bash
ionic serve
```

## Configuración de API

Si tu proyecto no se conecta al backend, revisa la URL de la API en tu servicio:

```css
src/app/services/to-do-list.ts
```

Y asegúrate de que apunte al servidor correcto:

```ts
private api = 'http://localhost:4000'; // ejemplo
```