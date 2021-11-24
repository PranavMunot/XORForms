import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
import Sidenav from "./SharedComponent/SideNav/SideNav";

const ThemeColor = createTheme({
  palette: {
    primary: {
      main: '#12916f'
    }
  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThemeColor}>
        <Header />
        <div className="app"></div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
