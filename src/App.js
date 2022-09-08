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
    // alert("clicked");
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

  useEffect(()=>{
      localStorage.setItem('notes-app',JSON.stringify(addItem))
  },[addItem])
  const sort = addItem.sort((a,b)=>b.lastmodified-a.lastmodified)

  return (
   <>
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
               />
    })}
   </>
  );
}

export default App;
