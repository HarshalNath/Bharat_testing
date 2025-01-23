import CompaniesMain from "./components/CompaniesMain";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navigation/Navbar";
import TestingServices from "./components/Services/TestingServices";
import Testimonial from "./components/Testimonial";
import Testomonial from "./components/Testomonial";
import WhatsappEnquiry from "./components/WhatsappEnquiry";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsappEnquiry />
      <TestingServices />
      <CompaniesMain />
      <WhyChooseUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
