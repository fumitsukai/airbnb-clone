import { CategoryBar } from "./components/CategoryBar";
import { ExperienceGallery } from "./components/ExperienceGallery";
import { Footer } from "./components/Footer";
import { Inspiration } from "./components/Inspiration";
import { Navbar } from "./components/Navbar";
import { SignupModal } from "./components/SignupModal";
import { UsefulLinks } from "./components/UsefulLinks";
import { useState } from "react";

function App() {
  const [toggleSignUp, setToggleSignUp] = useState(true);
  return (
    <>
      <div
        className={`z-50 h-full w-full bg-black fixed bg-opacity-50 pt-16 ${
          toggleSignUp == true ? "block" : "hidden"
        }`}
      >
        <SignupModal
          toggleSignUp={toggleSignUp}
          setToggleSignUp={setToggleSignUp}
        />
      </div>
      <Navbar setToggleSignUp={setToggleSignUp} />

      <ExperienceGallery />
      <Inspiration />
      <UsefulLinks />
      <Footer />
    </>
  );
}

export default App;
