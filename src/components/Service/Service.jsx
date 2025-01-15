import { h1 } from "framer-motion/client";
import React from "react";
import Navbar from "../Navigation/Navbar";
import { Shield } from "lucide-react";

const Service = () => {
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

export default Service;

// import React from 'react'
// import { Button } from "/components/ui/button"
// import { Card, CardContent, CardDescription, CardTitle } from "/components/ui/card"
// import { Shield, Clock, Users } from "lucide-react"

// export default function BloodTestsPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Header Section */}
//       <header className="px-4 lg:px-6 h-14 flex items-center shadow-md">
//         <a className="flex items-center justify-center" href="#">
//           <Shield className="h-6 w-6 text-primary" />
//           <span className="sr-only">Health Testing Lab</span>
//         </a>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Home
//           </a>
//           <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Services
//           </a>
//           <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About Us
//           </a>
//           <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </a>
//           <Button>Book Now</Button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
//         <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
//           <div className="space-y-4">
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//               Blood Tests
//             </h1>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//               Comprehensive blood tests to assess your overall health.
//             </p>
//           </div>
//           <div className="space-x-4 mt-8">
//             <Button>Book Your Test Today</Button>
//             <Button variant="outline" href="/services">Back to Services</Button>
//           </div>
//         </div>
//       </section>

//       {/* Detailed Services Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Comprehensive Blood Tests</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Shield className="h-12 w-12 text-primary" />
//                 <CardTitle>Complete Blood Count (CBC)</CardTitle>
//                 <CardDescription>Assesses your overall health and detects conditions like anemia, infections, and leukemia.</CardDescription>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Clock className="h-12 w-12 text-primary" />
//                 <CardTitle>Lipid Profile</CardTitle>
//                 <CardDescription>Measures cholesterol levels to assess heart health and risk of heart disease.</CardDescription>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Users className="h-12 w-12 text-primary" />
//                 <CardTitle>Comprehensive Metabolic Panel (CMP)</CardTitle>
//                 <CardDescription>Evaluates your liver, kidney, and electrolyte function, as well as blood sugar levels.</CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Additional Information Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Why Choose Our Blood Tests?</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Shield className="h-12 w-12 text-primary" />
//                 <CardTitle>Accurate Results</CardTitle>
//                 <CardDescription>Our state-of-the-art equipment ensures precise and reliable test results.</CardDescription>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Clock className="h-12 w-12 text-primary" />
//                 <CardTitle>Quick Turnaround</CardTitle>
//                 <CardDescription>Receive your results within 24-48 hours, allowing for timely medical intervention.</CardDescription>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
//                 <Users className="h-12 w-12 text-primary" />
//                 <CardTitle>Expert Staff</CardTitle>
//                 <CardDescription>Our certified professionals provide accurate and compassionate care.</CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">What Our Patients Say</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardContent className="p-6 space-y-2">
//                 <p className="text-gray-500 dark:text-gray-400">
//                   "The blood tests were quick and the results were accurate. I felt very comfortable with the staff."
//                 </p>
//                 <div className="flex items-center space-x-2">
//                   <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
//                   <div>
//                     <p className="font-medium">John Doe</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 space-y-2">
//                 <p className="text-gray-500 dark:text-gray-400">
//                   "I was impressed with the speed of the results and the friendly service. Highly recommend!"
//                 </p>
//                 <div className="flex items-center space-x-2">
//                   <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
//                   <div>
//                     <p className="font-medium">Jane Smith</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 space-y-2">
//                 <p className="text-gray-500 dark:text-gray-400">
//                   "The staff was very knowledgeable and made me feel at ease during the process."
//                 </p>
//                 <div className="flex items-center space-x-2">
//                   <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
//                   <div>
//                     <p className="font-medium">Alice Johnson</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Health Testing Lab. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <a className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </a>
//           <a className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </a>
//         </nav>
//       </footer>
//     </div>
//   )
// }
