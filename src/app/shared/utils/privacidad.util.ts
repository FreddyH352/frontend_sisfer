/** Muestra solo las dos primeras letras de cada palabra. El resto se tapa. */
export function enmascararNombre(nombre: string | null | undefined): string {
  return (nombre ?? '').trim().split(/\s+/).filter(Boolean).map(parte => {
    if (parte.length <= 2) return parte;
    return parte.slice(0, 2) + 'X'.repeat(parte.length - 2);
  }).join(' ');
}
