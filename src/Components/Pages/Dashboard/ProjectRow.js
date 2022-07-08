import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const ProjectRow = ({index,refetch, project}) => {
    const deleteProject = (id)=> {
        
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
                fetch(`https://polar-beach-10719.herokuapp.com/project/${id}`,{
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
        <td className="text-center">{index +1}</td>
        <td className="text-center">{project.ssu?.slice(0,20)+"..."}</td>
        <td className="text-center">{project.name}</td>
        <td className="text-center">{project.tech?.slice(0,20)+"..."}</td>
        <td className="text-center">{project.client?.slice(0,20)+"..."}</td>
        <td className="text-center">{project.server?.slice(0,20)+"..."}</td>
        <td className="text-center">{project.live?.slice(0,20)+"..."}</td>
        <td>
            <button onClick={()=> deleteProject(project._id)} className='btn btn-error btn-xs'>Delete</button>
            <Link className='btn btn-info btn-xs ml-4' to={`/admin/updateproject/${project._id}`}>Edit</Link>
        </td>
        
      </tr>
    );
};

export default ProjectRow;