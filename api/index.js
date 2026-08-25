module.exports = (req, res) => {
  const u = req.query.usuario || 'Alguien';
  const o1 = req.query.o1 || 'un tripulante';
  const o2 = req.query.o2 || 'el copiloto';

  const historias = [
    `👨‍🚀 ${u} dijo: "Confíen en mí, yo sé manejar esto". Dos segundos después, la nave se partió a la mitad, mandó a ${o1} volando a Marte y dejó a ${o2} atrapado en el sol sin señal de Wi-Fi.`,
    `🚨 ¡TRAGEDIA ESPACIAL! ${u} intentó hacer drift alrededor de la Luna, aplastó la nave de ${o1} y eyectó a ${o2} por la escotilla al confundir el freno con el aire acondicionado.`,
    `🚀 En pleno viaje, ${u} puso cumbia a todo volumen. ${o1} se distrajó bailando en el panel central, ${o2} tiró el café sobre los motores y terminaron chocando contra un OXXO intergaláctico.`,
    `🌌 ${u} se creyó piloto de Fórmula 1 en el espacio: le destruyó los paneles solares a ${o1} , culpó a ${o2} por darle mal el mapa y obligó a ambos a empujar la nave en medio de la nada.`,
    `🛸 ${u} se distrajó comiendo pizza al volante, usó a ${o1} como escudo contra meteoritos y le quemó las cejas a ${o2} con el propulsor trasero.`,
    `🛰️ ${u} metió la nave en un agujero negro por error: ${o1} se transformó en un espagueti cósmico y ${o2} terminó vendiendo los pedazos restantes por Mercado Libre.`,
    `🍕 ${u} le confió la navegación a ${o1} , pero ${o2} se robó el único paracaídas espacial y los tres terminaron estrellándose de lleno contra la estación espacial.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
