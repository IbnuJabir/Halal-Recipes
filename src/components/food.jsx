import React, { useState, useEffect } from 'react';
import Rate from './Rating';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import Alert from '@mui/material/Alert';

const Food = ({ foodCategory }) => {
/*
const foodData = [
        {
            id: 1,
            name: "Chips",
            image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Crispy, golden slices of potato delightfully seasoned and fried to perfection, offering a satisfying crunch with every bite.",
            rate: 4,
            category: "Dinner",
            Status: "Active"
        },
        {
            id: 2,
            name: "Salad",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A vibrant medley of fresh, crisp greens, tossed with an array of colorful vegetables, fruits, and toppings, creating a refreshing and nutritious feast for the senses.",
            rate: 3,
            category: "Breakfast",
            Status: "Active"
        },
        {
            id: 3,
            name: "Sushi",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Exquisite bite-sized delights meticulously crafted with the finest ingredients, offering a harmonious fusion of flavors and textures, bound together by expertly seasoned rice and wrapped in delicate seaweed.",
            rate: 5,
            category: "Breakfast",
            Status: "Active"
        },
        {
            id: 4,
            name: "Omelette",
            image: "https://images.unsplash.com/photo-1576107290640-a68caf8256f1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Fluffy and flavorful, this classic dish features eggs delicately whisked and cooked to golden perfection, folded around a delectable filling of your choice, creating a hearty and satisfying meal any time of day.",
            rate: 4,
            category: "Dinner",
            Status: "Active"
        },
        {
            id: 5,
            name: "Burger",
            image: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A culinary masterpiece of juicy grilled meat or savory plant-based patty, nestled between soft, toasted buns and layered with an assortment of fresh vegetables, cheese, and savory sauces, delivering an indulgent burst of flavor with every bite.",
            rate: 3,
            category: "Lunch",
            Status: "Active"
        },
        {
            id: 6,
            name: "Pizza",
            image: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A beloved culinary marvel featuring a crispy, oven-baked crust topped with tangy tomato sauce, gooey melted cheese, and an array of savory toppings, offering a slice of pure comfort and satisfaction.",
            rate: 4,
            category: "Lunch",
            Status: "Active"
        },
    ];
    //  localStorage.setItem()
    localStorage.setItem('Storedfood', JSON.stringify(foodData));
*/
    const storedData = localStorage.getItem('Storedfood');
    const storedFoodData = JSON.parse(storedData);
    const foodItems = foodCategory ? storedFoodData.filter(item => item.category === foodCategory) : storedFoodData;

        const [isOrderSucess, setIsOrderSucess] = useState(false);
const [orderStatus, setOrderStatus] = useState(foodItems.map(() => ({
    progress: false,
    success: false
})));
    const updatedOrderStatus = [...orderStatus]
 /*   useEffect(() => {
    setOrderStatus(updatedOrderStatus);
 
  }, [updatedOrderStatus]);

    const orderRecipe = (index) => {
        // Update the order status for the specific recipe being ordered
        const updatedOrderStatus = [...orderStatus];
        updatedOrderStatus[index] = true;
        setOrderStatus(updatedOrderStatus);

        // Simulate an order process
        setTimeout(() => {
            const updatedOrderStatus = [...orderStatus];
            updatedOrderStatus[index] = false;
            setOrderStatus(updatedOrderStatus);
        }, 3000);
        setIsOrderSucess(true)
        setTimeout(() => {
           setIsOrderSucess(false)
        }, 3000);
    };
*/
const delay = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

    const orderRecipe = async (index) => {
        setOrderStatus(orderStatus.map((status, idx) => {
    if (idx === index) {
        return { progress: true, success: false };
    } else {
        return status;
    }
}));
    
    await delay(2000);

    setOrderStatus(orderStatus.map((status, idx) => {
    if (idx === index) {
        return { progress: false, success: true };
    } else {
        return status;
    }
}));


/*   await delay(2000);
    
    setOrderStatus(orderStatus.map((status, idx) => {
    if (idx === index) {
        return { progress: false, success: false };
    } else {
        return status;
    }
}));
*/
};


return (
    <>
        {foodItems.map((food, idx) => (
            <div className="recipes" key={food.id}>
                {food.Status === 'Active' && (
                    <>
                        <div>
                            <h2>{food.name}</h2>
                            <p className="recipe-description">{food.Description}</p>
                        </div>
                        <div className="recipe-image">
                            <img src={food.image} alt={food.name} />
                        </div>
                        <div className="recipe-info">
                            <span>Rate Here</span>
                            <div className="rating">
                                <Rate />
                            </div>
                        </div>
                        <div key={idx}>
                            {orderStatus[idx].progress ? (
                                <Box>
                                    <Button startDecorator={<CircularProgress variant="solid" />} className="order-btn">Ordering…</Button>
                                </Box>
                            ) : (
                                <>
                                    {orderStatus[idx].success ? (
                                        <Alert variant="filled" severity="success">
                                            Your have successfully ordered <span className="order-name">{food.name}</span>.
                                        </Alert>
                                    ) : (
                                        <button type="submit" onClick={() => orderRecipe(idx)} className="order-btn">Order</button>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        ))}
    </>
);

};

export default Food;



/*
<Rating
                                transition
                                showTooltip
                                allowHover={false}
                                size={20}
                            />
*/

/*
const foodData = [
        {
            id: 1,
            name: "Chips",
            image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Crispy, golden slices of potato delightfully seasoned and fried to perfection, offering a satisfying crunch with every bite.",
            rate: 4,
            category: "Dinner"
        },
        {
            id: 2,
            name: "Salad",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A vibrant medley of fresh, crisp greens, tossed with an array of colorful vegetables, fruits, and toppings, creating a refreshing and nutritious feast for the senses.",
            rate: 3,
            category: "Breakfast"
        },
        {
            id: 3,
            name: "Sushi",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Exquisite bite-sized delights meticulously crafted with the finest ingredients, offering a harmonious fusion of flavors and textures, bound together by expertly seasoned rice and wrapped in delicate seaweed.",
            rate: 5,
            category: "Breakfast"
        },
        {
            id: 4,
            name: "Omelette",
            image: "https://images.unsplash.com/photo-1576107290640-a68caf8256f1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "Fluffy and flavorful, this classic dish features eggs delicately whisked and cooked to golden perfection, folded around a delectable filling of your choice, creating a hearty and satisfying meal any time of day.",
            rate: 4,
            category: "Dinner"
        },
        {
            id: 5,
            name: "Burger",
            image: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A culinary masterpiece of juicy grilled meat or savory plant-based patty, nestled between soft, toasted buns and layered with an assortment of fresh vegetables, cheese, and savory sauces, delivering an indulgent burst of flavor with every bite.",
            rate: 3,
            category: "Lunch"
        },
        {
            id: 6,
            name: "Pizza",
            image: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Description: "A beloved culinary marvel featuring a crispy, oven-baked crust topped with tangy tomato sauce, gooey melted cheese, and an array of savory toppings, offering a slice of pure comfort and satisfaction.",
            rate: 4,
            category: "Lunch"
        },
    ];
    //  localStorage.setItem()
    localStorage.setItem('Storedfood', JSON.stringify(foodData));
*/
/*    useEffect(() => {
    const storedData = localStorage.getItem('Storedfood');

    const storedFoodData = JSON.parse(storedData);
 
  }, []);*/