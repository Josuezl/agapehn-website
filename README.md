# Ministerio Internacional Ágape — Sitio Web

Sitio web oficial del Ministerio Internacional Ágape, construido con Next.js 14, TypeScript y Tailwind CSS.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts**: Plus Jakarta Sans + Inter
- **next/image** para optimización de imágenes

## Estructura del proyecto

```
agapehn/
├── app/
│   ├── layout.tsx          # Layout raíz (Navbar + Footer + fuentes)
│   ├── globals.css         # Estilos globales + utilidades Tailwind
│   ├── page.tsx            # Homepage
│   ├── nosotros/           # Historia, pastores, doctrinas
│   ├── visita/             # Horarios, qué esperar, formulario visita
│   ├── mensajes/           # Biblioteca de sermones
│   ├── ministerios/        # Todos los ministerios
│   ├── iglesias/           # REMA — Red Ministerial Ágape
│   └── contacto/           # Formulario de contacto
├── components/
│   ├── Navbar.tsx          # Navegación responsive con scroll effect
│   ├── Footer.tsx          # Footer con 4 columnas
│   └── Logo.tsx            # SVG logo Ágape (reemplazable)
├── public/                 # Assets estáticos (logo.svg, etc.)
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

### Opción 1 — CLI de Vercel
```bash
npm install -g vercel
vercel
```

### Opción 2 — GitHub + Vercel
1. Subir el proyecto a GitHub
2. Importar el repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta Next.js automáticamente
4. Deploy automático en cada push a `main`

## Personalización

### Reemplazar el logo
1. Exportar el logo oficial como `logo.svg`
2. Colocarlo en `/public/logo.svg`
3. Actualizar `components/Logo.tsx` para usar `<Image src="/logo.svg" />`

### Cambiar imágenes de hero
Las imágenes actuales son placeholders de Unsplash. Reemplazar en cada `page.tsx`:
```tsx
<Image src="https://images.unsplash.com/..." />
// → 
<Image src="/images/hero-nombre.jpg" />
```

### Colores de marca
Definidos en `tailwind.config.ts`:
- `navy`: #2a3d68 (azul oscuro principal)
- `navy-dark`: #1a2744
- `teal`: #00bcd4 (turquesa acento)
- `teal-light`: #b8e8e8

### Videos de fondo
Para agregar video en el hero, reemplazar el `<Image>` del hero con:
```tsx
<video
  autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con hero, horarios, ministerios, REMA, salvación |
| `/nosotros` | Historia, pastores, visión, doctrinas |
| `/visita` | Horarios, qué esperar, FAQ, formulario visita |
| `/mensajes` | Sermones recientes, series, Ágape Ora |
| `/ministerios` | Todos los ministerios detallados |
| `/iglesias` | REMA — todas las iglesias con pastores |
| `/contacto` | Formulario, redes sociales, ubicación |

## Comandos

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servir build de producción
npm run lint     # Linting con ESLint
```

---

**Ministerio Internacional Ágape** — En esta casa, cabemos todos.  
*Dios es bueno. Dios es fiel.*
