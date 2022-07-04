import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import { fontSize } from '@mui/system'

export const Logo = styled(Typography)({
    flexGrow: 1,
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
})

export const AppHeader = styled(Grid)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.cardHeadDark : theme.palette.primary.A400,
    width: '100%',
    // [theme.breakpoints.down('400')]: {
    //     width: '1200px'
    // },

}))

export const Container = styled(Grid)(({theme}) => ({
    padding: '10px',
    height: '400px',
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('400')]: {
        width: '1000px'
    },

}))

export const CardContainer = styled(Grid)(({theme}) => ({
    width: '100%',
    overflow: 'auto',
    overflowX: 'auto',
    overflowY: 'visible',
    height: '500'
}))

export const Ellipsis = styled(Grid)(({theme}) => ({
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis',
}))

export const CompanyCard = styled(Card)(({theme}) => ({
    height: '350px',
    margin: '5px',
    width: '200px',
    '& p span.ref-date': {
        fontWeight: 'bold'
    }
}))

export const CompanyCardLocked = styled(Card)(({theme}) => ({
    width: '240px',
    height: '350px',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.cardHeadDark : theme.palette.primary.A400
}))

export const CardHead = styled(CardHeader)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.cardHeadDark : theme.palette.primary.A400,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    fontSize: '10px',
    height: '80px',
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.4vw',
    [theme.breakpoints.down('400')]: {
        fontSize: '2.8vw',
    },
}))

export const OpenLockIcon = styled(LockOpenIcon)({
    fontSize: '18px',
    fill: '#000',
    ':hover': {
        fill: '#262F56',
        cursor: 'pointer'
    }
})

export const CloseLockIcon = styled(LockIcon)({
    fontSize: '18px',
    fill: '#000',
    ':hover': {
        fill: '#262F56',
        cursor: 'pointer'
    }
})

export const DollarIcon = styled(AttachMoneyOutlinedIcon)({
    float: 'left',
    fontSize: '20px'
})