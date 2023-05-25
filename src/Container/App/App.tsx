import Header from 'Container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
        </StyledEngineProvider>
    )
}

export default App
