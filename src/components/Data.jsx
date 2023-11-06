import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from '../redux-saga/product/action/action';
import Swal from 'sweetalert2';

const Data = () => {
  const swal = require('sweetalert2')
  const dispatch = useDispatch();
  const [fdata, fsetData] = useState({})
  const data = useSelector((state) => state.productReducer);
  // console.log(data.product);
  const handle = (e) => {
    fsetData({ ...fdata, [e.target.name]: e.target.value })
  }
  const submitData = () => {
    // console.log(fdata);
    // dispatch({ type: POST_PRODUCT_PROGRESS, payload: fdata })
    Swal.fire({
      title: 'Do you want to save the changes ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't Save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved !', '', 'success')
        dispatch({ type: POST_PRODUCT_PROGRESS, payload: fdata });
      }
      else if (result.isDenied) {
        Swal.fire('Changes are not saved', 'You can try again later or refresh this page!', 'info');
      }
    })
    // console.log(fdata);
    fsetData({})
  }

  const handleDelete = (id) => {
    // console.log(id);
    // dispatch({type:DELETE_PRODUCT_PROGRESS,payload:id});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your product has been deleted successfully',
      showConfirmButton: true,
      timer: 1500
    })
    dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })
  }

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, [])

  //update
  const handleUpdate = (e) => {
    // console.log(e);
    fsetData(e)
  }

  const updatedata = () => {
    dispatch({ type: UPDATE_PRODUCT_PROGRESS, payload: fdata })
    fsetData({})
  }
  return (
    <div>
      <div className='box'>
        <form>
          <span className='text-center'>Login</span>
          <div className="input-container">
            {/* <label>First Name</label> */}
            <input type="text" name='title' placeholder='First Name' className="text-center" onChange={handle} value={fdata.title || ""} required="" />

            {/* <label>Last Name</label> */}
            <input type="text" name='author' placeholder='Last Name' className='text-center' onChange={handle} value={fdata.author || ""} required="" />

            <button type='button' className='btn btn-success' onClick={submitData}>Submit</button>
            <button type='button' className='btn btn-2 btn-success' onClick={updatedata}>Update</button>
          </div>
        </form>

        <table className='mt-5'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.product.map((e, index) => {
                return (
                  <>
                    <tr className='design' key={index}>
                      <td>{e.id}</td>
                      <td>{e.title}</td>
                      <td>{e.author}</td>
                      <td>
                        <button onClick={() => handleDelete(e.id)} className='btn btn-error'>Delete</button>
                        <button onClick={() => handleUpdate(e)} className='btn btn-2 btn-error'>Edit</button>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {/* <div>
        <input type="text" name='title' onChange={handle} />
        <input type="text" name='author' onChange={handle} />
        <button onClick={submitData}>Submit</button>
        {data.product?.map((e, ind) => (
          <>
            <h1>{e.title}</h1>
            <h2>{e.author}</h2>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
          </>
        ))}
      </div> */}
    </div>
  )
}

export default Data;