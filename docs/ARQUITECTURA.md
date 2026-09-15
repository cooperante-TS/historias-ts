# Arquitectura actual de Historias TS

## Flujo funcional

Hoja privada de gestión → filtro `Estado = PUBLICAR` → feed público institucional → visualizador web → iframe WordPress cuando se usa modo embed.

La web incorpora además un snapshot local de seguridad por país. El snapshot se muestra primero y la sincronización con Google Sheets se realiza después. Así, una caída temporal de Sheets no deja el timeline vacío.

## Componentes

- `index.html`: estructura de la aplicación.
- `assets/style.css`: estilos.
- `assets/app.js`: lógica, conexión con el feed y navegación.
- `assets/data/*.js`: snapshot local de seguridad de los seis países.
- `manual.html`: manual operativo público, sin información reservada.
- `docs/`: documentación técnica y operativa.
- `vercel.json`: archivo heredado conservado sólo por compatibilidad/rollback histórico; producción actual es Cloudflare Pages.

## Producción

- URL: https://historias-ts.pages.dev/
- Hosting: Cloudflare Pages.
- Rama: `main`.
- Repositorio: `cooperante-TS/historias-ts`.

## Fuente de datos

El identificador del feed institucional se encuentra en `assets/app.js`, constante `SHEET_ID`.

Feed actual:

`1hf3f-CiZBLLPSdHzhOzVkLP6RPykOHHmIj2oqxLFY7E`

Cada pestaña pública debe llamarse exactamente:

- Nicaragua
- Guatemala
- El Salvador
- Burkina Faso
- Senegal
- Mali

Hoja privada de gestión:

`1IPEnxkQ9qJh0GtmTr8j3TVDrUP09Vc5_WSXcJUhu380`

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

## Permisos correctos

- Hoja de gestión: privada.
- Feed público: lectura pública, nunca edición pública.

## Dependencias externas

- Google Sheets GViz para sincronización dinámica.
- Google Drive si TS decide alojar imágenes públicas allí.
- Algunas imágenes históricas dependen de CDN/Instagram y conviene sustituirlas progresivamente por recursos estables controlados por TS.

## Sin servidor

No existe backend propio ni servidor de aplicación. Es una web estática desplegada en Cloudflare Pages.
