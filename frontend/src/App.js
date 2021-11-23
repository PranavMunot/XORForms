import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";

import Form from "./Components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Components/ReduxToolkit/Store";
import ViewData from "./Components/View/ViewData";
import Response from "./Components/Responses/Response";

const ThemeColor = createTheme({
  palette: {
    primary: {
      main: "#12916f",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThemeColor}>
        <Router>
          <Header />
          <div className="app">
            <Provider store={Store}>
              <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/preview" element={<ViewData />} />
                <Route path="/response" element={<Response />} />
              </Routes>
            </Provider>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
