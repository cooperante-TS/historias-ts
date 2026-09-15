# TS Historias por país

Visualizador interactivo de hitos de cooperación de Treball Solidari.

## Producción institucional

- Web: https://historias-ts.pages.dev/
- Hosting: Cloudflare Pages
- Repositorio: `cooperante-TS/historias-ts`
- Rama de producción: `main`
- Tipo: sitio estático

La antigua URL de Vercel se conserva únicamente como rollback temporal. No debe usarse como fuente de verdad.

## Cómo funciona

- `index.html`: aplicación del timeline.
- `assets/data/`: snapshot local de seguridad de los seis países.
- Google Sheets institucional: fuente dinámica de datos.
- Si Google Sheets falla temporalmente, la web sigue mostrando el snapshot local.
- WordPress puede usar la misma web con `?pais=<slug>&embed=1`.
- `manual.html`: manual operativo sencillo para el equipo de TS.
- `docs/`: documentación de gestión, arquitectura y recuperación.

## Países

- `nicaragua`
- `guatemala`
- `el-salvador`
- `burkina-faso`
- `senegal`
- `mali`

## Fuente institucional de datos

Hoja privada de gestión:

`1IPEnxkQ9qJh0GtmTr8j3TVDrUP09Vc5_WSXcJUhu380`

Feed público de sólo lectura:

`1hf3f-CiZBLLPSdHzhOzVkLP6RPykOHHmIj2oqxLFY7E`

Regla: sólo `Estado = PUBLICAR` debe llegar al feed público.

## Para una persona no técnica

La operación habitual se hace desde la hoja de gestión, no desde GitHub:

1. abrir la pestaña del país;
2. crear o editar el hito;
3. mantenerlo en `BORRADOR` mientras se prepara;
4. pasar a `REVISAR` para validación;
5. cambiar a `PUBLICAR` cuando esté aprobado;
6. abrir https://historias-ts.pages.dev/ y comprobar el resultado.

Consultar `docs/MANUAL_GESTION.md` para incidencias y mantenimiento.

## Seguridad de Drive

- La hoja de gestión es privada.
- El feed puede ser públicamente legible para que la web funcione.
- El feed nunca debe tener edición pública.
- No sustituir los IDs institucionales por hojas personales.

## Publicación de cambios de código

Cloudflare Pages está conectado al repositorio institucional. Un cambio aceptado en `main` se despliega automáticamente. No editar producción manualmente.

Para cambios de diseño o funcionamiento, usar ChatGPT/Codex sobre el repositorio institucional, pedir una modificación reversible y comprobar escritorio, móvil y modo embed antes de darla por buena.

## Recuperación

GitHub institucional es la fuente de verdad del código. Drive institucional conserva copias de recuperación. El snapshot local permite que la web siga mostrando contenido si el feed de Google Sheets no responde temporalmente.
