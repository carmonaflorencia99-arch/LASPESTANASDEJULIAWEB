// Todo el contenido editable de la web vive aquí.
// Para cambiar textos, enlaces o fotos no hace falta tocar los componentes.

export const site = {
  name: 'Las Pestañas de Julia',
  phone: '654 300 669',
  phoneHref: 'tel:+34654300669',
  whatsappHref: 'https://wa.me/34654300669',
  address: ['C/ Conde Salvatierra 8', '46004 Valencia'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=C%2F+Conde+Salvatierra+8%2C+46004+Valencia',

  // TODO: pega el enlace directo a vuestro perfil de Booksy.
  // Mientras esté vacío, el botón «Reservar» lleva al bloque de reserva.
  booksyUrl: '',

  // TODO: horario real del salón (una línea por franja).
  schedule: ['[HORARIO]'],

  // TODO: enlaces a las redes. Las que queden vacías no se muestran.
  social: [
    { label: 'Instagram', href: '' },
    { label: 'Facebook', href: '' },
    { label: 'YouTube', href: '' },
  ],
};

// Fotos. Pon los archivos en /public/images y escribe aquí la ruta.
// Si una foto vale null, se muestra un bloque de color con la descripción.
export const images = {
  hero: { src: '/images/hero.jpg', alt: 'Primer plano de una mirada con extensiones de pestañas de volumen' },
  detalle: { src: '/images/detalle.jpg', alt: 'Aplicación de extensiones de pestañas con pinzas, pelo a pelo' },
  modelo: { src: '/images/modelo.jpg', alt: 'Retrato frontal de una modelo con pestañas, cejas y labios trabajados' },
  julia: { src: null, alt: 'Retrato de Julia en el estudio' },
  salon: { src: null, alt: 'El salón, luz de tarde' },
};

// Servicios: el número coincide con los puntos sobre la foto de la modelo.
// x / y = posición del punto sobre la foto, en % (0–100).
export const services = [
  { n: '01', name: 'Extensiones de pestañas', spot: { x: 33.5, y: 38.5 } },
  { n: '02', name: 'Lifting de pestañas', spot: { x: 66.5, y: 38.5 } },
  { n: '03', name: 'Microblading y microshading', spot: { x: 37, y: 25 } },
  { n: '04', name: 'Laminado, diseño y henna de cejas', spot: { x: 63, y: 25 } },
  { n: '05', name: 'Micropigmentación de labios y ojos', spot: { x: 60, y: 62 } },
  { n: '06', name: 'Manicura, pedicura y depilación', spot: null },
];

// TODO: respuestas reales del salón.
export const faqs = [
  { q: '¿Cuánto duran las extensiones de pestañas?', a: '[RESPUESTA DEL SALÓN]' },
  { q: '¿Qué diferencia hay entre extensiones y lifting?', a: '[RESPUESTA DEL SALÓN]' },
  { q: '¿Cómo me preparo para un microblading?', a: '[RESPUESTA DEL SALÓN]' },
  { q: '¿Puedo cambiar o cancelar mi cita?', a: '[RESPUESTA DEL SALÓN]' },
];

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'La fundadora', href: '#julia' },
  { label: 'Reservar', href: '#reserva' },
  { label: 'Preguntas', href: '#faq' },
];

export const bookingHref = () => site.booksyUrl || '#reserva';
