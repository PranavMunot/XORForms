import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
<<<<<<< HEAD
import Sidenav from "./SharedComponent/SideNav/SideNav";

const ThemeColor = createTheme({
  palette:{
    primary:{
      main: '#12916f'
    }
  }
})
=======
import { Typography } from "@mui/material";
>>>>>>> 3349734f7833157e6360ff0986335a5a08726b8a

function App() {
  return (
    
    <div className="App">
<<<<<<< HEAD
     <ThemeProvider theme={ThemeColor}>
     <Header />
      <div className="app"></div>
=======
      <Header />
      <div className="app">
        <Typography variant="h4">Application Page</Typography>
      </div>
>>>>>>> 3349734f7833157e6360ff0986335a5a08726b8a
      <Footer />
</ThemeProvider>
      

    </div>
  );
}

export default App;
