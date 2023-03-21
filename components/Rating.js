import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import React from 'react'
import { ThemeProvider,createTheme } from '@mui/material/styles';


const Ratings = ({value}) => {
    let theme = createTheme()
  return (
    <ThemeProvider theme={theme}>

<Stack spacing={1}>
        <Rating size="small" value={Number(value)} readOnly />
    </Stack>
    </ThemeProvider>

  )
}

export default Ratings



