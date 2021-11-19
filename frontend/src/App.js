import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Typography variant="h4">Application Page</Typography>
      </div>
      <Footer />
    </div>
  );
}

export default App;
