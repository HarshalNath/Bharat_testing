import { Link } from "react-router";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Advanced Testing Solutions for Tomorrow's Innovations
      </h1>
      <p className="text-xl text-blue-100 mb-8">
        Comprehensive laboratory testing services with state-of-the-art
        facilities and expert analysis.
      </p>

      <Link to={"../../auth/"}>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HeroContent;
