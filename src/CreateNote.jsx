import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  // const [expand,setExpand] = useState(false);

  const [note,setNote]= useState({
    title:'',
    content:'',
    lastmodified : Date.now(),
  });
  const inputEvent = (event) =>{
    // const value=event.target.value;
    // const name=event.target.name;
    const {name,value} = event.target;
    setNote((prevData) =>{
      return{
        ...prevData,
        [name]:value,
      };
    });
    // console.log(note);
  };

  const addEvent = () =>{
    props.passNote(note);
    setNote({
      title:'',
      content:'',
      lastmodified : Date.now(),
    });
  };

  // const expandIt =()=>{
  //   setExpand(true);
  // }

  return (
    <>
        <div className="main_note">
            <form>
             
                <input 
                    type="text" 
                    name='title' 
                    value={note.title} 
                    onChange={inputEvent} 
                    placeholder='Title' 
                    autoComplete="off"
                />
                <textarea 
                    name="content" 
                    cols="30" 
                    rows="10" 
                    value={note.content} 
                    onChange={inputEvent} 
                    placeholder='Write a note...'>
                    {/* onClick={expandIt} */}
                </textarea>
                
                <Button className='MuiButton-root' onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>
            </form>
        </div>
      
    </>
  )
}

export default CreateNote;
