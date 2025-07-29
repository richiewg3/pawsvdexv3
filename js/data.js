/*
 * Placeholder data – enough to let the UI work end-to-end.
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
      { name: 'Juvenile Glowtail', imgSrc: 'assets/img/stage1_glowtail.jpg', modelSrc: 'assets/models/stage1_glowtail.glb' },
      { name: 'Mystic Glowtail', imgSrc: 'assets/img/stage2_glowtail.jpg', modelSrc: 'assets/models/stage2_glowtail.glb' }
    ],
    media: {
      video: 'assets/video/glowtail-loop.mp4',
      candids: ['assets/img/glowtail_candid1.jpg', 'assets/img/glowtail_candid2.jpg']
    },
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
      { name: 'Sproutling', imgSrc: 'assets/img/stage1_budblop.jpg', modelSrc: 'assets/models/stage1_budblop.glb' },
      { name: 'Bloomblop', imgSrc: 'assets/img/stage2_budblop.jpg', modelSrc: 'assets/models/stage2_budblop.glb' }
    ],
    media: {
      video: 'assets/video/budblop-loop.mp4',
      candids: ['assets/img/budblop_candid1.jpg', 'assets/img/budblop_candid2.jpg']
    },
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
      { name: 'Emberling', imgSrc: 'assets/img/stage1_scorchbit.jpg', modelSrc: 'assets/models/stage1_scorchbit.glb' },
      { name: 'Inferno Whelp', imgSrc: 'assets/img/stage2_scorchbit.jpg', modelSrc: 'assets/models/stage2_scorchbit.glb' }
    ],
    media: {
      video: 'assets/video/scorchbit-loop.mp4',
      candids: ['assets/img/scorchbit_candid1.jpg', 'assets/img/scorchbit_candid2.jpg']
    },
    role: 'Guardian of forgotten embers',
    behaviour: 'Playful, territorial',
    notable: 'Lit the ceremonial bonfire'
  }
  // Add more creature objects here... up to 80
];

