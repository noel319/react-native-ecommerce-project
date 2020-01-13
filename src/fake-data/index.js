import uuid from 'uuid/v4'

import images from '../utils/images'

export const products = [
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productThumbImg01,
    price: 35.99,
    inventory: 3,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productThumbImg02,
    price: 102.36,
    inventory: 10,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productThumbImg01,
    price: 159.25,
    inventory: 5,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productThumbImg02,
    price: 65.12,
    inventory: 8,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productImg01,
    price: 42.33,
    inventory: 20,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productImg02,
    price: 17.89,
    inventory: 16,
    details: {
      description:
        'Funciona da seguinte forma, o seu organismo já possui naturalmente uma necessidade por calorias. Uma das principais dúvidas de quem deseja investir nesses suplementos é justamente o medo de engordar.',
    },
  },
]
