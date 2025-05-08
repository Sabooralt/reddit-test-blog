import "./App.css";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import InnerSection from "./components/InnerSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <InnerSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
