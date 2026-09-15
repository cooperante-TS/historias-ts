# Prompts sencillos para mantener Historias TS con ChatGPT/Codex

Usar siempre el repositorio institucional `cooperante-TS/historias-ts`.

## Cambio pequeño de diseño

> Trabaja sobre `cooperante-TS/historias-ts`. Lee `README.md`, `AGENTS.md` y `docs/` antes de modificar. Cambia únicamente [DETALLE]. No alteres los datos, las rutas, `?pais=`, `embed=1`, el feed institucional ni el snapshot local. Haz el cambio de forma reversible y comprueba escritorio y móvil.

## Corregir un error

> Trabaja sobre `cooperante-TS/historias-ts`. Lee primero la documentación. El problema es: [DESCRIPCIÓN]. Identifica la causa y corrígela con el cambio mínimo. Comprueba portada, los seis países, anterior/siguiente y `?pais=guatemala&embed=1`. No cambies las hojas institucionales ni sus IDs.

## Añadir una función

> Trabaja sobre `cooperante-TS/historias-ts`. Antes de programar explica brevemente cómo encaja [FUNCIÓN] con la arquitectura estática actual. Mantén el snapshot de seguridad, Google Sheets institucional y la compatibilidad con WordPress. Implementa de forma reversible, comprueba móvil y ordenador y documenta cualquier dependencia nueva.

## Problema con datos que no aparecen

Antes de pedir un cambio de código, comprobar:

- `Estado = PUBLICAR` en la hoja privada;
- país/pestaña correctos;
- feed público institucional accesible;
- recarga con `Ctrl+F5`.

Si sigue fallando, prompt:

> No cambies código todavía. Revisa el flujo de datos de Historias TS entre la hoja privada institucional, el feed público y `assets/app.js`. Identifica dónde deja de aparecer el hito [ID/TÍTULO] y dime qué hay que corregir con el mínimo cambio.

## Regla de seguridad

No pedir nunca que se haga pública la hoja privada ni que se conceda edición pública al feed. No sustituir los IDs institucionales por documentos personales.
