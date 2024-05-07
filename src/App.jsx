import { CategoryBar } from "./components/CategoryBar";
import { ExperienceGallery } from "./components/ExperienceGallery";
import { Footer } from "./components/Footer";
import { Inspiration } from "./components/Inspiration";
import { Navbar } from "./components/Navbar";
import { UsefulLinks } from "./components/UsefulLinks";

function App() {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <ExperienceGallery />
      <Inspiration />
      <UsefulLinks />
      <Footer />
    </>
  );
}

export default App;
