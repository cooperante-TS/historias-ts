# Historias TS — manual de gestión para personal no técnico

Esta guía explica el trabajo habitual sin necesidad de usar código.

## 1. Publicar o corregir un hito

La gestión normal se hace en la hoja institucional de Google Sheets.

1. Abre la hoja privada de gestión institucional.
2. Entra en la pestaña del país correspondiente.
3. Busca el hito que quieras corregir o crea una fila nueva.
4. Si es nuevo, usa un ID que no exista ya.
5. Completa fecha, tipo, título, resumen, imagen, fuente y los demás campos necesarios.
6. Mientras trabajas, deja `Estado = BORRADOR`.
7. Cuando esté listo para revisar, cambia a `REVISAR`.
8. Sólo después de validarlo, cambia a `PUBLICAR`.
9. Abre https://historias-ts.pages.dev/ y comprueba el país correspondiente.

## 2. Si el cambio no aparece en la web

Comprueba, por este orden:

1. que el hito tenga `Estado = PUBLICAR`;
2. que estás editando la hoja institucional correcta;
3. que el feed público sigue mostrando datos del país;
4. recarga la web con `Ctrl+F5`;
5. espera unos minutos y vuelve a comprobar.

Si el resto de hitos sí aparece pero uno concreto no, revisa esa fila antes de tocar la web o GitHub.

## 3. Imágenes

- Usa imágenes que TS tenga derecho a publicar.
- Usa una URL estable.
- Si sólo falla una imagen, cambia la URL de esa imagen; no modifiques el código de la web.

## 4. Qué no hacer

- No editar manualmente el feed público.
- No reutilizar un ID existente para otro hito.
- No hacer pública la hoja privada de gestión.
- No conceder edición pública al feed.
- No cambiar los IDs institucionales por hojas personales.
- No editar archivos del repositorio si sólo quieres cambiar contenido de un hito.

## 5. Cambiar diseño o funcionamiento

Para cambios de diseño, navegación o comportamiento, usar ChatGPT/Codex con acceso al repositorio institucional.

Prompt recomendado:

> Trabaja sobre `cooperante-TS/historias-ts`. Lee primero `README.md`, `AGENTS.md` y `docs/`. Quiero este cambio: [DESCRIBIR]. Mantén las seis rutas de país, el modo `embed=1`, el snapshot local de seguridad y la conexión con el feed institucional. Haz el cambio de forma reversible y comprueba escritorio y móvil antes de darlo por terminado.

## 6. Qué comprobar después de un cambio técnico

- La portada carga.
- Se puede cambiar entre los seis países.
- Anterior/siguiente funciona.
- Las imágenes fallidas muestran fallback.
- `?pais=guatemala&embed=1` funciona.
- La web sigue mostrando el snapshot aunque el feed falle temporalmente.

## 7. Si una modificación rompe la web

No intentes arreglar producción directamente.

1. Identifica el último cambio realizado.
2. Restaura el último commit estable en GitHub.
3. Cloudflare Pages desplegará de nuevo la versión estable automáticamente.
4. Comprueba la web otra vez.

## 8. Dónde está cada cosa

- Web: https://historias-ts.pages.dev/
- Código: `cooperante-TS/historias-ts`.
- Hoja privada de gestión: `1IPEnxkQ9qJh0GtmTr8j3TVDrUP09Vc5_WSXcJUhu380`.
- Feed público: `1hf3f-CiZBLLPSdHzhOzVkLP6RPykOHHmIj2oqxLFY7E`.
- Copias de seguridad: carpeta `Historias TS` de `TRASPASO DIGITAL TS — INSTITUCIONAL` en Google Drive.

## 9. Comprobación mensual recomendada

Una vez al mes, abrir la web, probar dos o tres países, comprobar una imagen y revisar que el feed siga siendo sólo de lectura pública. Si todo funciona, no tocar nada.
