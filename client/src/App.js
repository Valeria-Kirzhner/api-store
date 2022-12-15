import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/premiumSignup" component={<Home />} />
          <Route path="/signup" component={<Home />} />
          <Route path="/signin" component={<Home />} />
          <Route path="/logout" component={<Home />} />

          <Route path="/" exact component={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
