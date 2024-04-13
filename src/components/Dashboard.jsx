import Rate from './Rating';
import { useState, useEffect} from 'react';

import DataTable from './StickyHeadTable';
//import Table from './Table';

const Dashboard = ({foodCategory}) => {
    

     const storedData = localStorage.getItem('Storedfood');

    const storedFoodData = JSON.parse(storedData);

    const foodItems = foodCategory ? storedFoodData.filter(item => item.category === foodCategory) : storedFoodData;
    const [addReciep, setAddReciep] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [Description, setDescription] = useState("");
    const [rate, setRate] = useState(0);
    // const [id, setId] = useState(0);
    const [category, setCategory] = useState("");
    const [Status, setStatus] = useState("");
    const handleCategory = (e)=> {
        setCategory(e.target.value);
    }
    const handleStatus =(e)=>{
    setStatus(e.target.value);
}
    const postReciep = (e)=> {
        // e.preventDefault();
        // const newReciep = { name, image, rate, category };
    
    const storedData = localStorage.getItem('Storedfood');

    const storedFoodData = JSON.parse(storedData);
    const newId = storedFoodData.length+1
    const newReciep = { id: newId, name, image, Description, rate, category, Status };
    storedFoodData.push(newReciep);

    localStorage.setItem('Storedfood', JSON.stringify(storedFoodData));
    }

    return (
        <>
  <div class="dashboard-header">
        <div class="head">
            <img src="/halal-recipes-logo.png" />        
            <div className="dashboard-title">
                <h1>Halal Recipes</h1>
               <p>Admin Dashboard<br></br>
                <code>Eat Halal <span>|</span> Live in Halal</code> </p>
            </div>
        </div>
        <nav className="dashboard-nav">
            <li className={!addReciep ? "active-dashboard" : ""} onClick={()=>setAddReciep(false)}>Dashboard</li>
            <li className={addReciep ? "active-dashboard" : ""} onClick={()=>setAddReciep(true)}>Add Recipe</li>
        </nav>
    </div>
    {addReciep ?
    (
            <>
            <form className="Add-reciep-container">
            <div>
            <label for="title">Title: </label>
            <input type="text" name="title" 
            placeholder="Reciep Name"
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label for="Image">Image: </label>
            <input type="text" name="Image" 
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
            />
            </div>
            <div>
            <label for="description">Description: </label>
            <input type="text" name="description" 
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div className="category">
            <div>
            <label for="category">category: </label>
                <select value={category} name="category" onChange={handleCategory}>
                <option value="">Select an Category</option>
                <option value="Breakfast">
                Breakfast
                </option>
                <option value="Lunch">
                Lunch
                </option>
                <option value="Dinner">
                Dinner
                </option>
                </select>
                </div>
            <div>
             <label for="status">Status: </label>
                <select value={Status} name="status" onChange={handleStatus}>
                <option value="Active">
                Active
                </option>
                <option value="Inactive">
                Inactive
                </option>
                </select>
                </div>
                </div>
            <button type="submit"onClick={postReciep}>Post</button>
            </form>
            </>
            ):(
                <DataTable 
                foodItems={foodItems}
                
                name={name}
                image={image}
                Description={Description}
                category={category}
                rate={rate}
                Status={Status}
                
                setName={setName}
                setImage={setImage}
                setDescription={setDescription}
                setCategory={setCategory}
                setRate={setRate}
                setStatus={setStatus}
                />
        )}
        </>
    );
}

export default Dashboard;


/*    useEffect(() => {
    const storedData = localStorage.getItem('Storedfood');

    const storedFoodData = JSON.parse(storedData);
 
  }, []);*/
  
  
/*
        <table className="dashboard-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Rate</th>
                </tr>
                </thead>
                 <tbody>
                    {foodItems.map((food) => (
                        <tr key={food.id} className="dashboard">
                            <td>{food.name}</td>
                            <td><img src={food.image} alt={food.name} /></td>
                            <td>{food.category}</td>
                            <td>{food.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            */
            
            /*
              <div class="dashboard-header">
        <div class="head">
            <img src="/halal-recipes-logo.png" />        
            <div className="dashboard-title">
                <h1>Halal Recipes</h1>
               <p>Admin Dashboard<br></br>
                <code>Eat Halal <span>|</span> Live in Halal</code> </p>
            </div>
        </div>
        <nav className="dashboard-nav">
            <li onClick={()=>setAddReciep(false)}>Dashboard</li>
            <li onClick={()=>setAddReciep(true)}>Add recipe</li>
        </nav>
    </div>
    */