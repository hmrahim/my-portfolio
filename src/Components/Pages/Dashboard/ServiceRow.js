import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ServiceRow = ({ service,index,refetch}) => {

    const deleteSkill = (id)=> {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            width:"400",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/services/${id}`,{
                    method:"DELETE",
                    headers:{
                        "content-type": "application/json"
                    }
                })
                .then(res =>res.json())
                .then(()=>{
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                      
                      )

                })
          
            }
          })

    }
    refetch()
    return (
        <tr>
        <th className='text-center'>{index+1}</th>
        <td className='text-center'>{service.title}</td>
        <td className='text-center'>{service.desc?.slice(0,30)+"..."}</td>
        <td className='text-center'>
          <button onClick={()=> deleteSkill(service._id)} className="btn btn-error btn-xs">Delete</button> 
          <Link to={`/admin/updateservice/${service._id}`}  className="btn btn-success btn-xs ml-3">Update</Link>
        </td>
      </tr>
    );
};

export default ServiceRow;