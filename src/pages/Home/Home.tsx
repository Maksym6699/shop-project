import { Grid } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number, price: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductsList addProductToCart={addProductToCart} />
            <Grid />
        </>
    )
}
export default Home
