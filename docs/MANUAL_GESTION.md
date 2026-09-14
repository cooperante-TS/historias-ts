# Manual de gestión

## Añadir un hito sin tocar código

1. Abrir la hoja institucional de gestión de timelines.
2. Entrar en la pestaña del país.
3. Crear una fila nueva con un ID único.
4. Completar fecha, tipo, título, resumen, imagen, fuente y demás campos.
5. Mantener `BORRADOR` mientras se prepara.
6. Pasar a `REVISAR` cuando esté listo para validación.
7. Cambiar a `PUBLICAR` sólo después de validar el contenido.
8. Abrir la web y comprobar el país correspondiente.

## Imágenes

Usar imágenes que TS tenga derecho a publicar. Para nuevas altas, preferir almacenamiento institucional estable y permisos de sólo lectura pública cuando sea imprescindible que la web cargue el archivo directamente.

## Qué no editar

- No editar manualmente el feed público.
- No reutilizar un ID de hito existente.
- No hacer público el documento privado de gestión.
- No conceder edición pública al feed.

## Modificar diseño o funcionamiento con ChatGPT/Codex

Dar acceso al repositorio institucional y utilizar un encargo como:

> Lee `AGENTS.md` y la documentación de `docs/` antes de modificar nada. Quiero realizar el siguiente cambio: [describir cambio]. Mantén las rutas públicas, el modo embed, el snapshot de seguridad y el diseño responsive. Trabaja en una preview o rama de prueba y explícame qué has cambiado antes de publicar.

## Comprobación mínima antes de publicar código

- La portada carga.
- Se puede cambiar de país.
- Anterior/siguiente funciona.
- Las imágenes fallidas muestran fallback.
- `?pais=guatemala&embed=1` funciona sin cabecera de administración.
- La web sigue mostrando el snapshot aunque el feed no responda.
