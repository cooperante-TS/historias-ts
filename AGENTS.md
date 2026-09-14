# AGENTS.md — TS Historias por país

## Propósito
Este repositorio contiene el visualizador público de hitos de cooperación de Treball Solidari por país.

## Reglas obligatorias para asistentes de IA
1. Leer este archivo y `docs/ARQUITECTURA.md` antes de modificar código.
2. Mantener la aplicación como sitio estático sin backend salvo autorización explícita de TS.
3. Conservar las rutas y parámetros públicos existentes: `?pais=<slug>` y `&embed=1`.
4. No modificar ni eliminar hitos del snapshot salvo que TS lo pida expresamente y se haya actualizado también la fuente de datos.
5. No incluir información reservada, credenciales, tokens ni datos internos en archivos públicos.
6. No convertir el feed público en editable por cualquiera. Sólo debe ser públicamente legible.
7. Mantener accesibilidad, navegación por teclado, responsive y `prefers-reduced-motion`.
8. Antes de publicar: validar HTML/JavaScript, comprobar al menos un país, modo embed y fallback sin Google Sheets.
9. Trabajar mediante rama/preview cuando el repositorio institucional lo permita. No publicar directamente en producción salvo instrucción explícita.
10. Si se cambia la hoja de feed, actualizar `SHEET_ID` en `index.html` y documentar el cambio.

## Arquitectura que no debe romperse
- `index.html`: aplicación completa y snapshot seguro.
- Google Sheets público: mejora de sincronización en tiempo real.
- Si Google Sheets falla, el snapshot debe seguir mostrando contenido.
- WordPress incrusta la misma web mediante iframe.

## Países actuales
`nicaragua`, `guatemala`, `el-salvador`, `burkina-faso`, `senegal`, `mali`.

## Criterio de cambio seguro
Un cambio es aceptable si la web sigue funcionando con y sin acceso temporal al feed de Google Sheets y si los enlaces existentes de WordPress continúan siendo válidos.
