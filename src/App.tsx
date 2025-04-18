import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <main className="app-container">
      <Navbar />

      <AppRoutes />

      <Footer />
    </main>
  );
}

export default App;
