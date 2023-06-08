import Header from 'Container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Container/Main/Main'
import { useState } from 'react'
import { CssBaseline } from '@mui/material'

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartDate, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartDate={cartDate} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}

export default App
