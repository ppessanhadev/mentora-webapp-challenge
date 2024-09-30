/**
 * Can receive an entry value to converter when initialize, if not pass, then only return a formatter function
 * @param value {optional} - number
 * @returns object {transformed|formatter}
 */
export function useCurrencyFormatter(value?: number) {
  const { format: formatter } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const transformed = value ? { transformed: formatter(value) } : {};

  return { ...transformed, formatter };
}
