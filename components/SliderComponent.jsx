import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink, green, blue, yellow, grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: green[500],
    },
    pink: {
      main: red[500],
    },
    green: {
      main: green[500],
    },
    blue: {
      main: blue[500],
    },
    yellow: {
      main: yellow[500],
    },
    grey: {
      main: grey[500],
    },
  },
});

function SliderComponent({ label, sliderColor, sliderChange }) {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    sliderChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container gap="0px" justifyContent="space-between" flexDirection="column" alignItems="center" width="150px">
        <Grid item justifyContent="center">
          <Typography id="input-slider">{label}</Typography>
        </Grid>
        <Grid item justifyContent="center" width="145px">
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            color={sliderColor}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SliderComponent;
