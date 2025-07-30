export const CREATURES = [
  {
    id: 1,
    name: 'Glowtail',
    element: 'Electric',
    habitat: 'Enchanted Forest',
    rarity: 3,
    img: 'https://via.placeholder.com/150/16d5ff/050510?text=Glowtail',
    stages: [
      { name: 'Juvenile Glowtail', imgSrc: 'assets/img/stage1_glowtail.png', modelSrc: 'assets/models/stage1_glowtail.glb' },
      { name: 'Mystic Glowtail', imgSrc: 'assets/img/stage2_glowtail.png', modelSrc: 'assets/models/stage2_glowtail.glb' }
    ],
    media: {
      video: 'assets/media/glowtail_loop.mp4',
      candids: [ 'assets/media/glowtail_candid_1.jpg', 'assets/media/glowtail_candid_2.jpg' ]
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
      { name: 'Sproutling', imgSrc: 'assets/img/stage1_budblop.png', modelSrc: 'assets/models/stage1_budblop.glb' },
      { name: 'Bloomblop', imgSrc: 'assets/img/stage2_budblop.png', modelSrc: 'assets/models/stage2_budblop.glb' }
    ],
    media: {
      video: 'assets/media/budblop_loop.mp4',
      candids: [ 'assets/media/budblop_candid_1.jpg', 'assets/media/budblop_candid_2.jpg' ]
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
      { name: 'Emberling', imgSrc: 'assets/img/stage1_scorchbit.png', modelSrc: 'assets/models/stage1_scorchbit.glb' },
      { name: 'Inferno Whelp', imgSrc: 'assets/img/stage2_scorchbit.png', modelSrc: 'assets/models/stage2_scorchbit.glb' }
    ],
    media: {
      video: 'assets/media/scorchbit_loop.mp4',
      candids: [ 'assets/media/scorchbit_candid_1.jpg', 'assets/media/scorchbit_candid_2.jpg' ]
    },
    role: 'Guardian of forgotten embers',
    behaviour: 'Playful, territorial',
    notable: 'Lit the ceremonial bonfire'
  }
];
