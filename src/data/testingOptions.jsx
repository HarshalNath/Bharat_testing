import React from "react";
import {
  Microscope,
  TestTube2,
  Atom,
  Bug,
  ShieldCheck,
  Droplets,
} from "lucide-react";

export const testingOptions = [
  {
    title: "Materials Testing",
    description:
      "Comprehensive analysis of material properties, composition, and performance.",
    icon: <Microscope className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Chemical Analysis",
    description:
      "Detailed chemical composition testing and quality control services.",
    icon: <TestTube2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Environmental Testing",
    description:
      "Assessment of environmental samples for contamination and compliance.",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Microbiological Testing",
    description: "Detection and analysis of microorganisms in various samples.",
    icon: <Bug className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive quality control and validation services.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Research & Development",
    description: "Supporting innovation with advanced analytical services.",
    icon: <Atom className="w-6 h-6 text-blue-600" />,
  },
];
