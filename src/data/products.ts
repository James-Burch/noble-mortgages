// Product data for homepage cards

export interface ProductCard {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  type: "mortgage" | "insurance";
}

export const mortgageProducts: ProductCard[] = [
  {
    id: "first-time-buyers",
    title: "First Time Buyers",
    description:
      "Get on the property ladder with our specialist advice and access to exclusive schemes",
    link: "/mortgages/first-time-buyers",
    image: "/images/image1.webp",
    type: "mortgage",
  },
  {
    id: "home-mover",
    title: "Home Mover",
    description:
      "Moving up the property ladder? We'll find you the best deals for your next home",
    link: "/mortgages/home-mover",
    image: "/images/image3.webp",
    type: "mortgage",
  },
  {
    id: "remortgage",
    title: "Remortgage",
    description:
      "Save money with a better deal on your existing property with our remortgage service",
    link: "/mortgages/remortgage",
    image: "/images/image2.webp",
    type: "mortgage",
  },
  {
    id: "buy-to-let",
    title: "Buy to Let",
    description:
      "Build your property portfolio with competitive buy-to-let mortgage solutions",
    link: "/mortgages/buy-to-let",
    image: "/images/apartmentblock.webp",
    type: "mortgage",
  },
  {
    id: "new-build",
    title: "New Build",
    description:
      "Specialist mortgages for new build properties with expert guidance throughout",
    link: "/mortgages/new-build",
    image: "/images/image4.webp",
    type: "mortgage",
  },
  {
    id: "help-to-buy",
    title: "Help to Buy",
    description:
      "Access government schemes and specialist advice for Help to Buy mortgages",
    link: "/mortgages/help-to-buy",
    image: "/images/image3.webp",
    type: "mortgage",
  },
  {
    id: "limited-companies",
    title: "Limited Companies",
    description:
      "Buy-to-let mortgages through limited companies for tax efficiency and portfolio growth",
    link: "/mortgages/limited-companies",
    image: "/images/image17.webp",
    type: "mortgage",
  },
  {
    id: "bridging-loans",
    title: "Bridging Loans",
    description:
      "Fast, flexible financing to bridge the gap between buying and selling property",
    link: "/mortgages/bridging-loans",
    image: "/images/bridgeimage.webp",
    type: "mortgage",
  },
  {
    id: "self-employed",
    title: "Self-Employed",
    description:
      "Specialist mortgage solutions for self-employed and contractor borrowers",
    link: "/mortgages/self-employed",
    image: "/images/image7.webp",
    type: "mortgage",
  },
];

export const insuranceProducts: ProductCard[] = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    description:
      "Financial protection for your family in the event of your death",
    link: "/insurance/life-insurance",
    image: "/images/lifeinsurance.webp",
    type: "insurance",
  },
  {
    id: "income-protection",
    title: "Income Protection",
    description:
      "Replace up to 70% of your income if you cannot work due to illness or injury",
    link: "/insurance/income-protection",
    image: "/images/incomeprotection.webp",
    type: "insurance",
  },
  {
    id: "critical-illness",
    title: "Critical Illness Cover",
    description: "Lump sum payment following diagnosis of a serious illness",
    link: "/insurance/critical-illness",
    image: "/images/image6.webp",
    type: "insurance",
  },
  {
    id: "accident-sickness-unemployment",
    title: "Accident, Sickness & Unemployment",
    description:
      "Short-term cover for mortgage payments during illness, injury, or redundancy",
    link: "/insurance/accident-sickness-unemployment",
    image: "/images/unemploymentinsurance.webp",
    type: "insurance",
  },
  {
    id: "home-buildings-contents",
    title: "Home, Buildings & Contents Insurance",
    description: "Comprehensive protection for your property and belongings",
    link: "/insurance/home-buildings-contents",
    image: "/images/homeinsurance.webp",
    type: "insurance",
  },
];
