# Guía de despliegue — smapac.gob.mx (DonWeb/Ferozo)

El portal es una **exportación estática** de Next.js (`output: "export"`): el build
genera HTML/CSS/JS puro en `out/` y se sube por FTP (o el administrador de archivos
de Ferozo) a la **raíz de `public_html`**. No requiere Node en el servidor.

En el mismo `public_html` conviven otras aplicaciones que **no se tocan**:

| Carpeta | Qué es |
|---|---|
| `pagaturecibo/` | Pago en línea (Angular, versión vieja) — el botón de `/pago/` del portal apunta aquí |
| `intranet/` | Intranet (Angular 17, versión nueva) |
| `transparencia-web/` | Archivo legado de transparencia — los PDFs enlazados desde las páginas internas del portal viven aquí |
| `assets/` | Contiene `Formatos/` con los PDF 2026 de trámites (factibilidad, baja temporal, reconexión, robo de medidor) |

---

## 1. Build local

```bash
cd ~/proyectos/smapac-portal
nvm use          # Node 18 (lee .nvmrc)
npm run build    # genera out/
```

Verifica que `out/` contenga al menos: `index.html`, `404.html`, `.htaccess`,
`_next/`, `img/`, `brand/` y una carpeta por ruta (`tramites/`, `modulos/`, etc.).

> El `.htaccess` sale de `public/.htaccess` (versionado en el repo) y el build lo
> copia a `out/` automáticamente. Ojo: es archivo oculto — actívalos en tu cliente
> FTP para verlo.

## 2. Respaldo (solo la primera vez, o ante cambios grandes)

Antes de borrar nada: en el administrador de archivos de Ferozo, **comprimir
`public_html` completo en un zip** y descargarlo (o bajar copia por FTP).

## 3. Limpieza de la raíz — qué se conserva y qué se borra

**CONSERVAR (no borrar bajo ninguna circunstancia):**

- `pagaturecibo/`
- `intranet/`
- `transparencia-web/`
- `assets/` (por `assets/Formatos/`)
- Carpetas de infraestructura del hosting si existen: `.well-known/`, `cgi-bin/`,
  carpetas de correo/SSL, etc.
- Cualquier carpeta que no reconozcas → **investigar antes de borrar**.

**BORRAR (los archivos del sitio viejo en la raíz):**

- El `index.html`/`index.php` anterior y sus carpetas propias de css/js/imágenes.
- El `.htaccess` viejo de la raíz, si existe (lo reemplaza el nuevo). Revisa antes
  su contenido por si tuviera reglas ajenas al sitio (redirecciones de correo,
  bloqueos, etc.) que haya que preservar.

## 4. Subida (contenido de `out/`, no la carpeta)

Orden recomendado para minimizar la ventana en que el sitio queda a medias:

1. Carpetas de assets: `_next/`, `img/`, `brand/`.
2. Carpetas de rutas: `tramites/`, `modulos/`, `servicios/`, `cultura-del-agua/`,
   `pago/`, `transparencia/`, `aviso-de-privacidad/`, `404/`.
3. Archivos sueltos: `404.html`, `favicon.png`, `index.txt`.
4. **Al final**: `index.html` y `.htaccess` (el sitio "cambia" hasta este paso).

## 5. Cloudflare

El dominio está detrás de Cloudflare: después de subir, **purgar la caché**
(Caching → Purge Everything) o los visitantes seguirán viendo el sitio viejo.

## 6. Verificación post-despliegue

- [ ] Home carga con la identidad nueva.
- [ ] Navegar a `/tramites/` desde el menú **y** entrar directo por URL + refrescar
      (valida que Apache sirve las carpetas).
- [ ] Descargar un formato PDF desde Trámites (valida `assets/Formatos/`).
- [ ] `/transparencia/informacion-financiera/` → abrir un ejercicio y un PDF
      (valida `transparencia-web/`).
- [ ] `/pago/` → el botón lleva a `pagaturecibo` y la app vieja funciona.
- [ ] `smapac.gob.mx/intranet` sigue funcionando.
- [ ] URL inventada (`/no-existe/`) muestra la página 404 del portal.
- [ ] Videos de `/cultura-del-agua/` y mapas de `/modulos/` cargan.

Si algo devuelve **500 Internal Server Error**, el sospechoso es el `.htaccess`:
prueba quitando la línea `Options -Indexes` (algunos hostings no permiten
`Options` en `.htaccess`); si persiste, retira el bloque `<If ...>` de cache.

## 7. Despliegues posteriores (actualizaciones)

1. `npm run build` de nuevo.
2. Subir el contenido de `out/` sobrescribiendo. Los archivos de `_next/` llevan
   hash nuevo en cada build, así que los viejos no estorban pero se acumulan:
   de vez en cuando conviene **borrar `_next/` del servidor antes de subir** la
   versión nueva (borrar solo `_next/`, nada más).
3. Purgar caché de Cloudflare.

## Staging en Netlify

`netlify.toml` ya configura Netlify como entorno de prueba (mismo build, publica
`out/`). Lo que se ve en Netlify es lo mismo que servirá DonWeb; Netlify ignora
el `.htaccess`, así que el 404 personalizado y los headers solo se aprecian en
el hosting real.

## Futuro: SSR en VPS

Cuando se autorice el VPS/Node: quitar `output: "export"` de `next.config.mjs`,
`npm run build && npm start`, y apuntar el DNS al VPS. El `.htaccess` deja de
usarse (lo sustituye la config del proxy/servidor Node).
