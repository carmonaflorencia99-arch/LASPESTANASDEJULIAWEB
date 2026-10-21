// Foto real si existe; si no, un bloque de color con la descripción de la foto que falta.
export default function Media({ image, className = '', imgClassName = '', loading = 'lazy', tone = 'deep' }) {
  if (image?.src) {
    return (
      <img
        className={`media ${imgClassName}`}
        src={image.src}
        alt={image.alt}
        loading={loading}
        decoding="async"
      />
    );
  }
  return (
    <div className={`media media--placeholder media--${tone} ${className}`} role="img" aria-label={image?.alt}>
      <span>Foto · {image?.alt}</span>
    </div>
  );
}
