const characters = {
  hutao: {
    name: "Hu Tao",
    img: "img/hutao.jpg",
    description:
      "Mischievous, chaotic, and surprisingly heartfelt. You two would cause trouble and have fun doing it.",
  },
  zhongli: {
    name: "Zhongli",
    img: "img/zhongli.jpg",
    description:
      "Calm, wise, elegant. You value stability and deep connection — perfectly aligned with Rex Lapis himself.",
  },
  xiao: {
    name: "Xiao",
    img: "img/xiao.jpg",
    description:
      "Quiet, loyal, and intense. He would secretly treasure you more than he admits.",
  },
  childe: {
    name: "Childe (Tartaglia)",
    img: "img/childe.jpg",
    description:
      "A thrill-seeker who loves challenge and loyalty. You match his chaotic charm.",
  },
  raiden: {
    name: "Raiden Shogun",
    img: "img/raiden.jpg",
    description:
      "Disciplined, powerful, and secretly soft. You bring her balance and humanity.",
  },
  miko: {
    name: "Yae Miko",
    img: "img/miko.jpg",
    description:
      "Clever, teasing, and elegant. You can handle her playful, cunning energy.",
  },
  kazuha: {
    name: "Kazuha",
    img: "img/kazuha.jpg",
    description:
      "A gentle, poetic soul. You two would share peaceful adventures and quiet romance.",
  },
  nahida: {
    name: "Nahida",
    img: "img/nahida.jpg",
    description:
      "Empathetic, nurturing, and wise. You match her gentle curiosity and emotional intelligence.",
  },
  paimon: {
    name: "PAIMON?!",
    img: "img/paimon.jpg",
    description:
      "Looks like Paimon is YOUR soulmate. Emergency Food is now Emergency Lover????",
  },
};

const questions = [
  {
    q: "Choose your vibe:",
    answers: [
      { text: "Calm & stable", add: ["zhongli", "kazuha"] },
      { text: "Chaotic but lovable", add: ["hutao", "childe"] },
      { text: "Smart introvert", add: ["xiao", "nahida"] },
      { text: "Elegant troublemaker", add: ["miko", "raiden"] },
    ],
  },
  {
    q: "What kind of partner do you want?",
    answers: [
      { text: "Protective & loyal", add: ["xiao", "zhongli"] },
      { text: "Playful & teasing", add: ["hutao", "miko"] },
      { text: "Strong & disciplined", add: ["raiden"] },
      { text: "Adventurous & free", add: ["kazuha", "childe"] },
    ],
  },
  {
    q: "Pick a date:",
    answers: [
      { text: "Quiet café", add: ["nahida", "zhongli"] },
      { text: "Night market adventure", add: ["hutao", "childe"] },
      { text: "Moonlit cliffside", add: ["xiao", "kazuha"] },
      { text: "Elegant shrine visit", add: ["miko", "raiden"] },
    ],
  },
  {
    q: "Choose an element:",
    answers: [
      { text: "Pyro", add: ["hutao"] },
      { text: "Electro", add: ["raiden", "miko"] },
      { text: "Anemo", add: ["kazuha", "xiao"] },
      { text: "Dendro", add: ["nahida"] },
    ],
  },
  {
    q: "Pick a color palette:",
    answers: [
      { text: "Warm oranges", add: ["hutao"] },
      { text: "Deep purples", add: ["raiden", "miko"] },
      { text: "Cool blues", add: ["childe"] },
      { text: "Earth tones", add: ["zhongli", "kazuha"] },
    ],
  },
  {
    q: "What describes your personality?",
    answers: [
      { text: "Empathetic & kind", add: ["nahida"] },
      { text: "Calm & quiet", add: ["xiao"] },
      { text: "Wise & patient", add: ["zhongli"] },
      { text: "Fun & chaotic", add: ["hutao", "childe"] },
    ],
  },
];
