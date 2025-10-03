interface PlanetResult {
  name: string
  emoji: string
  description: string
  traits: string[]
  funFact: string
}

const planets: Record<string, PlanetResult> = {
  mercury: {
    name: "Mercurio",
    emoji: "☿️",
    description:
      "Sos rápido, adaptable y siempre estás en movimiento. Como el planeta más cercano al Sol, te gusta estar en el centro de la acción y no te quedás quieto ni un segundo.",
    traits: ["Energético y veloz", "Te adaptás fácilmente", "Comunicativo", "Impaciente a veces"],
    funFact: "Mercurio es el planeta más rápido del sistema solar, ¡completa una órbita en solo 88 días!",
  },
  venus: {
    name: "Venus",
    emoji: "♀️",
    description:
      "Sos encantador, sociable y te encanta estar rodeado de gente. Como el planeta más brillante del cielo, siempre destacás en cualquier grupo.",
    traits: ["Carismático y amigable", "Te gusta la belleza", "Sociable por naturaleza", "Un poco dramático"],
    funFact: "Venus es el planeta más caliente del sistema solar, ¡incluso más que Mercurio!",
  },
  earth: {
    name: "Tierra",
    emoji: "🌍",
    description:
      "Sos equilibrado, diverso y lleno de vida. Como nuestro hogar, tenés un poco de todo: momentos cálidos y fríos, días sociales y días tranquilos.",
    traits: ["Balanceado y versátil", "Conectado con la naturaleza", "Empático", "Protector de los tuyos"],
    funFact: "¡La Tierra es el único planeta conocido con vida! Y vos sos prueba de eso 😄",
  },
  mars: {
    name: "Marte",
    emoji: "♂️",
    description:
      "Sos aventurero, intenso y siempre buscando nuevos retos. Como el planeta rojo, tenés una energía ardiente y no te asusta nada.",
    traits: ["Valiente y decidido", "Competitivo", "Apasionado", "A veces impulsivo"],
    funFact: "Marte tiene el volcán más grande del sistema solar: ¡el Monte Olimpo mide 25 km de altura!",
  },
  jupiter: {
    name: "Júpiter",
    emoji: "♃",
    description:
      "Sos grande, generoso y el alma de la fiesta. Como el planeta más grande, tenés una personalidad que no pasa desapercibida y siempre estás ahí para tus amigos.",
    traits: ["Optimista y alegre", "Líder natural", "Generoso", "Protector de los demás"],
    funFact: "Júpiter es tan grande que podrían caber 1,300 Tierras dentro de él. ¡Tremendo!",
  },
  saturn: {
    name: "Saturno",
    emoji: "♄",
    description:
      "Sos único, creativo y te destacás por tu estilo propio. Como Saturno con sus anillos, tenés algo especial que te hace diferente a todos los demás.",
    traits: ["Original y creativo", "Disciplinado", "Elegante", "Un poco reservado"],
    funFact: "Los anillos de Saturno están hechos de hielo y roca, ¡y son tan delgados que casi no se ven de perfil!",
  },
  uranus: {
    name: "Urano",
    emoji: "♅",
    description:
      "Sos excéntrico, independiente y te gusta hacer las cosas a tu manera. Como Urano que gira de lado, no seguís las reglas convencionales.",
    traits: ["Innovador y original", "Independiente", "Impredecible", "Visionario"],
    funFact: "Urano es el único planeta que gira de costado, ¡como si estuviera acostado!",
  },
  neptune: {
    name: "Neptuno",
    emoji: "♆",
    description:
      "Sos misterioso, soñador y profundo. Como el planeta más lejano, tenés un mundo interior rico y a veces preferís tu propia compañía.",
    traits: ["Intuitivo y sensible", "Artístico", "Misterioso", "Soñador"],
    funFact: "Neptuno tiene los vientos más fuertes del sistema solar, ¡alcanzan 2,000 km/h!",
  },
}

export function calculatePlanet(answers: Record<number, string>): PlanetResult {
  const score = {
    mercury: 0,
    venus: 0,
    earth: 0,
    mars: 0,
    jupiter: 0,
    saturn: 0,
    uranus: 0,
    neptune: 0,
  }

  // Question 0: Hot or cold climates
  if (answers[0]?.includes("Cálidos")) {
    score.mercury += 2
    score.venus += 2
    score.mars += 1
  } else {
    score.uranus += 2
    score.neptune += 2
    score.saturn += 1
  }

  // Question 1: Social level
  if (answers[1]?.includes("Muy sociable")) {
    score.venus += 3
    score.jupiter += 3
  } else if (answers[1]?.includes("No muy sociable")) {
    score.earth += 2
    score.saturn += 2
  } else {
    score.uranus += 3
    score.neptune += 3
  }

  // Question 2: Pets
  if (answers[2]?.includes("Sí")) {
    score.earth += 2
    score.jupiter += 1
  } else {
    score.mercury += 1
    score.saturn += 1
  }

  // Question 3: Movie preference
  if (answers[3]?.includes("Hércules")) {
    score.mercury += 3 // Mercurio - fuego, calor, velocidad, energía heroica
  } else if (answers[3]?.includes("Enredados")) {
    score.venus += 3 // Venus - bello pero hostil, ambiente tóxico
  } else if (answers[3]?.includes("El Rey León")) {
    score.earth += 3 // Tierra - vida, naturaleza, ciclo natural
  } else if (answers[3]?.includes("Wall-E")) {
    score.mars += 3 // Marte - árido, solitario, desértico y rojo
  } else if (answers[3]?.includes("Aladdín")) {
    score.jupiter += 3 // Júpiter - gigantesco, tormentas, energía desbordante
  } else if (answers[3]?.includes("Frozen 2")) {
    score.saturn += 3 // Saturno - anillos, misterio, belleza, magia
  } else if (answers[3]?.includes("Lilo & Stitch")) {
    score.uranus += 3 // Urano - excéntrico, gira de lado, raro pero encantador
  } else if (answers[3]?.includes("La Sirenita")) {
    score.neptune += 3 // Neptuno - dios del mar, planeta azul, reino submarino
  }

  // Question 4: Place to live
  if (answers[4]?.includes("Desierto")) {
    score.mars += 2
    score.mercury += 2
  } else if (answers[4]?.includes("Caribe")) {
    score.venus += 2
    score.jupiter += 2
  } else if (answers[4]?.includes("Montaña")) {
    score.earth += 2
    score.saturn += 1
  } else {
    score.uranus += 2
    score.neptune += 2
  }

  // Question 5: Dulce de leche candies
  if (answers[5]?.includes("Sí")) {
    score.jupiter += 2
    score.venus += 1
  } else {
    score.saturn += 1
    score.uranus += 1
  }

  // Question 6: Go out or stay home
  if (answers[6]?.includes("Salir")) {
    score.venus += 2
    score.jupiter += 2
    score.mars += 1
  } else {
    score.neptune += 2
    score.saturn += 2
    score.uranus += 1
  }

  // Question 7: Anger level
  if (answers[7]?.includes("Casi nunca")) {
    score.neptune += 2
    score.earth += 2
  } else if (answers[7]?.includes("A veces")) {
    score.earth += 1
    score.saturn += 1
  } else if (answers[7]?.includes("Bastante")) {
    score.mars += 2
    score.mercury += 1
  } else {
    score.mars += 3
  }

  // Question 8: Music preference
  if (answers[8]?.includes("Duki") || answers[8]?.includes("Emilia") || answers[8]?.includes("Tini")) {
    score.venus += 1
    score.jupiter += 1
  } else if (answers[8]?.includes("2Pac")) {
    score.mars += 1
    score.uranus += 1
  } else if (answers[8]?.includes("Bad Bunny")) {
    score.jupiter += 1
    score.mars += 1
  } else {
    score.neptune += 1
  }

  // Find planet with highest score
  const planetKey = Object.entries(score).reduce((a, b) => (b[1] > a[1] ? b : a))[0] as keyof typeof planets

  return planets[planetKey]
}
