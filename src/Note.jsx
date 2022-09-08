import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    const deleteNote= ()=>{
        props.deleteItem(props.id);
    };

   


  return (
    <>
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button className='btn' onClick={deleteNote}>
               <DeleteOutlineIcon className='deleteIcon'/>
            </button>
            <button type="button" className="btn" style={{color:"white",backgroundColor:"blue"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <small>last modified {new Date(props.lastmodified).toLocaleDateString("en-GB",{
                hour:"2-digit",
                minute:"2-digit",
            })}</small>
            
        </div>
        
    </>
  );
};

export default Note;
