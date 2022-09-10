import React from "react";

const EditModal = () => {

  // const updateHandler=()=>{
  //   addItem.map((elem)=>{
  //     console.log(elem)
  //   })
  // }
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">


            <form>
             <div className="mb-3">
                 <label htmlFor="title" className="form-label">Title </label>
                 <input type="text" className="form-control" id="edittitle" placeholder="Enter your title"/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                 <textarea name="desc" className="form-control" id="editdesc" rows="3" placeholder="Enter your description"></textarea>
             </div>
            </form>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                // onClick={()=>{return updateHandler}}
                // onClick={updateHandler}
              >
               Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
