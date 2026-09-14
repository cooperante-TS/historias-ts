# Arquitectura

## Flujo funcional

Hoja privada de gestión → filtro `Estado = PUBLICAR` → hoja pública de feed → visualizador web → iframe WordPress.

La web incorpora además un snapshot de seguridad. El snapshot se renderiza primero y la sincronización de Google Sheets se realiza después. Así, una caída temporal de Sheets no deja el timeline vacío.

## Componentes

- `index.html`: interfaz, estilos, JavaScript y snapshot.
- `manual.html`: manual operativo público, sin información reservada.
- `vercel.json`: compatibilidad con el alojamiento Vercel durante la transición.
- `docs/`: documentación técnica y operativa.

## Fuente de datos

El identificador del feed se encuentra en `index.html`, constante `SHEET_ID`.

Cada pestaña pública debe llamarse exactamente como espera `COUNTRIES`: Nicaragua, Guatemala, El Salvador, Burkina Faso, Senegal y Mali.

## Contrato de columnas del feed

1. ID
2. Fecha inicio
3. Fecha fin
4. Fecha visible
5. Tipo
6. Título
7. Resumen
8. Imagen URL
9. Pie de imagen
10. Texto alternativo
11. Fuente URL
12. Fuente texto
13. Destacado
14. Fecha actualización

## Dependencias externas

- Google Sheets GViz para sincronización.
- Google Drive para imágenes nuevas cuando TS las aloje allí.
- Algunas imágenes históricas siguen dependiendo de CDN/Instagram y deben sustituirse progresivamente por recursos estables de TS.

## Sin servidor

No existe base de datos propia, API privada ni servidor de aplicación. La web puede desplegarse como contenido estático en Cloudflare Pages.
