import React from "react";
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    primary: { 
      main: "#fff",
    },
    type: "dark",
  },
});

const useStyles = makeStyles(() => ({
    title:{
        fontWeight:"bold",
        color:"#0D6EFD",
        fontSize:20,
        
    }
}))

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>CRUD APP-FIREBASE</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
