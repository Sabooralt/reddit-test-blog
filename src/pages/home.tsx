import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import InnerSection from "../components/InnerSection";
import Navbar from "../components/Navbar";
import { SlidingTextCTA } from "../components/SlidingTextCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <InnerSection />
      <BlogSection />
      <SlidingTextCTA />
      <Footer />
    </>
  );
}
