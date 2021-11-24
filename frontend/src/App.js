import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
<<<<<<< HEAD
import Sidenav from "./SharedComponent/SideNav/SideNav";
=======

import Form from "./Components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Components/ReduxToolkit/Store";
import ViewData from "./Components/View/ViewData";
import Response from "./Components/Responses/Response";
>>>>>>> 5bf8baa1e5f62ced76a104312d9137234b249672

const ThemeColor = createTheme({
  palette: {
    primary: {
<<<<<<< HEAD
      main: '#12916f'
    }
  }
})

=======
      main: "#12916f",
    },
  },
});
>>>>>>> 5bf8baa1e5f62ced76a104312d9137234b249672

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThemeColor}>
<<<<<<< HEAD
        <Header />
        <div className="app"></div>
        <Footer />
=======
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
>>>>>>> 5bf8baa1e5f62ced76a104312d9137234b249672
      </ThemeProvider>
    </div>
  );
}

export default App;
