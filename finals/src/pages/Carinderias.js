import pula from './images/pula.png';
import pares from './images/pares.png';
import rainbow from './images/rainbow.png';
import AandA from './images/AandA.png';
import { Link } from "react-router-dom";
import "./Carinderias.css";
import carinderiaCover from "./images/carinderia-cover.png"

const cards = [ 
    { 
        id: 1, 
        title: "Red Alert", 
        image: pula, 
        description: "Looking for a student budget friendly tapsilogan and other carinderia foods? You can go here at Red Alert, aka Pula!",
        latitude: 14.629883,  
        longitude: 121.042340,  
        menu: [
            { 
                category: "Silog Meals", 
                items: [
                    { item: "Patsilog", price: "P60" },
                    { item: "Longsilog", price: "P70" },
                    { item: "Hotsilog", price: "P70" },
                    { item: "Porksilog", price: "P80" },
                    { item: "Tocilog", price: "P80" },
                    { item: "Tapsilog", price: "P90" },
                ]
            },
            {
                category: "Viands or Dishes",
                items: [
                    { item: "Dinuguan with Rice", price: "P75" },
                    { item: "Adobo with Rice", price: "P75" },
                    { item: "Nilagang Baka with Rice", price: "P105" },
                ]
            },
            {
                category: "Short Orders", 
                items: [
                    { item: "Pancit Bihon", price: "P45" },
                    { item: "Pancit Canton", price: "P45" },
                    { item: "Pancit Miki-Bihon", price: "P45" },
                    { item: "Beef Mami", price: "P50" },
                    { item: "Chicken Mami", price: "P50" },
                ]
            },
            {
                category: "Drinks", 
                items: [
                    { item: "Iced Coffee", price: "P20" },
                    { item: "Iced Milo", price: "P20" },
                    { item: "Melon Jelly Juice", price: "P30" },
                    { item: "Mango Jelly Juice", price: "P30" },
                    { item: "Iced Milk-Milo", price: "P45" },
                ]
            },
        ]
    },   
    { 
        id: 2, 
        title: "Merly's Paresan", 
        image: pares, 
        description: "If what suits your taste buds is a delicious pares or other food with soup like mami and goto that is affordable, go here!",
        latitude: 14.630783,  
        longitude: 121.041186,  
        menu: [
            {
                category: "Signature Dishes",
                items: [
                    { item: "Pares", price: "P50" },
                    { item: "Mami", price: "P50" },
                    { item: "Gotong Batangas", price: "P50" },
                ]
            },
            {
                category: "Drinks",
                items: [
                    { item: "RC Cola", price: "P20" },
                    { item: "Juicy Lemon Soda", price: "P20" },
                    { item: "Royal Soda", price: "P20" },
                ]
            },
        ] 
    },
    { 
        id: 3, 
        title: "Rainbow Carinderia", 
        image: rainbow, 
        description: "If you're looking for an affordable variety of food that fits right through your budget, you can go here!",
        latitude: 14.629663,  
        longitude: 121.041749,  
        menu: [
            {
                category: "Viands or Dishes",
                items: [
                    { item: "Ginisang Kalabasa with Alugbati Sitaw", price: "P50" },
                    { item: "Chicken Curry", price: "P70" },
                    { item: "Pork Chop Savory", price: "P75" },
                    { item: "Humba de Cebu", price: "P75" },
                    { item: "Pork Steak", price: "P75" },
                    { item: "Bicol Express", price: "P75" },
                    { item: "Sisig", price: "P75" },
                    { item: "Fish Fillet and Tartar Sauce", price: "P80" },
                    { item: "Meatballs with Miswa", price: "P85" },
                ]
            },
            {
                category: "Pasta",
                items: [
                    { item: "Palabok", price: "P35" },
                    { item: "Carbonara", price: "P40" },
                    { item: "Chicken Macaroni Salad", price: "P50" },
                ]
            },
            {
                category: "Dessert",
                items: [
                    { item: "Buchi Munggo", price: "P10" },
                ]
            },
        ] 
    },
    { 
        id: 4, 
        title: "A&A", 
        image: AandA, 
        description: "Looking for various menu of food and drinks that is student budget friendly? A&A is here!",
        latitude: 14.629341,  
        longitude: 121.043909,  
        menu: [
            { 
                category: "Silog Meals", 
                items: [
                    { item: "Hotsilog", price: "P65" },
                    { item: "Rice with Double Patty", price: "P65" },
                    { item: "Salami Silog", price: "P65" },
                    { item: "Siomai Silog", price: "P65" },
                    { item: "Baloney Silog", price: "P65" },
                    { item: "Rice with 1 Patty 2 Siomai", price: "P75" },
                    { item: "Hamsilog", price: "P75" },
                    { item: "2 Skinless Silog", price: "P75" },
                    { item: "Shanghai Silog", price: "P75" },
                    { item: "Cornedbeef Silog", price: "P90" },
                    { item: "Tapsilog", price: "P95" },
                    { item: "Bacsilog", price: "P95" },
                    { item: "Hungarian Silog", price: "P95" },
                    { item: "Tocilog", price: "P95" },
                    { item: "Breakfast Longganisa", price: "P95" },
                    { item: "Longsilog", price: "P95" },
                    { item: "Bangsilog", price: "P115" },
                    { item: "Sisilog", price: "P15" },
                    { item: "Liempo Silog", price: "P120" },
                    { item: "Porksilog", price: "P120" },
                ]
            },
            {
                category: "Sizzling for only P99, unli rice, unli gravy, and 1 free cup of drink",
                items: [
                    { item: "Sizzling T-Bone Steak", price: "P99" },
                    { item: "Sizzling Adobo", price: "P99" },
                    { item: "Sizzling Lechon Kawali", price: "P99" },
                    { item: "Sizzling Chicken Leg", price: "P99" },
                    { item: "Sizzling Beef Supreme Quarter Pounder", price: "P99" },
                    { item: "Sizzling Porkchop", price: "P99" },
                    { item: "Sizzling Liempo", price: "P99" },
                    { item: "Sizzling Hungarian", price: "P99" },
                    { item: "Sizzling Tapa", price: "P99" },
                    { item: "Sizzling Tocino", price: "P99" },
                    { item: "Sizzling Pork Sisig", price: "P99" },
                    { item: "Sizzling Pusit", price: "P99" },
                    { item: "Sizzling Creamy Tofy", price: "P99" },
                    { item: "Sizzling Tilapia", price: "P99" },
                    { item: "Sizzling Bangus", price: "P99" },
                    { item: "Sizzling Kingsize TJ Hotdog", price: "P99" },
                    { item: "Sizzling Hungarian", price: "P99" },
                    { item: "Sizzling Tapa", price: "P99" },
                ]
            },
            { 
                category: "Extra Add Ons", 
                items: [
                    { item: "Egg", price: "P20" },
                    { item: "Gravy (for takeout)", price: "P20" },
                    { item: "Java Rice (for takeout)", price: "P20" }, 
                ]
            },
            {
                category: "Pares Meals", 
                items: [
                    { item: "Pares only (no rice)", price: "P55" },
                    { item: "Pares with rice", price: "P65" },
                    { item: "Pares with Noodles", price: "P65" },
                    { item: "Pares Bagnet", price: "P75" },
                    { item: "Lechon Beef Pares UNLI", price: "P100" },
                    { item: "Pares Special", price: "P156" },
                ]
            },
            {
                category: "Rice Meal, No Egg", 
                items: [
                    { item: "Rice with 2 BBQ", price: "P75" },
                    { item: "Rice ALA King", price: "P120" },
                    { item: "Rice with Buttered Shrimp", price: "P120" },
                ]
            },
            {
                category: "Lucky Me, Paluto", 
                items: [
                    { item: "Calamansi", price: "P35" },
                    { item: "Chilimansi", price: "P35" },
                    { item: "Sweet and Spicy", price: "P35" },
                    { item: "Buttered Shrimp", price: "P35" },
                ]
            },
            {
                category: "Drinks, Patimpla", 
                items: [
                    { item: "3in1 Coffee", price: "P20" },
                    { item: "Milo", price: "P18" },
                    { item: "Nescafe Stick Black", price: "P18" },
                ]
            },
            {
                category: "Milktea, 16oz and 22oz", 
                items: [
                    { item: "Taro", price: "P39/49" },
                    { item: "Matcha", price: "P39/49" },
                    { item: "Red Velvet", price: "P39/49" },
                    { item: "Okinawa", price: "P39/49" },
                    { item: "Wintermelon", price: "P39/49" },
                    { item: "Cookies and Cream", price: "P39/49" },
                    { item: "Chocolate", price: "P39/49" },
                ]
            },
            {
                category: "Fruit Shakes, Medium and Large", 
                items: [
                    { item: "Avocado", price: "P85/95" },
                    { item: "Mango", price: "P85/95" },
                    { item: "Guyabano", price: "P85/95" },
                    { item: "Papaya", price: "P85/95" },
                    { item: "Dragon Fruit", price: "P85/95" },
                    { item: "Melon", price: "P85/95" },
                ]
            },
        ]
    },   
];


export const carinderiaData = cards;

export default function Carinderias() {
    return (
        <>
         <img src={carinderiaCover} alt="carinderia cover page" className="carinderia-cover"/>
            <h1 className='carinderias-title'>Carinderias</h1>
        <div className='carinderia-container'>
            <div className="card-container">
                {cards.map((card) => (
                    <Link to={`/card/${card.id}`} key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
