type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 15000,
        image: '/images/iPhone-black.webp'
    },
    {
        id: 2,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 100,
        image: '/images/iPhone-gold.webp'
    },
    {
        id: 3,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 500,
        image: '/images/iPhone-purpule.webp'
    },
    {
        id: 4,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 700,
        image: '/images/iPhone-red.webp'
    },
    {
        id: 5,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 800,
        image: '/images/iPhone-white.webp'
    },
    {
        id: 6,
        title: 'iPhone 10 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 50,
        image: '/images/iPhone-yellow.webp'
    },
]

export default productsArray