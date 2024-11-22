import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { carinderiaData } from "./Carinderias";
import "./CardDetails.css";
import { useCartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
import { db } from "../firebase/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api'; 

function CardDetails() {
    const { id } = useParams();
    const cardDetail = carinderiaData.find(card => card.id === Number(id));
    const { addToCart } = useCartContext(); 
    const { user, loading } = useContext(UserContext);

    const fallbackLat = 14.629463;
    const fallbackLng = 121.041962;

    const origin = { lat: fallbackLat, lng: fallbackLng };
    const destination = {
        lat: cardDetail?.latitude || fallbackLat,
        lng: cardDetail?.longitude || fallbackLng,
    };

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isMapLoading, setIsMapLoading] = useState(true); 

    useEffect(() => {
        if (isMapLoaded) {
            const directionsService = new window.google.maps.DirectionsService();

            directionsService.route(
                {
                    origin,
                    destination,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === "OK") {
                        setDirectionsResponse(result);
                    } else {
                        console.error(`Directions request failed: ${status}`);
                    }
                    setIsMapLoading(false); 
                }
            );
        }
    }, [isMapLoaded, origin, destination]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = async (menuItem) => {
        if (!user) {
            alert("You need to be logged in to add orders to the cart.");
            return;
        }

        const cartRef = collection(db, "users", user.uid, "cart");

        try {
            const cartItem = {
                item: menuItem.item,
                price: menuItem.price,
                carinderiaId: cardDetail.id,
                createdAt: new Date(),
            };

            await addDoc(cartRef, cartItem);
            addToCart(menuItem);

            alert(`${menuItem.item} has been added to your cart!`);
        } catch (e) {
            console.error("Error adding to cart: ", e);
        }
    };

    return (
        <div className="card-detail-container">
            <Link to="/carinderias"><i className="bi bi-arrow-left"></i></Link>
            <div>
                {cardDetail ? (
                    <>
                        <h1>{cardDetail.title}</h1>
                        <p>{cardDetail.description}</p>
                        <h2>The Menu</h2>
                        <div className="menu-list">
                            {cardDetail?.menu?.length > 0 ? (
                                cardDetail.menu.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="menu-category">
                                        <h4 className="category-title">{category.category}</h4>
                                        {category.items.map((menuItem, index) => (
                                            <div key={index} className="menu-card">
                                                <div className="menu-item">
                                                    <p>{menuItem.item} - <span className="price">{menuItem.price}</span></p>
                                                </div>
                                                <button 
                                                    onClick={() => handleAddToCart(menuItem)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <p>No menu available.</p>
                            )}
                        </div>
                        <h1>Map Guide</h1>
                        <p>From CIIT to {cardDetail.title}</p>
                        <LoadScript 
                            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onLoad={() => setIsMapLoaded(true)}  
                        >
                            {isMapLoading && <div className="loading-spinner">Loading map...</div>}
                            <GoogleMap
                                mapContainerStyle={{
                                    height: "300px",
                                    marginTop: "20px",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                                }}
                                center={destination}
                                zoom={15}
                            >
                                <Marker position={destination} title={cardDetail?.title || "Carinderia Location"} />
                                <Marker position={origin} title="Starting Location" />
                                
                                {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                            </GoogleMap>
                        </LoadScript>
                    </>
                ) : (
                    <p>Card not found.</p>
                )}
            </div>
            <div style={{ marginTop: "7%" }}>
                <Link to="/review" className="reviewLink">
                    <p className="reviewRoute" style={{ margin: "0 50px" }}>Leave a review</p>
                </Link>
                <h1>Reviews</h1>
                <p>No reviews yet.</p>
            </div>
        </div>
    );
}

export default CardDetails;
