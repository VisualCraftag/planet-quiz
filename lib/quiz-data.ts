export interface Question {
  question: string
  emoji: string
  options: string[]
}

export const questions: Question[] = [
  {
    question: "¿Climas cálidos o fríos?",
    emoji: "🌡️",
    options: ["Cálidos ☀️", "Fríos ❄️"],
  },
  {
    question: "¿Sos una persona sociable?",
    emoji: "👥",
    options: ["Muy sociable 🎉", "No muy sociable 😊", "Prefiero estar solo/a 🧘"],
  },
  {
    question: "¿Tenés mascotas?",
    emoji: "🐾",
    options: ["Sí 🐶", "No 🚫"],
  },
  {
    question: "¿Qué peli preferís?",
    emoji: "🎬",
    options: [
      "Hércules 💪",
      "Enredados 🌸",
      "El Rey León 🦁",
      "Wall-E 🤖",
      "Aladdín 🧞",
      "Frozen 2 ❄️",
      "Lilo & Stitch 👽",
      "La Sirenita 🧜‍♀️",
    ],
  },
  {
    question: "Elegí un lugar para vivir:",
    emoji: "🏠",
    options: ["Desierto 🏜️", "Caribe 🏝️", "Montaña ⛰️", "Tundra 🧊"],
  },
  {
    question: "¿Te gustan los caramelos de dulce de leche?",
    emoji: "🍬",
    options: ["Sí, me encantan 😋", "No, no me gustan 😐"],
  },
  {
    question: "¿Preferís salir de noche o quedarte en casa?",
    emoji: "🌙",
    options: ["Salir de noche 🎊", "Quedarme en casa 🏡"],
  },
  {
    question: "¿Te enojás mucho?",
    emoji: "😤",
    options: ["Casi nunca 😌", "A veces 😐", "Bastante 😠", "Demasiado 🤬"],
  },
  {
    question: "¿Qué cantante te gusta más?",
    emoji: "🎤",
    options: ["Duki 🇦🇷", "2Pac 🎧", "Emilia 💜", "Tini ✨", "Bad Bunny 🐰", "Taylor Swift 🎸"],
  },
]
