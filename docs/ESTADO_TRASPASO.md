# Estado de traspaso institucional

Estado: **COMPLETADO Y OPERATIVO**.

## Situación vigente

- Repositorio institucional operativo: `cooperante-TS/historias-ts`.
- Producción institucional: https://historias-ts.pages.dev/
- Hosting: Cloudflare Pages.
- Hoja de gestión institucional: privada y propiedad de TS.
- Feed institucional: propiedad de TS y lectura pública cuando es necesario para la web.
- Los seis países usan el flujo institucional.
- El código incluye snapshot local de seguridad.
- Manual operativo disponible en `manual.html` y `docs/MANUAL_GESTION.md`.
- Copias de recuperación archivadas en Google Drive institucional.

## Producción anterior

La versión antigua de Vercel se conserva únicamente como rollback temporal. No debe considerarse producción principal ni fuente de verdad.

## Qué queda por hacer

No hay tareas técnicas obligatorias para el funcionamiento cotidiano.

Como mantenimiento preventivo, TS debe:

- mantener privada la hoja de gestión;
- mantener el feed sin edición pública;
- comprobar periódicamente que los seis países cargan;
- no cambiar los IDs institucionales por documentos personales;
- conservar las copias de Drive.

## Criterio de recuperación

Si una modificación rompe la web, restaurar el último commit estable del repositorio institucional y dejar que Cloudflare vuelva a desplegar `main`.
