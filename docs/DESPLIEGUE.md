# Despliegue institucional

## Producción vigente

- URL: https://historias-ts.pages.dev/
- Hosting: Cloudflare Pages
- Repositorio: `cooperante-TS/historias-ts`
- Rama de producción: `main`

El proyecto es un sitio estático. No necesita instalar dependencias ni ejecutar un build complejo.

## Configuración Cloudflare Pages

- Framework preset: None / Static HTML.
- Build command: vacío o `exit 0` según la configuración del proyecto.
- Output directory: raíz del repositorio (`.`).
- Rama de producción: `main`.

Cloudflare despliega automáticamente los cambios aceptados en `main`.

## Qué comprobar después de un cambio técnico

1. Portada.
2. Selector de los seis países.
3. Navegación anterior/siguiente.
4. Modo embed, por ejemplo `?pais=guatemala&embed=1`.
5. Imágenes y fallback.
6. Móvil y ordenador.
7. Que la web siga mostrando el snapshot si el feed no responde temporalmente.

## Si producción falla

No editar producción manualmente.

1. Restaurar el último commit estable en GitHub.
2. Esperar al redespliegue automático de Cloudflare.
3. Comprobar de nuevo la web.

La antigua versión de Vercel se conserva sólo como rollback temporal y no debe considerarse la producción principal.
