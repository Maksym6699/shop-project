import { Grid } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <ProductsList />
            <Grid />
        </>
    )
}
export default Home
