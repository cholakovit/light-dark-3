import { grey, orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
//import { colors } from '@mui/material'

export const MyTheme = (mode) => {
    const theme = useMemo(
        () =>
            createTheme({
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            body: {
                                margin: 0,
                                mode,
                                ...(mode === 'light' ? { backgroundColor: "#e1e1e1" } : { backgroundColor: "#666666" }),
                            }
                        }
                    }
                },
                palette: {
                    mode,
                    ...(mode === 'light'
                    ? {
                        // palette values for light mode
                        primary: orange,
                        divider: orange[200],
                        text: {
                          primary: grey[900],
                          secondary: grey[800],
                        },
                      }
                    : {
                        // palette values for dark mode
                        primary: grey,
                        cardHeadDark: grey[600],
                        // divider: grey[700],
                        // background: {
                        //   default: grey[900],
                        //   paper: grey[900],
                        // },
                        // text: {
                        //   primary: '#fff',
                        //   secondary: grey[500],
                        // },
                      }),

                }
            }),
        [mode]
    )

    return theme

}
