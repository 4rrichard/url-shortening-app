import "./App.css";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import TitleSection from "./components/TitleSection";
import "./reset.css";

function App() {
  return (
    <div className="all-section">
      <Header />
      <TitleSection />
      <InputSection />
      <BottomSection />
      <Footer />
      <div className="main-background"></div>
    </div>
  );
}

export default App;
