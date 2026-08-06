import carHatchback from "@/assets/car-hatchback.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carMuv from "@/assets/car-muv.jpg";
import showroomHero from "@/assets/hero-showroom.png";
import showroomAbout from "@/assets/about-showroom.jpg";
import galleryFloor from "@/assets/gallery-floor.jpg";
import galleryHandover from "@/assets/gallery-handover.jpg";

/**
 * Central content file for Rajan Cars.
 * Swap real listings, photos and copy here — components read from this file.
 */

export const business = {
  name: "Rajan Cars",
  since: "1952",
  phone: "9842458666",
  phoneIntl: "919842458666",
  email: "rajancar@gmail.com",
  city: "Tiruchirappalli, Tamil Nadu",
  address:
    "No.165, Madurai Main Rd, opp. Amma Hotel, Bharathi Nagar, Crawford Colony, Tiruchirappalli, Tamil Nadu, India - 620012",
  mapEmbed:
    "https://www.google.com/maps?q=No.165,+Madurai+Main+Road,+Bharathi+Nagar,+Crawford+Colony,+Tiruchirappalli,+Tamil+Nadu+620012&output=embed",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Contact", href: "/contact/" },
];


export type Car = {
  id: string;
  name: string;
  year: number;
  price: number;
  brand: string;
  fuel: "Petrol" | "Diesel" | "CNG";
  km: number;
  transmission: "Manual" | "Automatic";
  body: "Hatchback" | "Sedan" | "SUV" | "MUV";
  image: string;
};

/** Placeholder inventory — replace image URLs with real showroom photos. */
export const cars: Car[] = [
  {
    id: "swift-vdi",
    name: "Maruti Suzuki Swift VDi",
    year: 2019,
    price: 525000,
    brand: "Maruti Suzuki",
    fuel: "Diesel",
    km: 48000,
    transmission: "Manual",
    body: "Hatchback",
    image: carHatchback,
  },
  {
    id: "hyundai-creta",
    name: "Hyundai Creta SX",
    year: 2020,
    price: 1150000,
    brand: "Hyundai",
    fuel: "Petrol",
    km: 36500,
    transmission: "Automatic",
    body: "SUV",
    image: carSuv,
  },
  {
    id: "honda-city",
    name: "Honda City VX",
    year: 2018,
    price: 690000,
    brand: "Honda",
    fuel: "Petrol",
    km: 61200,
    transmission: "Manual",
    body: "Sedan",
    image: carSedan,
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova Crysta",
    year: 2019,
    price: 1450000,
    brand: "Toyota",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: carMuv,
  },
  {
    id: "tata-nexon",
    name: "Tata Nexon XZ+",
    year: 2021,
    price: 880000,
    brand: "Tata",
    fuel: "Petrol",
    km: 27400,
    transmission: "Manual",
    body: "SUV",
    image: carSuv,
  },
  {
    id: "hyundai-i20",
    name: "Hyundai i20 Asta",
    year: 2020,
    price: 645000,
    brand: "Hyundai",
    fuel: "Petrol",
    km: 33100,
    transmission: "Automatic",
    body: "Hatchback",
    image: carHatchback,
  },
  {
    id: "maruti-dzire",
    name: "Maruti Suzuki Dzire ZXi",
    year: 2017,
    price: 465000,
    brand: "Maruti Suzuki",
    fuel: "CNG",
    km: 82500,
    transmission: "Manual",
    body: "Sedan",
    image: carSedan,
  },
  {
    id: "mahindra-xuv300",
    name: "Mahindra XUV300 W8",
    year: 2021,
    price: 935000,
    brand: "Mahindra",
    fuel: "Diesel",
    km: 41800,
    transmission: "Manual",
    body: "SUV",
    image: carSuv,
  },
];

export const testimonials = [
  {
    name: "Suresh Kumar",
    car: "Hyundai Creta SX (2020)",
    rating: 5,
    quote:
      "My family has bought cars from Rajan Cars for two generations. Honest pricing, no hidden surprises, and the car was exactly as described.",
  },
  {
    name: "Lakshmi Narayanan",
    car: "Maruti Suzuki Swift VDi (2019)",
    rating: 5,
    quote:
      "They arranged the loan, handled all the RC transfer paperwork and delivered within a week. Very smooth experience for a first-time buyer.",
  },
  {
    name: "Mohammed Faizal",
    car: "Toyota Innova Crysta (2019)",
    rating: 5,
    quote:
      "Sold my old car here and bought an Innova the same day. The valuation was fair and the exchange was settled without any bargaining drama.",
  },
  {
    name: "Priya Devi",
    car: "Hyundai i20 Asta (2020)",
    rating: 5,
    quote:
      "The team let me test drive three cars patiently and explained the service history of each one. Genuine people, genuinely trustworthy.",
  },
];

/** Gallery placeholders — swap with real showroom photography. */
export const gallery = [
  showroomHero,
  galleryFloor,
  showroomAbout,
  galleryHandover,
  carSuv,
  carSedan,
  carHatchback,
  carMuv,
];

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
