import productsArray from 'utils/ProductsArray'

type Props = {
    // productObject: any
    productsInCart: {
        // [id: number]: number
        [id: number]: {
            count: number
            price: number
        }
    }
}
const CartHeader = ({ productsInCart }: Props) => {
    console.log(productsInCart)
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {/* {productObject[parseInt(productId)].title}: {productId}:{' '} */}
                    {productsInCart[parseInt(productId)].count}/
                    {productsInCart[parseInt(productId)].price *
                        productsInCart[parseInt(productId)].count}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
