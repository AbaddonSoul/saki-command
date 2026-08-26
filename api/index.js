module.exports = (req, res) => {
  const formatearUsuario = (valor, porDefecto) => {
    if (!valor || valor.includes('random.chatter') || valor.includes('${')) {
      return `@${porDefecto}`;
    }
    const limpio = valor.replace(/^@/, '').trim();
    return `@${limpio}`;
  };

  const u = formatearUsuario(req.query.usuario, 'Netrunner');
  const o1 = formatearUsuario(req.query.o1, 'Victima1');
  const o2 = formatearUsuario(req.query.o2, 'Victima2');

  const historias = [
    `💾 ${u} hackeó el chip cerebral de ${o1} para enamorarl@ a la fuerza, pero cometió un error de sintaxis y terminó casándol@ con ${o2}... ¡y ahora les cobra renta por vivir en su servidor!`,
    `🦾 ${u} le prometió amor eterno a ${o1}, pero le robó el brazo robótico mientras dormía para empeñarlo y comprarse un par de ojos de neón junto a ${o2}.`,
    `📡 ¡DRAMA EN LA CIUDAD! ${u} interceptó lasmemorias cibernéticas de ${o1}, descubrió que le era infiel con ${o2} y proyectó todo el chisme en los hologramas gigantes de la megacorporación.`,
    `⚡ ${u} le hackeó los implantes de piernas a ${o1} para que fuera a pedirle matrimonio a ${o2}, solo para llegar a la boda, cancelar la suscripción de oxígeno de ambos y quedarse con sus terrenos en el Metaverso.`,
    `🔋 ${u} desenchufó a ${o1} de la cápsula de recarga para recargar su vapeador, le echó la culpa a un ataque cibernético de ${o2} y terminó vendiendo los repuestos de ambos en el mercado negro.`,
    `🕵️ ${u} contrató a un netrunner para clonar la identidad de ${o1}, se hizo pasar por él para cobrar su herencia cibernética y luego huyó a Marte de la mano con ${o2}.`,
    `🤖 ${u} le instaló un virus a ${o1} que le hace bailar cumbia cada vez que ve a ${o2}, mientras ${u} les cobra en criptomonedas para pasarles el antivirus.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
