import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Posts from "./pages/posts";
import Users from "./pages/users";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://express-reactlab.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/post" element={<Post URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
