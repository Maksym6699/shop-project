import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Container/Main/Main'
import { useState } from 'react'

type ProductsInCart = {
    // [id: number]: number
    [id: number]: {
        count: number
        price: number
    }
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: {
            count: 3,
            price: 1500,
        },
        2: {
            count: 4,
            price: 1560,
        },
    })

    const addProductToCart = (id: number, count: number, price: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            // [id]: (prevState[id] || 0) + count,
            [id]: {
                count:
                    (!!prevState[id] && prevState[id].count
                        ? prevState[id].count
                        : 0) + count,
                price,
            },
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}

export default App
