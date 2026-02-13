# MI_API

> API simple para gestionar productos (Proyecto `mi_api`).

## Descripción

Proyecto Node.js/Express que expone endpoints para listar, obtener y crear productos usando un archivo JSON como almacenamiento simple.

## Requisitos

- Node.js >= 16
- npm (o yarn)

## Instalación

1. Clona el repositorio o copia los archivos al directorio de trabajo.
2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` si necesitas configurar variables (opcional). Ejemplo:

```
PORT=3000
NODE_ENV=development
```

## Ejecutar

- En desarrollo (con `nodemon`):

```bash
npm run dev
```

- En producción:

```bash
npm start
```

La aplicación por defecto escucha en `PORT` o 3000.

## Endpoints principales

Las rutas de productos están montadas en `/productos.json`.

- `GET /productos.json` — Obtener todos los productos.
- `GET /productos.json/:id` — Obtener un producto por `id`.
- `POST /productos.json` — Crear un nuevo producto. Enviar JSON con `nombre`, `precio`, `stock` (y `descripcion` opcional).

Ejemplo `POST` body:

```json
{
  "nombre": "Producto A",
  "precio": 12.5,
  "stock": 10,
  "descripcion": "Descripción opcional"
}
```

## Scripts útiles

- `npm run dev` — Ejecuta `nodemon index.js`.
- `npm start` — Ejecuta `node index.js`.

## Estructura principal

- `index.js` — Punto de entrada.
- `src/app.js` — Configuración de Express y rutas.
- `src/routes/productoRoutes.js` — Definición de rutas de productos.
- `src/controllers/productoController.js` — Lógica de controladores.
- `src/services/productoService.js` — Lógica de acceso a datos.

## Notas

- El proyecto utiliza `productos.json` como almacenamiento simple; no es adecuado para producción.
- Para pruebas rápidas, usa `Postman` o `curl`.

Si quieres, puedo ampliar el README con ejemplos de respuesta, documentación de errores o pasos para ejecutar tests.
