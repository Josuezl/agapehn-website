# Despliegue al VPS

Agape HN se compila como exportación estática y se publica en:

- Producción: `https://agapehn.org`
- VPS: `45.55.90.164`
- Ruta: `/srv/www/agapehn`
- Usuario de despliegue: `deploy-agape`

El VPS no instala dependencias de Node.js ni compila la aplicación. GitHub
Actions genera `out/`, transfiere un release único y cambia el enlace `current`
de forma atómica. El workflow se ejecuta al publicar en `main`, manualmente y a
los 17 minutos de cada hora para refrescar el contenido obtenido de YouTube.

## GitHub Environment

El Environment `production` requiere estos secretos:

| Secreto | Valor esperado |
| --- | --- |
| `VPS_HOST` | `45.55.90.164` |
| `VPS_PORT` | `22` |
| `VPS_USER` | `deploy-agape` |
| `VPS_SSH_KEY` | Llave privada Ed25519 exclusiva de este repositorio |
| `VPS_KNOWN_HOSTS` | Línea Ed25519 verificada del host VPS |
| `DEPLOY_PATH` | `/srv/www/agapehn` |

La llave privada no debe provenir de una llave personal ni imprimirse en logs.
El usuario `deploy-agape` no tiene sudo y no puede modificar otros sitios.

## Estructura de releases

```text
/srv/www/agapehn/
├── current -> releases/<sha>-<run-id>-<attempt>
├── releases/
└── shared/
```

El workflow conserva todos los releases y reporta los que quedan fuera de los
cinco más recientes. No los elimina automáticamente.

## Verificación

Antes de cambiar DNS, comprobar el virtual host dentro del VPS:

```bash
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/ >/dev/null
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/mensajes/ >/dev/null
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/og-image.jpg >/dev/null
```

Después del corte:

```bash
curl -fsS https://agapehn.org/ >/dev/null
curl -fsS https://www.agapehn.org/ >/dev/null
```

## Rollback

Para volver a un release sano, inspeccionar los directorios por fecha y cambiar
el enlace de forma atómica como `deploy-agape`:

```bash
cd /srv/www/agapehn
find releases -mindepth 1 -maxdepth 1 -type d -printf '%T@ %f\n' | sort -nr
ln -sfn 'releases/RELEASE_ID' current.rollback
mv -Tf current.rollback current
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/ >/dev/null
```

Durante el corte DNS, el rollback principal es restaurar los valores de Vercel
registrados antes de la migración. Vercel debe mantenerse disponible hasta que
HTTPS, la navegación externa y al menos una ejecución programada hayan pasado.

## DNS y HTTPS

El apex y `www` deben apuntar a `45.55.90.164` únicamente después de validar
HTTP por IP. Tras la propagación, emitir el certificado para ambos nombres con
Certbot, comprobar `nginx -t` y ejecutar `certbot renew --dry-run`.

## Formulario de contacto

La migración no cambia el formulario actual. Este muestra confirmación en el
navegador, pero todavía no envía datos a un backend ni a un correo electrónico.
