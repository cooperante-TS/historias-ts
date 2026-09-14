# TS Historias por país

Visualizador interactivo de hitos de cooperación de Treball Solidari.

Producción actual durante la transición: https://historias-ts.vercel.app/

## Arquitectura
- `index.html`: aplicación autocontenida y snapshot seguro de los hitos.
- Google Sheets: sincronización dinámica en segundo plano desde el feed público.
- Si Google Sheets falla temporalmente, el visualizador mantiene la copia segura incluida en `index.html`.
- WordPress consume la misma URL usando `?pais=<slug>&embed=1`.
- `manual.html`: manual operativo para el equipo de TS.
- `AGENTS.md`: reglas para ChatGPT/Codex u otros asistentes de programación.
- `docs/`: arquitectura, gestión, despliegue y recuperación.

## Países
- `nicaragua`
- `guatemala`
- `el-salvador`
- `burkina-faso`
- `senegal`
- `mali`

## Regla de publicación
Sólo `Estado = PUBLICAR` debe llegar al feed público.

## Seguridad de Drive
- Hoja de gestión: privada, compartida sólo con las personas que la gestionan.
- Feed público: lectura pública si es necesario para la web; nunca edición pública.

## Handover institucional
El destino es un repositorio propiedad de Treball Solidari y un despliegue Cloudflare Pages de TS. La cuenta personal del responsable saliente no debe formar parte de la arquitectura final.

## Fuente institucional de datos

La web consume el feed público institucional de Treball Solidari:

`1hf3f-CiZBLLPSdHzhOzVkLP6RPykOHHmIj2oqxLFY7E`

La hoja de gestión institucional que alimenta ese feed es:

`1IPEnxkQ9qJh0GtmTr8j3TVDrUP09Vc5_WSXcJUhu380`

No sustituir estos IDs por hojas personales.
