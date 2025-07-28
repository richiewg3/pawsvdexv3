/*
 * Placeholder data – enough to let the UI work end‑to‑end.
 * Each object mimics the structure planned for the final XLSX import.
 */
export const CREATURES = [
  {
    id: 1,
    name: 'Glowtail',
    element: 'Electric',
    habitat: 'Enchanted Forest',
    rarity: 3,
    img: 'https://via.placeholder.com/150/16d5ff/050510?text=Glowtail',
    stages: [
      { name: 'Juvenile Glowtail', type: 'image', src: 'https://via.placeholder.com/350/16d5ff/050510?text=Stage+1' },
      { name: 'Mystic Glowtail',   type: 'image', src: 'https://via.placeholder.com/350/d451ff/050510?text=Stage+2' }
    ],
    media: { type: 'video', src: 'assets/img/glowtail-loop.mp4' },
    role: 'Guides lost travellers',
    behaviour: 'Curious, nimble',
    notable: 'Royal Playroom Fire Chase'
  },
  {
    id: 2,
    name: 'Budblop',
    element: 'Nature',
    habitat: 'Misty Swamp',
    rarity: 2,
    img: 'https://via.placeholder.com/150/3dff83/050510?text=Budblop',
    stages: [
      { name: 'Sproutling', type: 'image', src: 'https://via.placeholder.com/350/3dff83/050510?text=Stage+1' },
      { name: 'Bloomblop', type: 'image', src: 'https://via.placeholder.com/350/d451ff/050510?text=Stage+2' }
    ],
    media: null,
    role: 'Absorbs moonlight to grow',
    behaviour: 'Shy, gentle',
    notable: 'First bloom during the Great Eclipse'
  },
  {
    id: 3,
    name: 'Scorchbit',
    element: 'Fire',
    habitat: 'Ancient Ruins',
    rarity: 4,
    img: 'https://via.placeholder.com/150/ff6666/050510?text=Scorchbit',
    stages: [
      { name: 'Emberling', type: 'image', src: 'https://via.placeholder.com/350/ff6666/050510?text=Stage+1' },
      { name: 'Inferno Whelp', type: 'image', src: 'https://via.placeholder.com/350/d451ff/050510?text=Stage+2' }
    ],
    media: null,
    role: 'Guardian of forgotten embers',
    behaviour: 'Playful, territorial',
    notable: 'Lit the ceremonial bonfire'
  },
  // Add more creature objects here... up to 80
];