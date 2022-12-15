import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Navbar />
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
