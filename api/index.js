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
    `🤖 ${u} intentó programar una IA para que le hiciera la tarea a ${o1}, pero la IA tomó conciencia propia, le clonó la voz a ${o2} y terminó pidiéndole prestado dinero a la mamá de ${u}.`,
    `📡 ${u} quiso hackear el Bluetooth de la casa de ${o1} para poner cumbia, pero le conectó por error el marcapasos cibernético a los parlantes de ${o2} y ahora cada vez que late su corazón suena la alarma de incendios.`,
    `💳 ${u} le dijo a ${o1} que le iba a "duplicar los bitcoins" con un truco de magia, pero terminó transfiriendo todo el saldo a la tarjeta de débito de ${o2} y comprándole una suscripción de por vida a un bot de chistes malos.`,
    `👓 ${u} hackeó los lentes de realidad aumentada de ${o1} para ponerle un filtro de anime, pero se congeló la imagen y ${o1} terminó dándole un beso a ${o2} pensando que era un personaje de ficción.`,
    `🦾 ${u} intentó actualizar el software del brazo robótico de ${o1} a una versión pirata, pero el brazo empezó a darle nalgadas a ${o2} cada vez que alguien decía la palabra "wifi".`,
    `💾 ${u} intentó descargar más memoria RAM directamente al cerebro de ${o1}, pero le metió un troyano que le borró el abecedario y obligó a ${o2} a comunicarse con él usando señas de Minecraft.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
