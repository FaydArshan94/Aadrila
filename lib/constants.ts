export interface Product {
  id: number;
  tag: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
  reverse?: boolean;
  circleImage: string;
}

export const products: Product[] = [
  {
    id: 1,
    tag: "DocSim",
    title: "AI-Powered Document Similarity Engine",
    description: "Detect, compare, and analyze document similarities with precision.",
    features: [
      "Advanced AI-based document comparison",
      "Multi-format support for diverse documents",
      "High-speed processing for large datasets",
    ],
    benefits: [
      "Improves accuracy in document analysis",
      "Reduces manual effort significantly",
    ],
    image: "/docSim.png",
    ctaPrimary: "Learn More",
    ctaSecondary: "Schedule Demo",
    circleImage: "/Combined-Shape-Copy.svg",
  },
  {
    id: 2,
    tag: "DocPilot",
    title: "Streamline Document Workflows with Automation",
    description: "Automate document processes and increase productivity.",
    features: [
      "Automated document routing",
      "Custom workflow creation",
    ],
    benefits: [
      "Faster turnaround times",
      "Improved operational efficiency",
    ],
    image: "/docPilot.png",
    ctaPrimary: "Learn More",
    ctaSecondary: "Schedule Demo",
    reverse: true,
    circleImage: "/Combined-Shape-Copy.svg",
  },
  {
    id: 3,
    tag: "Doxtract",
    title: "Extract, Validate, and Process Documents with Ease",
    description: "Seamless data extraction powered by AI.",
    features: [
      "AI-driven data extraction",
      "High validation accuracy",
    ],
    benefits: [
      "Minimizes errors",
      "Enhances data reliability",
    ],
    image: "/doxTract.png",
    ctaPrimary: "Learn More",
    ctaSecondary: "Schedule Demo",
    circleImage: "/Combined-Shape-Copy.svg",
  },
];
