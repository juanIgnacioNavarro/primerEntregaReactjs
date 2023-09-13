import camisa from '../src/img/camisaRaya.jpg'
import pantalon from '../src/img/pantalon.jpg'
import zapato from '../src/img/zapato.jpg'
import tapado from '../src/img/tapado.jpg'
import pantalonMujer from '../src/img/pantalonMujer.jpg'
import zapatoMujer from '../src/img/zapatillamujer.jpg'

const products = [
  {
    "id": 1,
    "title": "Camisa de algodón a rayas",
    "price": 10.50,
    "description": "Una elegante camisa de algodón con un patrón a rayas clásico. Ideal para ocasiones formales o informales.",
    "category": "hombre",
    "image": camisa
  },
  {
    "id": 2,
    "title": "Pantalon de vestir",
    "price": 20.50,
    "description": "Un elegante pantalon clásico. Ideal para ocasiones formales o informales.",
    "category": "Hombre",
    "image": pantalon
  },
  {
    "id": 3,
    "title": "Zapatos",
    "price": 15.50,
    "description": "Zapatos para ocasiones formales o informales.",
    "category": "hombre",
    "image": zapato
  },
  {
    "id": 4,
    "title": "Tapado largo con mangas",
    "price": 50,
    "description": "Un tapado elegante con un diseño moderno.",
    "category": "mujer",
    "image": tapado
  },
  {
    "id": 5,
    "title": "Jean Clasico",
    "price": 99.99,
    "description": "Un pantalon de jean de calidad que nunca pasa de moda.",
    "category": "mujer",
    "image": pantalonMujer
  },
  {
    "id": 6,
    "title": "Zapatillas Sport",
    "price": 69.99,
    "description": "Zapatillas para ocasiones formales o informales.",
    "category": "mujer",
    "image": zapatoMujer
  },
]

export const getProducts = (category) => {
  return new Promise((resolve) => {

    setTimeout(() => {
      if (!category) return resolve(products)
      return resolve(products.filter(product => product.category === category))
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log({ products, id })
      const product = products.find((p) => p.id === id)
      if (product) return resolve(product)
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject({ error: 'No encontrado' })
    }, 500)
  })
}