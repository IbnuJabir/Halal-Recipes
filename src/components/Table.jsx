import React, { useState } from 'react';

import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, city: "Bangalore" },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
]

const Table=()=> {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone', },
    { title: "City", field: "city", }
  ]


  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Material Table with CRUD operation</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default Table;


import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressButton() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startDecorator={<CircularProgress variant="solid" />}>Updating…</Button>
    </Box>
  );
}