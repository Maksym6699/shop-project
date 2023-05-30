import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
            <ProductsListItem />
        </>
    )
}
export default ProductsList
