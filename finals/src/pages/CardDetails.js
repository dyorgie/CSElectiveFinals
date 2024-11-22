import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { carinderiaData } from './Carinderias';
import { db, auth } from './firebaseConfig';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import "./CardDetails.css";
import Review from "./Review";
import { Link } from "react-router-dom";


function CardDetails() {
    const { id } = useParams();
    const cardDetail = carinderiaData.find(card => card.id === Number(id));
    const [userCart, setUserCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = auth.currentUser;

    //fetch the user's cart from firestore
    useEffect(() => {
        if (user) {
            const fetchCart = async () => {
                const userDoc = doc(db, 'users', user.uid);
                const userData = await getDoc(userDoc);

                if (userData.exists()) {
                    setUserCart(userData.data().cart || []);
                }
                setLoading(false);
            };
            fetchCart();
        } else {
            setLoading(false);
        }
    }, [user]);


    //adding item to cart
    const addToCart = async (item) => {
        if (!user) {
            alert('You must be logged in to add items to the cart.');
            return;
        }
        const itemToAdd = {
            itemName: item.item,
            price: item.price,
            quantity: 1,
        };

        try {
            const userDoc = doc(db, 'users', user.uid);
            const userData = await getDoc(userDoc);
                
                //has a cart and will update
            if (userData.exists()) {
                const currentCart = userData.data().cart || [];
                const existingItemIndex = currentCart.findIndex(cartItem => cartItem.itemName === itemToAdd.itemName);

                //item exists, updates the quantity
                if (existingItemIndex !== -1) {
                    currentCart[existingItemIndex].quantity += 1;
                    await updateDoc(userDoc, {
                        cart: currentCart,
                    });
                //new item to add to cart
                } else {
                    await updateDoc(userDoc, {
                        cart: arrayUnion(itemToAdd),
                    });
                }
                //no user data, new cart
            } else { 
                await setDoc(userDoc, {
                    cart: [itemToAdd],
                });
            }
            setUserCart((prevCart) => [...prevCart, itemToAdd]);
        } catch (error) {
            console.error('Error adding to cart: ', error);
        }
    };

    // starting coordinates
    const fallbackLat = 14.629463;
    const fallbackLng = 121.041962;

    // Store current lat, lng from carinderia
    const [mapData, setMapData] = useState({
        lat: cardDetail?.latitude || fallbackLat,
        lng: cardDetail?.longitude || fallbackLng,
    });

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places,directions&callback=initMap`;
            script.async = true;
            script.defer = true;

            document.head.appendChild(script);

            window.initMap = () => {
                const map = new window.google.maps.Map(document.getElementById("map"), {
                    center: { lat: mapData.lat, lng: mapData.lng },
                    zoom: 15,
                });

                // starting marker 
                new window.google.maps.Marker({
                    position: { lat: fallbackLat, lng: fallbackLng },
                    map: map,
                    title: "Starting Location",
                });

                // carinderia marker 
                new window.google.maps.Marker({
                    position: { lat: mapData.lat, lng: mapData.lng },
                    map: map,
                    title: cardDetail.title || "Carinderia Location",
                });

                const directionsService = new window.google.maps.DirectionsService();
                const directionsRenderer = new window.google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);

                // directions from starting to carinderia
                const request = {
                    origin: { lat: fallbackLat, lng: fallbackLng }, 
                    destination: { lat: mapData.lat, lng: mapData.lng }, 
                    travelMode: window.google.maps.TravelMode.DRIVING,  
                };

                // route on the map
                directionsService.route(request, (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error("Directions request failed due to " + status);
                    }
                });
            };
        };

        if (!window.google) {
            loadGoogleMapsScript(); 
        }
    }, [mapData]); 

    useEffect(() => {
        if (cardDetail) {
            setMapData({
                lat: cardDetail.latitude || fallbackLat,
                lng: cardDetail.longitude || fallbackLng,
            });
        }
    }, [cardDetail]); 


    return (
        <div className="card-detail-container">
            <Link to="/carinderias"><i class="bi bi-arrow-left"></i></Link>
            <div>
            {cardDetail ? (
                <>
                    <h1>{cardDetail.title}</h1>
                    <br></br>
                    <p>{cardDetail.description}</p>
                    <br></br>
                    <h2>The Menu</h2>
                    <div className="menu-list">
                        {cardDetail.menu.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="menu-category">
                                <h4 className="category-title">{category.category}</h4>
                                {category.items.map((menuItem, index) => (
                                    <div key={index} className="menu-card">
                                        <p className="menu-item">{menuItem.item}</p>
                                        <p className="price">{menuItem.price}</p>
                                        <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Card not found.</p>
            )}
            
            <h1>Map Guide</h1>
            <p>From CIIT to {cardDetail.title}</p>

            {/* Google Maps container */}
            <div id="map" style={{ height: "300px", marginTop: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}></div>

            </div>
            <div style={{marginTop:"7%"}}>
            <Link to="/review" className="reviewLink"><p className="reviewRoute" style={{margin:"0 50px"}}>Leave a review</p></Link>
            <h1>Reviews</h1>
            <p>No reviews yet.</p>
            </div>
        </div>
    );
}

export default CardDetails;
