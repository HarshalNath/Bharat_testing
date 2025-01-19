import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navigation/Navbar";
import TestingServices from "./components/Services/TestingServices";
import WhatsappEnquiry from "./components/WhatsappEnquiry";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsappEnquiry />
      <TestingServices />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
