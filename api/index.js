module.exports = (req, res) => {
  const formatearUsuario = (valor, porDefecto) => {
    if (!valor || valor.includes('random.chatter') || valor.includes('${')) {
      return `@${porDefecto}`;
    }
    const limpio = valor.replace(/^@/, '').trim();
    return `@${limpio}`;
  };

  const u = formatearUsuario(req.query.usuario, 'Netrunner');
  const o1 = formatearUsuario(req.query.o1, 'Víctima1');
  const o2 = formatearUsuario(req.query.o2, 'Víctima2');

  const historias = [
    `👾 ${u} le hackeó el sistema a ${o1} con la excusa de probar si le corría el DOOM, pero ${o1} descubrió que en realidad le estaba minando Bitcoin en el chip cerebral mientras ${o2} cobraba comisión por la luz.`,
    `🕹️ ${u} juró que solo estaba instalando el DOOM en la tostadora inteligente de ${o1}, pero le metió un troyano que puso a ${o2} a bailar reggaetón en bucle infinito cada vez que se enciende la luz.`,
    `💾 ${u} intentó correr el DOOM en el marcapasos cibernético de ${o1}, pero se le congeló la pantalla y terminó usando a ${o2} como antena humana para no perder señal.`,
    `🎮 ${u} hackeó la prótesis de ojo de ${o1} para jugar DOOM en HD, pero ${o1} se dio cuenta de que ${u} le estaba usando la retina para minar Dogecoin junto a ${o2}.`,
    `💻 ${u} le dijo a ${o1} "tranquilo, solo voy a optimizar tu PC para el DOOM", pero le borró la tesis, le instaló un minador de criptos pirata y le echó la culpa a ${o2}.`,
    `🖥️ ${u} logró hacer correr el DOOM en el chip de memoria de ${o1}, pero el sobrecalentamiento fue tal que le quemó las cejas a ${o2} y derritió la tarjeta gráfica del bar.`,
    `🚀 ${u} intentó hackear el dron de ${o1} para jugarse una partida de DOOM en el aire, pero terminó proyectando el historial de búsqueda de ${o2} en medio del centro comercial.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
