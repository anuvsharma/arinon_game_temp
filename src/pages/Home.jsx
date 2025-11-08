import Hero from "../components/HeroSection";
import FeaturedGames from "../components/FeaturedGames";
import AboutPreview from "../components/AboutPreview";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <AboutPreview />
      <ContactPreview />
      <Footer />
    </>
  );
}
