# Prompts de mantenimiento

## Cambio pequeño de diseño
Lee `AGENTS.md` y `docs/ARQUITECTURA.md`. Cambia únicamente [detalle]. No alteres datos, rutas, parámetros de URL ni el flujo de Google Sheets. Genera una preview para revisión antes de producción.

## Corregir un error
Lee primero la documentación. Reproduce el problema [descripción], identifica la causa y corrígelo con el cambio mínimo. Comprueba portada, selector de países y modo embed. No publiques directamente.

## Añadir una función
Antes de programar, explica cómo encaja la función [descripción] con la arquitectura estática existente. Mantén el snapshot de seguridad y la compatibilidad con WordPress. Implementa en una rama de prueba y documenta cualquier nuevo archivo o dependencia.

## Actualizar el feed institucional
Actualiza sólo la referencia a la nueva hoja pública institucional y verifica que las seis pestañas siguen cargando. No hagas pública la hoja privada de gestión y no concedas edición pública al feed.
