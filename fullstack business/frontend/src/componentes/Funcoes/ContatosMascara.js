export default function ContatosMascara(numero) {
  const numeroLimpo = numero.replace(/\D/g, "");

  // Verifica se o número é válido
  if (numeroLimpo.length <= 10 || numeroLimpo.length >= 12) {
    const codigoArea = numeroLimpo.slice(0, 2);
    const parte1 = numeroLimpo.slice(2, 7);
    const parte2 = numeroLimpo.slice(7, 10);

    const parte2Full = parte2.padEnd(3, "#");
    return `(${codigoArea}) ${parte1}-${parte2Full}❗`;
  }

  if (numeroLimpo.length === 11) {
    const codigoArea = numeroLimpo.slice(0, 2);
    const parte1 = numeroLimpo.slice(2, 7);
    const parte2 = numeroLimpo.slice(7);
    return `(${codigoArea}) ${parte1}-${parte2}`;
  }
  // Formata o número com máscara
}
