import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './Header';
import './App.css';
import CreateNote from './CreateNote';
import Note from './Note';
import EditModal from './EditModal';


function App() {
  const [addItem,setAddItem] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
  const addNote = (note) =>{
    // alert("clicke");
    setAddItem((prevData)=>{
      return [...prevData,note];
    })
  };
   
  const onDelete= (id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata,indx)=>{
        return indx !==id;
      })
    )

  };
  const editHandler=(id)=>{
      // console.log(id);
  }

  useEffect(()=>{
      localStorage.setItem('notes-app',JSON.stringify(addItem))
  },[addItem])
  const sort = addItem.sort((a,b)=>b.lastmodified-a.lastmodified)

  // const [editId,setEditId]=useState("")

  return (
   <>
    {/* <EditModal editId={editId} addItem={addItem} setAddItem={setAddItem} /> */}
    <EditModal/>
    <Header/>
    <CreateNote
      passNote={addNote}
    />
  
    {sort.map((val,index)=>{
      return <Note key={index} 
                   id={index}
                   title={val.title}
                   content={val.content}
                   lastmodified={val.lastmodified}
                   deleteItem = {onDelete}
                   editItem={editHandler}
                  addItem={addItem}
                  // seteditId={setEditId}
               />
    })}
   </>
  );
}

export default App;
