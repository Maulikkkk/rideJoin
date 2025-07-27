// App.jsx
import React, { useState } from "react";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Navbar />
      {showSplash ? (
        <IntroSplash onDone={() => setShowSplash(false)} />
      ) : (
        <>
          <Hero />
          <WhatWeDo />
          <HowItWorks />
          <FAQs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App; 
