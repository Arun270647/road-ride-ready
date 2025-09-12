import swiftImg from "@/assets/cars/swift.jpeg"; 
import glanzaImg from "@/assets/cars/glanzag.avif";
import balenoImg from "@/assets/cars/baleno.jpg"; 
import wagnorImg from "@/assets/cars/wagnor.webp";
import indicaImg from "@/assets/cars/indica.avif";
import xuvImg from "@/assets/cars/xuv.webp"; 
import pajeroImg from "@/assets/cars/pajero.jpg";
import scorpioImg from "@/assets/cars/scorpio.jpg"; 
import busImg from "@/assets/cars/bus.jpg"; 
import vanImg from "@/assets/cars/van.jpg";
import tempoImg from "@/assets/cars/tempo.png"; 
import innovaimg from "@/assets/cars/innova.jpeg"; 
import crystaimg from "@/assets/cars/crysta.webp"; 

export const smallVehicles = [
    { name: "Swift", image: swiftImg, passenger: "4+1", luggage: 2, doors: 4, description: "A popular choice for its sporty look and fuel efficiency. The Swift is perfect for navigating city streets with ease, offering a zippy performance and a comfortable ride." },
    { name: "Glanza", image: glanzaImg, passenger: "4+1", luggage: 2, doors: 4, description: "Known for its premium features and comfortable ride. The Toyota Glanza combines elegant design with advanced technology, making it an excellent choice for both city commutes and weekend getaways." },
    { name: "Baleno", image: balenoImg, passenger: "4+1", luggage: 2, doors: 4, description: "A stylish hatchback with a spacious interior and modern tech. The Baleno offers a premium cabin experience, ample boot space, and a smooth, refined engine for a delightful driving experience." },
    { name: "Wagnor", image: wagnorImg, passenger: "3+1", luggage: 2, doors: 2, description: "An iconic off-roader with a rugged design and go-anywhere capabilities. Perfect for adventurous trips and making a style statement." },
    { name: "Indica", image: indicaImg, passenger: "4+1", luggage: 3, doors: 4, description: "A popular compact SUV that offers a perfect blend of style, comfort, and performance. Ideal for families and long drives." },
];
  
export const largeVehicles = [
    { name: "XUV", image: xuvImg, passenger: "6+1", luggage: 4, doors: 4, description: "A feature-packed SUV with a commanding road presence. It offers three-row seating, advanced safety features, and a powerful engine, making it ideal for large families and long road trips." },
    { name: "Pajero", image: pajeroImg, passenger: "6+1", luggage: 5, doors: 4, description: "A legendary off-roader known for its ruggedness and reliability. The Pajero can conquer any terrain with its robust build and powerful 4x4 capabilities, ensuring a safe and thrilling adventure." },
    { name: "Innova", image: innovaimg, passenger: "6+1", luggage: 4, doors: 4, description: "The benchmark for comfort and space in the MPV segment. The Innova is renowned for its captain seats, premium interior, and reliable performance, making it a top choice for family travel." },
    { name: "Crysta", image: crystaimg, passenger: "6+1", luggage: 4, doors: 4, description: "A premium MPV offering luxury, comfort, and powerful performance. The Innova Crysta takes travel to the next level with its plush interiors, advanced features, and effortless highway cruising." },
    { name: "Scorpio", image: scorpioImg, passenger: "6+1", luggage: 4, doors: 4, description: "A tough and durable SUV with a powerful engine. The Scorpio's muscular design and high seating position provide a commanding view of the road, perfect for both city and rural landscapes." },
];

export const vansAndBuses = [
    { name: "Van", image: vanImg, passenger: "8+", luggage: 10, doors: 4, description: "Ideal for group travel, offering ample space for passengers and luggage. Our vans are perfect for corporate outings, family functions, or any event requiring comfortable group transportation." },
    { name: "Mini Bus", image: busImg, passenger: "20+", luggage: 25, doors: 2, description: "Suitable for larger groups and short-distance tours, providing comfortable seating for everyone on board." },
];

export const tempos = [
    { name: "Tempo Traveller", image: tempoImg, passenger: "12+", luggage: 15, doors: 4, description: "The perfect solution for large group outings and long-distance travel. With comfortable seating for 12+ passengers and plenty of room for luggage, it's the ultimate choice for group tours." },
    { name: "Luxury Tempo Traveller", image: tempoImg, passenger: "12+", luggage: 15, doors: 4, description: "Experience premium travel with recliner seats, AC, and entertainment systems for ultimate comfort on the go." },
];

export const allCars = [...smallVehicles, ...largeVehicles, ...vansAndBuses, ...tempos];