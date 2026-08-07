import carHatchback from "@/assets/car-hatchback.jpg";
import car1 from "@/assets/car_1.png";
import car2 from "@/assets/car_2.png";
import car3 from "@/assets/car_3.png";
import car4 from "@/assets/car_4.png";
import car5 from "@/assets/car_5.png";
import car6 from "@/assets/car_6.png";
import car7 from "@/assets/car_7.png";
import car8 from "@/assets/car_8.png";
import car9 from "@/assets/car_9.png";
import car10 from "@/assets/car_10.png";
import car11 from "@/assets/car_11.png";
import car12 from "@/assets/car_12.png";
import car13 from "@/assets/car_13.png";
import car14 from "@/assets/car_14.png";
import car15 from "@/assets/car_15.png";
import car16 from "@/assets/car_16.png";
import car17 from "@/assets/car_17.png";
import car18 from "@/assets/car_18.png";
import car19 from "@/assets/car_19.png";
import car20 from "@/assets/car_20.png";
import showroomHero from "@/assets/hero-showroom.png";
import showroomAbout from "@/assets/about-showroom.png";
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
    id: "hyundai-venue",
    name: "Huyundai venue S Diesel",
    year: 2019,
    price: 525000,
    brand: "Maruti Suzuki",
    fuel: "Diesel",
    km: 48000,
    transmission: "Manual",
    body: "Hatchback",
    image: car4,
  },
  {
    id: "Renault kwid",
    name: "Renault kwid",
    year: 2020,
    price: 1150000,
    brand: "Hyundai",
    fuel: "Petrol",
    km: 36500,
    transmission: "Automatic",
    body: "SUV",
    image: car2,
  },
  {
    id: "Maruti Swift",
    name: "Maruti Swift",
    year: 2018,
    price: 690000,
    brand: "Maruti Suzuki",
    fuel: "Petrol",
    km: 61200,
    transmission: "Manual",
    body: "Sedan",
    image: car1,
  },
  {
    id: "Thar jeep",
    name: "Thar jeep",
    year: 2019,
    price: 1450000,
    brand: "Toyota",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car3,
  },
  {
    id: "Thar jeep",
    name: "Thar jeep",
    year: 2019,
    price: 1450000,
    brand: "Toyota",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car5,
  },
   {
    id: "Toyota Fortuner",
    name: "Toyota Fortuner",
    year: 2019,
    price: 1450000,
    brand: "Toyota",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car6,
  },
   {
    id: "Tata nexon",
    name: "Tata nexon",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car7,
  },
   {
    id: "Tata tigor",
    name: "Tata tigor",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car8,
  },
  {
    id: "Honda Amaze",
    name: "Honda Amaze",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car9,
  },

   {
    id: "Maruti Swift Dzire",
    name: "Maruti Swift Dzire",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car10,
  },
  {
    id: "Toyota Innova crysta",
    name: "Toyota Innova crysta",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car11,
  },
  {
    id: "Volkswagen Vento",
    name: "Volkswagen Vento",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car12,
  },
  {
    id: "Toyota Hycross",
    name: "Toyota Hycross",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car13,
  },
    {
    id: "Hyundai i20",
    name: "Hyundai i20",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car14,
  },
  {
    id: "Toyota Innova Crysta",
    name: "Toyota Innova Crysta",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car15,
  },
  {
    id: "Toyota Qualis",
    name: "Toyota Qualis",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car16,
  },
  {
    id: "Toyota Glanza",
    name: "Toyota Glanza",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car17,
  },
  {
    id: "Nissan Micra",
    name: "Nissan Micra",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car18,
  },
  {
    id: "Maruti Suzuki SX4",
    name: "Maruti Suzuki SX4",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car19,
  },
  {
    id: "Maruti Suzuki Ertiga",
    name: "Maruti Suzuki Ertiga",
    year: 2019,
    price: 1450000,
    brand: "Tata",
    fuel: "Diesel",
    km: 74000,
    transmission: "Manual",
    body: "MUV",
    image: car20,
  },
];

export const testimonials = [
  {
    name: "Pavithra MuthuSelvam",
    rating: 5,
    quote:
      "Had a pleasant and professional experience with Rajan Cars. The car was in excellent condition, pricing was fair, and the documentation process was smooth. Highly recommended for quality second-hand cars.",
  },
  {
    name: "Raji Sivan",
    rating: 5,
    quote:
      "Rajan cars in Tiruchirappalli is a well rated used car dealer. The car condition was excellent and well maintained, exactly as promised. Pricing was reasonable and transparent. Highly recommend for anyone looking to buy a quality used car with peace of mind.",
  },
  {
    name: "Vasan Ak",
    rating: 5,
    quote:
      "Bought Alto 800 car 3 months before.100% quality car. Till now no problems faced.Best place to buy quality cars.",
  },
  {
    name: "Murugan Natarajan",
    rating: 5,
    quote:
      "Genuine dealer in Trichy city. 100% assured quality used cars. Check for your self. I bought alto Car the quality of the car is excellent, low mileage vehicle with Reasonable price.",
  },
];

/** Gallery placeholders — swap with real showroom photography. */

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
