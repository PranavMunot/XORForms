import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
import Form from "./Components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewData from "./Components/View/ViewData";
import Response from "./Components/Responses/Response";
import Login from "./Auth/login";
import { useSelector } from "react-redux";
import Dashboard from "./SharedComponent/Dashboard/Dashboard";

const ThemeColor = createTheme({
  palette: {
    primary: {
      main: "#12916f",
    },
  },
});

function App() {
  const authenticate = useSelector((state) => state.auth);

  return (
    <div className="App">
      <ThemeProvider theme={ThemeColor}>
        <Router>
          <Header />
          <div className="app">
            {authenticate.isLoggedin ? (
              <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/preview" element={<ViewData />} />
                <Route path="/response" element={<Response />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="*" element={<Login />} />
                {/* <Route path="/preview" element={<ViewData />} /> */}
                {/* <Route path="/response" element={<Response />} /> */}
              </Routes>
            )}
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
