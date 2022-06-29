import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const SkillFLagRow = ({flag,refetch,index}) => {
    const deleteSkillFlag = (id)=> {
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
                fetch(`http://localhost:5000/skillflag/${id}`,{
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
        <th >{index +1}</th>
        <td className="text-center">{flag.name}</td>
        <td className="text-center">
            <button onClick={()=> deleteSkillFlag(flag._id)} className='btn btn-error btn-xs'>Delete</button>
            <Link to={`/admin/updateskillflag/${flag._id}`} className='btn btn-info btn-xs ml-3' >Edit</Link>
        </td>
      </tr>
    );
};

export default SkillFLagRow;