import { AppBar, Toolbar, Typography, IconButton, Box, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import AdbIcon from '@mui/icons-material/Adb'
import { Logo, AppHeader } from '../Helper/styles'

import { ColorModeContext } from '../Helper/Context'
import { useContext } from "react"

const Header = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    return (
        <AppHeader position="static">
            <Toolbar>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Logo variant="h6" noWrap component="a" href="/">LOGO</Logo>
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppHeader>
    )
}

export default Header