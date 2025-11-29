const characters = {
  princess: {
    name: "Princess",
    img: "img/princess.jpg",
    description:
      "Elegant, deadly from afar, and loves causing chaos without lifting a finger. You adore someone stylish and dramatic. (Art by Happy-1Cat!!)",
  },
  archerqueen: {
    name: "Archer Queen",
    img: "img/archerqueen.jpg",
    description:
      "Focused, powerful, and always in control. You love someone with deadly precision AND personality. (Art by kaccha83!!)",
  },
  bandit: {
    name: "Bandit",
    img: "img/bandit.webp",
    description:
      "Fast, mysterious, and chaotic in a fun way. She dashes into your life and steals your heart. (Art by TubbieGordito!!)",
  },
  valkyrie: {
    name: "Valkyrie",
    img: "img/valkyrie.png",
    description:
      "Loyal, grounded, and a total protector. She spins for you—literally. (Art by 5Kay!!)",
  },
  icewizard: {
    name: "Ice Wizard",
    img: "img/icewizard.webp",
    description:
      "Chill, funny, and stylish. He slows everything down… except for your heart rate ;). (Art by riad0077!! Ts is so cool) ",
  },
  wizard: {
    name: "Wizard",
    img: "img/wizard.jpg",
    description:
      "Flashy, dramatic, and loud in the best way. FIREBALLLLL!! (Cosplay by KellyP)",
  },
  megaknight: {
    name: "Mega Knight",
    img: "img/megaknight.webp",
    description:
      "Toxic? Maybe. Fun? Absolutely. He jumps into your life with 3000 pounds of affection! (Art by Finni_Kosmos!!)",
  },
  miner: {
    name: "Miner",
    img: "img/miner.png",
    description:
      "Sneaky, loyal, and low-key adorable. He travels across the map just to see you. (Art by Schneiderpox!!)",
  },
  minipekka: {
    name: "Mini P.E.K.K.A",
    img: "img/minipekka.jpg",
    description:
      "PANCAKES!!! Sweet, loyal, and surprisingly aggressive. You match each other’s adorable chaos. (Art by IcyTamTam!!)",
  },
  hog: {
    name: "Hog Rider",
    img: "img/hogrider.jpg",
    description:
      "HOG RIDEEEEER!!! You got the 1% secret pull. Your life is now loud, chaotic, and amazing. (art by oogly.art!!)",
  },
};

const questions = [
  {
    q: "Pick your vibe:",
    answers: [
      { text: "Elegant & dramatic", add: ["princess", "wizard"] },
      { text: "Fast & chaotic", add: ["bandit", "minipekka"] },
      { text: "Calm & collected", add: ["icewizard", "archerqueen"] },
      { text: "Strong & protective", add: ["valkyrie", "megaknight"] },
    ],
  },
  {
    q: "What kind of partner do you want?",
    answers: [
      { text: "Funny & unpredictable", add: ["wizard", "minipekka"] },
      { text: "Mysterious & cool", add: ["bandit", "icewizard"] },
      { text: "Loyal & dependable", add: ["valkyrie", "miner"] },
      { text: "Confident & powerful", add: ["archerqueen", "megaknight"] },
    ],
  },
  {
    q: "Pick a date:",
    answers: [
      {
        text: "Shooting arrows together (romantic)",
        add: ["princess", "archerqueen"],
      },
      { text: "Sneaking around town", add: ["bandit", "miner"] },
      { text: "Smashing stuff", add: ["megaknight", "minipekka"] },
      { text: "Cozy, warm spell practice", add: ["wizard", "icewizard"] },
    ],
  },
  {
    q: "Choose an elixir cost for your date:",
    answers: [
      { text: "3 or 2 — fast & cheap", add: ["bandit", "minipekka", "miner"] },
      { text: "4 — balanced", add: ["princess", "icewizard", "wizard"] },
      {
        text: "5+ — heavy spender",
        add: ["megaknight", "valkyrie", "archerqueen"],
      },
      { text: "0 — I stole everything (lol)", add: ["bandit"] },
    ],
  },
  {
    q: "Pick a color palette:",
    answers: [
      { text: "Blue & Frosty", add: ["icewizard"] },
      { text: "Pink & Royal", add: ["princess"] },
      { text: "Orange & Fire", add: ["wizard", "valkyrie"] },
      { text: "Black & Mysterious", add: ["bandit", "megaknight"] },
    ],
  },
  {
    q: "What's your personality?",
    answers: [
      { text: "Funny & sociable", add: ["wizard", "minipekka"] },
      { text: "Calm & analytical", add: ["archerqueen", "icewizard"] },
      { text: "Strong & dependable", add: ["valkyrie", "megaknight"] },
      { text: "Sneaky & clever", add: ["bandit", "miner"] },
    ],
  },
];
