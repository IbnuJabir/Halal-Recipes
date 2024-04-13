import { useState,useEffect } from 'react'; // Add import statement for useState
/*import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
*/
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import { CiEdit } from "react-icons/ci";

import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Paper } from '@mui/material';
const DataTable = ({ foodItems, 
name,
image,
Description,
category,
rate,
Status,

setName,
setImage,
setDescription,
setCategory,
setRate,
setStatus
}) => 
{
    const [isEdit, setIsEdit] = useState(false);
     const [isPro, setIsPro] = useState(false);
    const [index, setIndex] = useState(0)

    useEffect(() => {
    setName(foodItems[index].name);
    setImage(foodItems[index].image);
    setDescription(foodItems[index].Description);
    setCategory(foodItems[index].category);
    setRate(foodItems[index].rate);
    setStatus(foodItems[index].Status);
}, [index]);

    const handleCategory = (e)=> {
        setCategory(e.target.value);
    }
     const handleEdit = (indx)=> {
         setIndex(indx);
         setIsEdit(true);
    }
    const updateRecipe = ()=> {
    setIsPro(true) 
    
   const newId = index+1;
    const newReciep = { id: newId, name, image, Description, rate, category, Status };
    foodItems[index] = newReciep;

    localStorage.setItem('Storedfood', JSON.stringify(foodItems));
    setTimeout(() => {
                setIsEdit(false);
                setIsPro(false)
            }, 2000);
    }
  const [header, setHeader] = useState([
    'ID',
    'Name',
    'Image',
    'Category',
    'Description',
    'Rate',
    'status',
    'Action'
  ]);

const handleStatus =(e)=>{
    setStatus(e.target.value);
}
  return (
            <>
      {isEdit ?
    (
            <form className="Add-reciep-container">
            <h2>Update Recipe</h2>
            <div>
            <label for="title">Title: </label>
            <input type="text" name="title" 
            value={name}
            placeholder={foodItems[index].name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label for="Image">Image: </label>
           <textarea name="Image"
            value={image}
            placeholder={foodItems[index].image}
            onChange={(e) => setImage(e.target.value)}
            rows={7}
            cols={30}
            />
            </div>
            <div>
            <label for="description">Description: </label>
            <textarea
                type="text"
                name="description"
                placeholder={foodItems[index].Description}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={7}
                cols={30}
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
            {isPro?(
            <Box>
             <Button startDecorator={<CircularProgress variant="solid" />} >Updating…</Button>
            </Box>
            ): (
            <button type="submit" onClick={updateRecipe}>Update</button>
            )}
            </form>
            ):(
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {header.map((str, index) => (
                <TableCell key={index}sx={{ backgroundColor: '#6A2055', fontWeight: 'bold', fontSize: '16px', color: '#fff' }}>{str}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {foodItems.map((food, idx) => (
              <TableRow key={idx}>
                <TableCell>{food.id}</TableCell>
                <TableCell>{food.name}</TableCell>
                <TableCell>
                  <img src={food.image} alt={food.name} className="title-image" />
                </TableCell>
                <TableCell>{food.category}</TableCell>
                <TableCell sx={{ minWidth: '250px' }}>{food.Description}</TableCell>
                <TableCell>{food.rate}</TableCell>
                <TableCell>{food.Status}</TableCell>
                    <TableCell sx={{ backgroundColor: '#6A2055', fontWeight: 'bold', fontSize: '26px', color: '#fff' }}><CiEdit onClick={()=>handleEdit(idx)}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    )}
     </>
  );
}

export default DataTable;
/*

<form onSubmit={editNote} className="note-form">
          {notes.title && notes.body && (
            <>
            <div>
            <label for="description">Description: </label>
            <input
                type="text"
                name="description"
                placeholder={foodItems.Description}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
              
              <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required />

              <div className="edit-btns">
                <button onClick={hideEdit}>Cancel</button>
                <button type="submit">Update</button>
              </div>
            </>
          )}
        </form>
        */