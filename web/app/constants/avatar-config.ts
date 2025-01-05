export const WIDGET_STYLES = {
  face: {
    width: 174,
    height: 175,
    className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    zIndex: 10,
  },
  eyes: {
    width: 68,
    height: 18,
    className: 'absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 50,
  },
  nose: {
    width: 3,
    height: 27,
    className: 'absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 60,
  },
  eyebrows: {
    width: 97,
    height: 8,
    className: 'absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 70,
  },
  ears: {
    width: 223,
    height: 44,
    className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    zIndex: 80,
  },

  mouth: {
    width: 64,
    height: 17,
    className: 'absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 100,
  },
  hair: {
    width: 223,
    height: 157,
    className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    zIndex: 102,
  },
}

export const STYLE_OPTIONS = [
  'Anime',
  'Realistic',
  'Cartoon',
  'Pixel Art',
  'Sketch',
  'Paint',
]

export const ACCESSORIES_OPTIONS = {
  glasses: ['None', 'Round', 'Square', 'Oval'],
  other: ['Earrings', 'Necklace', 'Hat', 'None'],
}

export const WIDGET_PATHS = {
  face: [
    '/widgets/face/face_1.svg',
    '/widgets/face/face_2.svg',
    '/widgets/face/face_3.svg',
  ],
  eyes: [
    '/widgets/eyes/eye_1.svg',
    '/widgets/eyes/eye_2.svg',
    '/widgets/eyes/eye_3.svg',
  ],
  eyebrows: [
    '/widgets/eyebrows/eyebrow_1.svg',
    '/widgets/eyebrows/eyebrow_2.svg',
    '/widgets/eyebrows/eyebrow_3.svg',
  ],
  nose: [
    '/widgets/nose/nose_1.svg',
    '/widgets/nose/nose_2.svg',
    '/widgets/nose/nose_3.svg',
  ],
  mouth: [
    '/widgets/mouth/mouth_1.svg',
    '/widgets/mouth/mouth_2.svg',
    '/widgets/mouth/mouth_3.svg',
  ],
  ears: ['/widgets/ears/ear.svg'],
  hair: [
    '/widgets/hair/hair_1.svg',
    '/widgets/hair/hair_2.svg',
    '/widgets/hair/hair_3.svg',
  ],
}

export const DEFAULT_AVATAR = {
  face: '/widgets/face/face_1.svg',
  eyes: '/widgets/eyes/eye_1.svg',
  ears: '/widgets/ears/ear.svg',
  eyebrows: '/widgets/eyebrows/eyebrow_1.svg',
  nose: '/widgets/nose/nose_1.svg',
  mouth: '/widgets/mouth/mouth_1.svg',
  hair: '/widgets/hair/hair_1.svg',
}

export const HAIR_COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'Brown', value: '#4A3728' },
  { name: 'Blonde', value: '#F4D03F' },
  { name: 'Red', value: '#C0392B' },
  { name: 'Gray', value: '#7F8C8D' },
  { name: 'Pink', value: '#FF69B4' },
  { name: 'Purple', value: '#8E44AD' },
  { name: 'Blue', value: '#3498DB' },
]
