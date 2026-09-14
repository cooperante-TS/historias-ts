# Recuperación

## Si la web no carga
1. Comprobar el último despliegue de producción.
2. Probar una versión anterior conocida como estable.
3. Si el error procede de un cambio reciente, revertir el commit o desplegar la revisión anterior.

## Si la web carga pero no se actualizan los datos
1. Confirmar que el feed público existe y es accesible en lectura.
2. Confirmar que las pestañas conservan sus nombres.
3. Confirmar que el hito tiene `Estado = PUBLICAR` en la hoja privada.
4. Confirmar que `SHEET_ID` apunta al feed institucional correcto.
5. Recordar que el snapshot seguirá mostrando la última copia segura aunque falle la sincronización.

## Si una imagen no aparece
1. Comprobar que la URL sigue existiendo.
2. Comprobar que el recurso se puede leer públicamente si la web necesita acceso directo.
3. Sustituir enlaces temporales de CDN/Instagram por recursos estables controlados por TS.

## Restauración completa
El repositorio GitHub institucional es la fuente principal de recuperación del código. La hoja privada institucional es la fuente editorial. No depender de copias personales.
