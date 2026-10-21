// Todo el contenido editable de la web vive aquí.
// Para cambiar textos, enlaces o fotos no hace falta tocar los componentes.

export const site = {
  name: 'Las Pestañas de Julia',
  phone: '654 300 669',
  phoneHref: 'tel:+34654300669',
  whatsappHref: 'https://wa.me/34654300669',
  address: ['C/ Conde Salvatierra 8', '46004 Valencia'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=C%2F+Conde+Salvatierra+8%2C+46004+Valencia',

  booksyUrl: 'https://booksy.com/es-es/189859_las-pestanas-de-julia_otro_58087_valencia',

  schedule: ['Lunes a viernes · 10:30 – 19:30', 'Sábados · 10:00 – 14:30'],

  // Redes. Las que queden vacías no se muestran.
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/laspestanasdejulia/' },
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

// ---------------------------------------------------------------------------
// Servicios (contenido de las páginas de servicio de la web anterior).
// Cada servicio: n (número), name, intro (párrafos), types (opcional),
// facts (duraciones), care (cuidados, opcional), note (opcional).
// ---------------------------------------------------------------------------

const browCare = [
  'No mojar las cejas en 72 horas; después, aplicar aloe vera natural sin colorantes.',
  'No aplicar cremas ni productos grasos hasta que caigan las costras.',
  'No rascar ni arrancar las costras.',
  'Mantener una higiene correcta: lavar con agua y jabón, sin restregar, y secar a toques.',
  'Cuando desaparezcan las costras, puedes aplicar aceite de rosa mosqueta.',
  'En un máximo de 45 días nos vemos para revisar y, si hace falta, repasar.',
];

export const serviceGroups = [
  {
    name: 'Pestañas',
    items: [
      {
        n: '01',
        name: 'Extensiones de pestañas',
        intro: [
          'Sean como sean tus ojos —más redondos, alargados, grandes o pequeños—, analizamos tu rostro y te aconsejamos el efecto y el volumen que mejor se adaptan a tus rasgos y a tu personalidad.',
          'Antes de empezar hacemos una valoración de tus propias pestañas para recomendarte el volumen adecuado y asegurar su bienestar.',
        ],
        types: [
          {
            title: 'Clásicas pelo a pelo',
            text: 'Una extensión sobre cada pestaña natural. La opción perfecta si buscas un resultado muy natural, o un efecto rímel. Distintas longitudes y curvaturas para un diseño a medida.',
          },
          {
            title: '2D',
            text: 'Dos extensiones por cada pestaña natural. Siguen siendo naturales, con un toque de volumen y un efecto más tupido: las preferidas de las amantes del efecto rímel.',
          },
          {
            title: 'Fantasía',
            text: 'Nuestro volumen intermedio, entre las clásicas y el volumen ruso. Aporta profundidad y definición; puedes dar color a parte de tus pestañas o colocar «tips».',
          },
          {
            title: 'Volumen ruso',
            text: 'Las reinas del volumen: de 3 a 8 o 9 extensiones por pestaña (mega volumen), según el grosor de tu pestaña natural.',
          },
        ],
        facts: [
          { label: 'Relleno', value: 'Entre la 3.ª y la 4.ª semana' },
          { label: 'A partir de la 4.ª semana', value: 'Se considera puesta nueva' },
        ],
      },
      {
        n: '02',
        name: 'Lifting de pestañas',
        intro: [
          'Eleva la curvatura de tus pestañas y las alarga desde la raíz. Unas almohadillas de silicona ajustadas al párpado estiran y elevan el pelo hasta su máximo punto, en lugar de doblarlo. Es cómodo, rápido e indoloro.',
          'En el mismo tratamiento aplicamos tinte, que crea un efecto de espesor e intensifica la mirada. Es perfecto para realzar la mirada sin renunciar a la naturalidad; si tus pestañas son muy cortas, te recomendaremos extensiones clásicas efecto natural.',
        ],
        facts: [
          { label: 'Sesión', value: 'Unos 60 minutos' },
          { label: 'Resultado', value: 'Unas 4 semanas, según el ciclo natural del pelo' },
        ],
        care: [
          'No restregar los ojos.',
          'No dormir boca abajo la primera noche.',
          'No mojarlas durante 8 horas.',
          'Puedes usar máscara de pestañas y tu desmaquillante habitual.',
        ],
      },
    ],
  },
  {
    name: 'Cejas',
    items: [
      {
        n: '03',
        name: 'Microblading',
        intro: [
          'Maquillaje semipermanente que dibuja la ceja pelo a pelo con pigmentos naturales, para un resultado muy realista. Se realiza a mano, con una pluma desechable de microagujas que imita el trazado de cada pelo.',
          'Aumenta la densidad de las cejas despobladas, adapta su forma a tu rostro mediante visagismo y te ahorra el maquillaje diario. También permite cambiar el diseño o crear una ceja desde cero en casos de alopecia. El tono se adapta a tu piel, ojos y pelo.',
        ],
        facts: [
          { label: 'Sesión', value: '90 – 120 minutos, con Julia' },
          { label: 'Resultado', value: '8 – 12 meses, según el tipo de piel' },
          { label: 'Repaso', value: 'Entre la 4.ª y la 6.ª semana' },
        ],
        care: browCare,
      },
      {
        n: '04',
        name: 'Microshading',
        intro: [
          'También llamado ombre brows o sombreado. Con una máquina rotativa introducimos micropuntos de pigmento que crean un efecto de ceja maquillada, tan natural o tan intenso como quieras.',
          'A diferencia del microblading, que dibuja «pelitos», el shading crea un acabado de polvo o maquillaje. Las dos técnicas se pueden combinar.',
        ],
        facts: [
          { label: 'Sesión', value: '90 – 120 minutos, con Julia' },
          { label: 'Resultado', value: '8 – 12 meses; cuantas más capas, más duración e intensidad' },
        ],
        care: browCare,
      },
      {
        n: '05',
        name: 'Laminado de cejas',
        intro: [
          'Eleva y redirecciona el pelo de la ceja para dar más densidad y un vello ordenado, de forma semipermanente. Fijamos la forma en dos pasos y terminamos siempre con una hidratación de queratina.',
          'Recomendamos combinarlo con diseño y tinte para reforzar aún más la mirada.',
        ],
        facts: [
          { label: 'Sesión', value: '40 – 60 minutos' },
          { label: 'Resultado', value: '2 – 3 semanas' },
        ],
        care: [
          'No mojarlas las primeras 8 horas.',
          'Pasadas 24 horas, hidratar la zona (crema facial, vaselina o aceite de rosa mosqueta).',
          'Cepillarlas cada día con la forma que quieras.',
        ],
      },
      {
        n: '06',
        name: 'Diseño y tinte de cejas',
        intro: [
          'Estudiamos tus rasgos con visagismo y creamos un diseño único, moldeando la ceja a tu rostro.',
          'Después aplicamos el tinte más adecuado: tu color natural para cubrir canas, más oscuro para intensificar la mirada o más claro para ir a juego con tu cabello. El resultado son cejas más espesas y una mirada más intensa, como si fueras maquillada sin estarlo.',
        ],
      },
      {
        n: '07',
        name: 'Diseño de cejas con henna',
        intro: [
          'Teñimos las cejas con henna natural, que crea un efecto sombreado en la piel. Elegimos el tono según tu pelo y tu piel, dibujamos el diseño con visagismo y rellenamos con henna.',
          'Al usar productos naturales es indoloro y apto para todo el mundo.',
        ],
        facts: [
          { label: 'Sesión', value: 'Unos 45 minutos' },
          { label: 'Resultado', value: 'Alrededor de 1 mes en el pelo y de 7 a 15 días en la piel' },
        ],
        care: [
          'Evitar el sol prolongado las primeras horas.',
          'Evitar piscina y sauna al menos 24 horas.',
          'No usar desmaquillantes con aceite ni pasar jabón sobre las cejas.',
          'No restregar la zona al lavarte la cara.',
        ],
      },
      {
        n: '08',
        name: 'Depilación de cejas con hilo',
        intro: [
          'Antes de depilar estudiamos tus cejas con visagismo —forma del rostro, facciones, línea natural y punto de altura— para encontrar la expresión que más te favorece.',
          'El hilo de algodón orgánico extrae el vello de raíz, hasta el más pequeño. No irrita, es higiénico porque el hilo es desechable, previene arrugas y flacidez y, con el tiempo, debilita el vello.',
        ],
        facts: [
          { label: 'Sesión', value: 'Unos 10 minutos' },
          { label: 'Resultado', value: 'Hasta 4 semanas' },
        ],
      },
    ],
  },
  {
    name: 'Micropigmentación',
    items: [
      {
        n: '09',
        name: 'Micropigmentación de labios',
        intro: [
          'Labios definidos y con color sin necesidad de pintalabios. Corrige asimetrías, despigmentaciones y pequeñas imperfecciones, define los contornos, aporta volumen y tono y da un efecto de labio más jugoso.',
          'Valoramos la forma y el pigmento que mejor van con tu tono de piel; el tono natural de la mucosa también influye en el resultado. No es un tratamiento doloroso.',
        ],
        facts: [
          { label: 'Sesión', value: 'Unas 2 horas' },
          { label: 'Resultado', value: 'Repaso de color entre los 2 y los 5 años' },
        ],
        note: 'Tras la sesión puede aparecer una leve inflamación o enrojecimiento, propios del tratamiento.',
      },
      {
        n: '10',
        name: 'Micropigmentación de ojos',
        intro: [
          'Un delineado en la línea superior del ojo que aporta volumen a las pestañas, luz a la mirada y ayuda a corregir los ojos caídos. Se diseña a medida de los rasgos de cada persona.',
          'Recomendamos marrón oscuro en lugar de negro: no vira a azul o gris y permite adaptar la línea a medida que cambian los rasgos. No se recomienda en pieles extremadamente finas y vascularizadas.',
        ],
        facts: [
          { label: 'Sesión', value: '90 – 120 minutos, solo con Julia' },
          { label: 'Resultado', value: 'Duradero; repaso cada 2 años aprox.' },
        ],
        care: [
          'Aplicar vaselina con un bastoncillo para hidratar.',
          'No arrancar las costras.',
          'Evitar el sol.',
          'Mejor no conducir ni trabajar el mismo día.',
        ],
      },
      {
        n: '11',
        name: 'Micropigmentación de lunares',
        intro: [
          'Recreamos un lunar de forma natural implantando pigmento entre las capas de la epidermis. Julia te asesora sobre el color y la forma que mejor te quedan.',
        ],
        facts: [
          { label: 'Sesión', value: 'Unos 30 minutos, según el número de lunares' },
          { label: 'Resultado', value: 'Unos 12 meses, según el tipo de piel' },
        ],
      },
    ],
  },
  {
    name: 'Depilación y manos',
    items: [
      {
        n: '12',
        name: 'Depilación',
        intro: [
          'Cuidamos la salud de tu piel en cada proceso para conseguir un acabado perfecto sin dañar la dermis.',
        ],
        types: [
          {
            title: 'Con hilo',
            text: 'Técnica natural con hilo de algodón orgánico, apta para pieles sensibles. Elimina de raíz hasta el vello más fino y dura hasta 4 semanas.',
          },
          {
            title: 'Con pinzas',
            text: 'Pelo a pelo, ideal para pequeños retoques en cejas o labio superior.',
          },
          {
            title: 'Láser diodo + alejandrita',
            text: 'Detecta la melanina del folículo sin dañar la piel. Sesiones rápidas (unas piernas enteras en unos 25 minutos) y llevaderas gracias al cabezal refrigerado. Ven rasurada 24 horas antes; las sesiones son cada 5 semanas aprox. y su número depende de cada caso.',
          },
        ],
      },
      {
        n: '13',
        name: 'Manicura y pedicura',
        intro: [
          'Esmaltado semipermanente y tradicional con manicura básica o rusa, baño de gel y decoración de uñas.',
          'Belleza de pies con pedicura premium (peeling, durezas y masaje) y extensiones de uñas de gel o acrygel. Tienes todos los tratamientos y precios en el apartado de precios.',
        ],
      },
    ],
  },
];

export const services = serviceGroups.flatMap((g) => g.items);

// Puntos sobre la foto de la modelo: número de servicio y posición en % (0–100).
export const spots = [
  { n: '01', x: 33.5, y: 38.5 },
  { n: '02', x: 66.5, y: 38.5 },
  { n: '03', x: 37, y: 25 },
  { n: '05', x: 63, y: 25 },
  { n: '09', x: 60, y: 62 },
];

// ---------------------------------------------------------------------------
// Precios (de la página de precios de la web anterior).
// Cada categoría tiene bloques; cada línea: name, price y, si hace falta, note.
// ---------------------------------------------------------------------------
export const priceGroups = [
  {
    id: 'pestanas',
    name: 'Pestañas',
    blocks: [
      {
        title: 'Puesta de extensiones',
        note: 'La sesión dura entre 60 y 90 min',
        items: [
          { name: 'Clásicas (pelo a pelo)', price: '63 €' },
          { name: '2D', price: '73 €' },
          { name: 'Fantasía', price: '73 €' },
          { name: 'Volumen ruso', note: '3D / 4D / 5D', price: '83 €' },
          { name: 'Mega volumen ruso', note: '6D / 8D / 9D', price: '90 €' },
        ],
      },
      {
        title: 'Relleno de extensiones',
        note: 'La sesión dura entre 60 y 90 min',
        items: [
          { name: 'Clásicas (pelo a pelo)', price: '53 €' },
          { name: '2D', price: '58 €' },
          { name: 'Fantasía', price: '58 €' },
          { name: 'Volumen ruso', note: '3D / 4D / 5D', price: '63 €' },
          { name: 'Mega volumen ruso', note: '6D / 8D / 9D', price: '65 €' },
          { name: 'Relleno exprés', note: 'Sesión de 30 min. Máximo a los 20 días de la última sesión', price: '28 €' },
        ],
      },
      {
        title: 'Otros',
        items: [
          { name: 'Light lashes', note: 'Puesta de 40 min', price: '35 €' },
          { name: 'Retirar extensiones', price: '17 €' },
          { name: 'Lifting y tinte de pestañas', price: '47 €' },
          { name: 'Tinte de pestañas', price: '16 €' },
        ],
      },
    ],
  },
  {
    id: 'cejas',
    name: 'Cejas',
    blocks: [
      {
        title: 'Micropigmentación de cejas',
        items: [
          { name: 'Microblading', note: 'Incluye revisión a los 30-45 días', price: '250 €' },
          { name: 'Microshading', note: 'Incluye revisión a los 30-45 días', price: '300 €' },
          { name: 'Ambas técnicas combinadas', note: 'Incluye revisión a los 30-45 días', price: '350 €' },
          { name: 'Repaso de tratamientos', price: 'Consultar' },
        ],
      },
      {
        title: 'Diseño, depilación y laminado',
        items: [
          { name: 'Depilación de cejas con pinzas', price: '14 €' },
          { name: 'Depilación de cejas con hilo', price: '14 €' },
          { name: 'Tinte clásico / henna', price: '16 €' },
          { name: 'Depilación con hilo o pinza + tinte o henna', price: '30 €' },
          { name: 'Laminado de cejas', price: '32 €' },
          { name: 'Laminado de cejas', note: 'Con tinte o depilación', price: '48 €' },
          { name: 'Laminado de cejas completo', note: 'Con tinte y depilación', price: '62 €' },
        ],
      },
    ],
  },
  {
    id: 'micropigmentacion',
    name: 'Micropigmentación',
    blocks: [
      {
        title: 'Micropigmentación',
        note: 'Realizada por Julia',
        items: [
          { name: 'Labios', note: 'Incluye revisión a los 30-45 días', price: '300 €' },
          { name: 'Delineado de ojos', note: 'Incluye revisión a los 30-45 días', price: '300 €' },
          { name: 'Lunares', note: 'Incluye revisión a los 30-45 días', price: 'Desde 50 €' },
        ],
      },
    ],
  },
  {
    id: 'depilacion',
    name: 'Depilación',
    blocks: [
      {
        title: 'Depilación con hilo',
        items: [
          { name: 'Labio superior', price: '7 €' },
          { name: 'Facial', price: '24 €' },
        ],
      },
    ],
  },
  {
    id: 'manos-pies',
    name: 'Manicura y pedicura',
    blocks: [
      {
        title: 'Belleza de manos',
        items: [
          { name: 'Esmaltado semipermanente / tradicional + manicura básica + base de proteína (rubber)', price: '25 €' },
          { name: 'Esmaltado semipermanente / tradicional + manicura básica + francesa + base de proteína (rubber)', price: '27,50 €' },
          { name: 'Esmaltado semipermanente / tradicional + manicura rusa + base de proteína (rubber)', price: '29 €' },
          { name: 'Esmaltado semipermanente / tradicional + manicura rusa + francesa + base de proteína (rubber)', price: '31,50 €' },
          { name: 'Esmaltado baby boomer + manicura básica + base de proteína (rubber)', price: '34 €' },
          { name: 'Esmaltado baby boomer + manicura rusa + base de proteína (rubber)', price: '41 €' },
          { name: 'Baño de gel', price: '38 €' },
          { name: '1 uña de esmaltado semipermanente', price: '2,50 €' },
          { name: 'Decoración básica, 1 uña', price: '1,50 €' },
          { name: 'Decoración premium, 1 uña', price: '2,50 €' },
          { name: 'Retirar esmaltado semipermanente de otros centros', price: '14 €' },
        ],
      },
      {
        title: 'Belleza de pies',
        items: [
          { name: 'Con esmaltado semipermanente / tradicional', note: 'Arreglo de uñas, cutículas y esmaltado', price: '25 €' },
          { name: 'Con esmaltado semipermanente / tradicional en francesa', note: 'Arreglo de uñas, cutículas y esmaltado', price: '27,50 €' },
          { name: 'Con esmaltado semipermanente / tradicional + pedicura premium', note: 'Peeling, durezas y masaje', price: '45 €' },
          { name: 'Con esmaltado en francesa + pedicura premium', note: 'Peeling, durezas y masaje', price: '47,50 €' },
        ],
      },
      {
        title: 'Extensiones de uñas',
        items: [
          { name: 'Uñas nuevas (gel / acrygel) con esmaltado semipermanente', price: '47 €' },
          { name: 'Uñas nuevas con esmaltado semipermanente francesa', price: '49,50 €' },
          { name: 'Uñas nuevas con esmaltado semipermanente, extralargas', price: '57 €' },
          { name: 'Uñas nuevas con esmaltado semipermanente francesa, extralargas', price: '59,50 €' },
          { name: 'Relleno acrygel + esmaltado semipermanente', price: '42 €' },
          { name: 'Relleno acrygel + esmaltado semipermanente francesa', price: '44,50 €' },
          { name: 'Relleno acrygel + esmaltado semipermanente, extralargas', price: '50 €' },
          { name: 'Relleno acrygel + esmaltado semipermanente, extralargas + francesa', price: '52,50 €' },
          { name: 'Decoración básica, 1 uña', price: '1,50 €' },
          { name: 'Decoración premium, 1 uña', price: '2,50 €' },
          { name: 'Reparación 1 uña de gel extralarga', price: '5,50 €' },
          { name: 'Reparación uña rota gel / acrygel', price: '4,20 €' },
          { name: 'Retirar acrílico / gel / acrygel (sin manicura)', price: '17 €' },
          { name: 'Retirar acrílico / gel / acrygel (con manicura)', price: '22 €' },
        ],
      },
    ],
  },
];

export const faqs = [
  {
    q: '¿Cada cuánto hay que rellenar las extensiones?',
    a: 'Para mantenerlas bonitas, recomendamos el relleno entre la 3.ª y la 4.ª semana después de la puesta. A partir de la 4.ª semana ya se considera una puesta nueva.',
  },
  {
    q: '¿Qué diferencia hay entre extensiones y lifting?',
    a: 'Con el lifting elevamos y alargamos desde la raíz tus pestañas naturales y las teñimos; dura unas 4 semanas. Con las extensiones colocamos una o varias extensiones sobre cada pestaña natural. Si tus pestañas son muy cortas y buscas un resultado natural, te recomendaremos extensiones clásicas efecto natural.',
  },
  {
    q: '¿Microblading o microshading?',
    a: 'El microblading dibuja la ceja pelo a pelo; el microshading crea un sombreado con efecto maquillaje. Ambos duran de 8 a 12 meses y se pueden combinar. Julia te asesora en una valoración previa.',
  },
  {
    q: '¿Quién realiza los tratamientos de micropigmentación?',
    a: 'Todos los trabajos de micropigmentación los realiza exclusivamente Julia.',
  },
];

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'La fundadora', href: '#julia' },
  { label: 'Reservar', href: '#reserva' },
  { label: 'Preguntas', href: '#faq' },
];

export const bookingHref = () => site.booksyUrl || '#reserva';
