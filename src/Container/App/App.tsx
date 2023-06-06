import Header from 'Container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Container/Main/Main'
import { useState } from 'react'
import { CssBaseline } from '@mui/material'

type CartDate = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartDate, setCartDate] = useState<CartDate>({
        totalCount: 0,
        totalPrice: 0,
    })
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartDate={cartDate} />
            <Main />
        </StyledEngineProvider>
    )
}

export default App
