# Despliegue

## Destino recomendado
Cloudflare Pages conectado al repositorio GitHub institucional de Treball Solidari.

## Tipo de proyecto
Sitio estático. No requiere instalación de dependencias ni proceso de build.

## Configuración esperada en Cloudflare Pages
- Framework preset: None / Static HTML.
- Build command: vacío.
- Output directory: raíz del repositorio.
- Rama de producción: `main`.

## Flujo recomendado
1. Crear una rama para el cambio.
2. Generar preview.
3. Revisar visualmente escritorio y móvil.
4. Fusionar en `main`.
5. Comprobar producción y WordPress.

## Compatibilidad Vercel
`vercel.json` se conserva durante la transición para que la copia actual pueda seguir funcionando hasta el corte definitivo.
