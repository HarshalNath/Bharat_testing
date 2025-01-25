import React from "react";
import Navbar from "../Navigation/Navbar";
import { Shield } from "lucide-react";

const Service3 = () => {
  return (
    <>
      <Navbar />
      {/* main hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24 bg-gradient-to-r from-[#365486] to-[#0F1035] text-white">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
              Comphrensive Testing
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400  ">
              Get a wide range of health tests to cover all your needs.
            </p>
          </div>
          <div className="space-x-4 mt-8">
            <button
              className="bg-[#0F1035] text-white px-6 py-4 rounded-lg
          "
            >
              Book Your test today
            </button>
          </div>
        </div>
      </section>

      {/* services why the reason  */}

      <section className="w-full py-12 md:py-24 lg:py-20">
        <div className="container px-4 md:px-6">
          {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Comprehensive Testing
        </h2> */}
          <div className="flex  items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Comprehensive Testing?
              </h3>
              <p className="text-gray-500 mb-4">
                Our comprehensive testing services cover a wide range of health
                parameters to ensure a thorough assessment of your health. We
                use the latest technology and techniques to provide accurate and
                reliable results.
              </p>
              <ul className="list-disc list-inside mb-8">
                <li>Wide range of tests</li>
                <li>Accurate and reliable results</li>
                <li>Latest technology and techniques</li>
                <li>Comprehensive health assessment</li>
              </ul>
              <button
                className="bg-[#0F1035] text-white px-6 py-4 rounded-lg
          "
              >
                Book Your Test Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* benefit section */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Benefits of Comprehensive Testing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className=" border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="font-bold text-2xl">Peace of Mind</h1>
              <p className="text-sm text-gray-600 ">
                Know your health status with comprehensive testing.
              </p>
            </div>
            <div className=" border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="font-bold text-2xl">Early Detection</h1>
              <p className="text-sm text-gray-600 ">
                Identify health issues early for better treatment outcomes.
              </p>
            </div>
            <div className=" border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="font-bold text-2xl">Personalized Care</h1>
              <p className="text-sm text-gray-800 ">
                Receive personalized health recommendations based on your test
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service3;
