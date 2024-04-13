// src/App.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import { IoMdHome } from "react-icons/io";
import { IoListSharp, IoSettings} from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
// import { VITE_AGENT } from 'import.meta.env';
// import { Rating } from 'react-simple-star-rating'
import Food from './components/food'
import Dashboard from './components/Dashboard'
function App() {
    const ag = import.meta.env.VITE_AGENT
    // const [ratting, setRating] = useState(0);
    const [rate, setRate] = useState(0);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [foodCategory, setFoodCategory] = useState("");
 /* const handleRating = (rate) => {
    setRating(rate);
  }*/
   const [agent, setAgent] = useState(true);
  return (
      <>
      {agent ? (
    <div class="container">
  <div class="device">
    <div class="header">
      <div class="left-side">
          <img src="/halal-recipes-logo.png" />        
          <div className="title">
                <h1>Halal Recipes</h1>
                <code><p>Eat Halal <span>|</span> Live in Halal</p></code>
            </div>
      </div>
    <span>What you want to cook today?</span>
    </div>
    
    <div class="searchbox">
      <input type="search" placeholder="Search by recipes" />
    </div>
    <ul className="filters">
        <li className={foodCategory === "Breakfast" ? "active" : ""} onClick={() => setFoodCategory("Breakfast")}>Breakfast</li>
        <li className={foodCategory === "Lunch" ? "active" : ""} onClick={() => setFoodCategory("Lunch")}>Lunch</li>
        <li className={foodCategory === "Dinner" ? "active" : ""} onClick={() => setFoodCategory("Dinner")}>Dinner</li>
    </ul>

         <Food 
         foodCategory={foodCategory}
         />
         
    <div class="tabbar">
      <button type="button" class="home active"><IoMdHome />Home</button>
      <button type="button" class="lists"><IoListSharp />Lists</button>
      <button type="button" class="meal"><FaCalendar />Meal plan</button>
      <button type="button" class="settings"><IoSettings />Settings</button>
    </div>
  </div>
</div>
):(
    <Dashboard
    foodCategory={foodCategory}
    />
    )}
</>
  );
}

export default App;
/*
<div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      */
      
      /*
          <div class="recipes">
      <div class="recipe first">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">4.8</div>
          </div>
          <div class="recipe-info">
            <span>Salad with eggs and tomates</span>
            <div class="time">15 min</div>
          </div>
        </div>
      </div>
      
      <div class="recipe second">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">4.7</div>
          </div>
          <div class="recipe-info">
            <span>Tuna Tataki dish</span>
            <div class="time">30 min</div>
          </div>
        </div>
      </div>
    </div>
      */
      
      
      /*
             <div class="recipes">
      <div class="recipe first">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">
            <Rating
  transition
  size={15}
/>
      </div>
          </div>
          <div class="recipe-info">
            <span>special Dish</span>
            <div class="time">30 min</div>
          </div>
        </div>
      </div>
      
      <div class="recipe second">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">4.7</div>
          </div>
          <div class="recipe-info">
            <span>Salad with eggs and tomates</span>
            <div class="time">15 min</div>
          </div>
        </div>
      </div>
      
      
      <div class="recipe third">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">4.4</div>
          </div>
          <div class="recipe-info">
            <span>Vegetable</span>
            <div class="time">20 min</div>
          </div>
        </div>
      </div>
      
      <div class="recipe fourth">
        <div class="wrapper">
          <div class="recipe-header">
            <span>Mary Smith</span>
            <div class="rating">5.0</div>
          </div>
          <div class="recipe-info">
            <span>Chips</span>
            <div class="time">22 min</div>
          </div>
        </div>
      </div>
    </div>
      */
      
      /*
        const [food, setFood] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/Notes')
      .then((res) => res.json())
      .then((data) => {
        setFood(data.reverse());
      });
  }, [food]);
      */