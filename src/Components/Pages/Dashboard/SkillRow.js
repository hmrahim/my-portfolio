import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const SkillRow = ({skill,index,refetch}) => {
     refetch()

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
                fetch(`http://localhost:5000/skill/${id}`,{
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
    return (
        <tr>
        <th className='text-center'>{index+1}</th>
        <td className='text-center'>{skill.title}</td>
        <td className='text-center'>{skill.label}%</td>
        <td className='text-center'>
          <button onClick={()=> deleteSkill(skill._id)} className="btn btn-error btn-xs">Delete</button> 
          <Link to={`/admin/updateskill/${skill._id}`}  className="btn btn-success btn-xs ml-3">Update</Link>
        </td>
      </tr>
    );
};

export default SkillRow;