# Las Pestañas de Julia · Web

Web de una sola página para **Las Pestañas de Julia**, dentro del rebranding de la marca. Usa la paleta de los sellos (terracota, salvia, rosa viejo, dorado, beige y crema). La dirección visual se inspira en ever.co.id.

## Tecnología

| Qué | Para qué |
|---|---|
| [Vite](https://vite.dev) + [React 19](https://react.dev) | Proyecto y componentes |
| [GSAP](https://gsap.com) + ScrollTrigger + SplitText | Animaciones de entrada y animaciones ligadas al scroll |
| [@gsap/react](https://gsap.com/resources/React) (`useGSAP`) | Limpieza automática de animaciones en React |
| [Lenis](https://lenis.darkroom.engineering) | Scroll suave |
| Google Fonts: Cormorant Garamond + Jost | Tipografía |

Todo GSAP, SplitText incluido, es gratuito también para uso comercial.

## Puesta en marcha

Necesitas [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # versión final en /dist
npm run preview   # previsualiza /dist
```

## Publicar en Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com](https://vercel.com), elige **Add New → Project** e importa el repositorio.
3. Vercel detecta Vite solo: build `npm run build`, salida `dist`. Pulsa **Deploy**.
4. En **Settings → Domains**, conecta `laspestanasdejulia.com` cuando quieras sustituir la web actual.

## Dónde se cambia cada cosa

Casi todo el contenido está en **`src/data/site.js`**:

- **Teléfono, WhatsApp y dirección**
- **`booksyUrl`**: el enlace al perfil de Booksy (todos los botones «Reservar» llevan ahí)
- **`schedule`**: el horario
- **`social`**: Instagram, Facebook y YouTube. Las redes sin enlace no se muestran.
- **`images`**: las fotos. Ponlas en `public/images/` y escribe aquí la ruta. Si una foto vale `null`, se ve un bloque de color con la descripción de la foto que falta.
- **`serviceGroups`**: los servicios por categoría, con descripción, tipos, duraciones y cuidados (se ven como fichas desplegables)
- **`spots`**: qué servicios marcan los puntos sobre la foto de la modelo y su posición (`x`, `y` en %)
- **`faqs`**: las preguntas frecuentes

Los colores y la tipografía son variables CSS al principio de **`src/styles/global.css`**.

## Pendiente antes de publicar

- [ ] Enlaces a redes sociales
- [ ] Foto de Julia (`public/images/julia.jpg`, retrato vertical) y del salón (`public/images/salon.jpg`, horizontal)
- [ ] Páginas legales (privacidad, cookies) y enlazarlas en `Footer.jsx`
- [ ] Si se instala analítica (Google Analytics, píxeles…), añadir un banner de cookies

## Estructura

```
src/
  App.jsx               Montaje de la página y del scroll suave
  data/site.js          Contenido editable
  lib/                  GSAP, scroll y estado de «listo»
  components/
    Preloader.jsx       Pantalla de carga (pestañas que se dibujan)
    Header.jsx, Menu.jsx
    Hero.jsx            Foto a pantalla completa y titular que se desenfoca al bajar
    Quote.jsx           Cita fijada que se ilumina palabra a palabra
    Arte.jsx            Titular por líneas y foto que se descubre
    ServiceSpots.jsx    Cinta infinita y foto con puntos de servicio
    Services.jsx        Servicios por categoría, con fichas desplegables
    Julia.jsx           La fundadora (parallax)
    Reserva.jsx         Bloque de reserva
    Faq.jsx             Preguntas frecuentes (acordeón accesible)
    Footer.jsx          Sello que gira con el scroll y nombre grande
  styles/global.css
```

## Accesibilidad

- Si el sistema tiene activado «reducir movimiento», la web se muestra sin pantalla de carga, sin scroll suave y sin animaciones.
- Menú y acordeón usables con teclado. Escape cierra el menú.
- Contrastes revisados: el texto claro solo va sobre terracota.
