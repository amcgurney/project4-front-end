import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT COMPONENTS
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Show from "./pages/show_user";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://proj4-bckend.herokuapp.com/"; 

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
            <Route path="/user" element={<Users URL={URL} />} />
          <Route path="/user/:id" element={<Show URL={URL} />} />
        </Routes> 
    </div>
  );
}
export default App;
