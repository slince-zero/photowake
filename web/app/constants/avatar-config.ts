export const WIDGET_STYLES = {
  face: {
    width: 200,
    height: 240,
    className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    zIndex: 10,
  },
  eyes: {
    width: 100,
    height: 30,
    className: 'absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 50,
  },
  nose: {
    width: 30,
    height: 30,
    className: 'absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 60,
  },
  eyebrows: {
    width: 100,
    height: 15,
    className: 'absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 70,
  },
  hair: {
    width: 200,
    height: 240,
    className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    zIndex: 80,
  },
  mouth: {
    width: 60,
    height: 25,
    className: 'absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2',
    zIndex: 100,
  },
  ears: {
    width: 240,
    height: 240,
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
  face: '/widgets/face/face.svg',
  eyes: ['/widgets/eyes/eye_1.svg', '/widgets/eyes/eye_2.svg'],
  eyebrows: ['/widgets/eyebrows/eyebrow_1.svg'],
  nose: ['/widgets/nose/nose_1.svg', '/widgets/nose/nose_2.svg'],
  mouth: ['/widgets/mouth/mouth_1.svg', '/widgets/mouth/mouth_2.svg'],
  ears: ['/widgets/ears/ear.svg'],
  hair: ['/widgets/hair/hair_1.svg', '/widgets/hair/hair_2.svg'],
} 