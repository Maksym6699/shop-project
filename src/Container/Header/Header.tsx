import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.scss'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'Menu/Menu'
import { green } from '@mui/material/colors'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    cartDate: {
        totalCount: number
        totalPrice: number
    }
}

const Header = ({ cartDate }: Props) => {
    const appBar = true
    return (
        <AppBar
            position="static"
            className="app-bar"
            style={{
                backgroundColor: appBar ? 'green' : 'purple',
            }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader cartDate={cartDate} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
