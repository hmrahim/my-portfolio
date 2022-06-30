import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const TestimonialRow = ({index,refetch,testimonial}) => {
    
    const deleteTestimonial = (id)=> {
       
        
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
                fetch(`http://localhost:5000/testimonial/${id}`,{
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
        <td className="text-center">{testimonial.name?.slice(0,20)+"..."}</td>
        <td className="text-center"><img src={testimonial.image} width={150}  alt="image" /></td>
        <td className="text-center">{testimonial.desig}</td>
        <td className="text-center">{testimonial.testimonial?.slice(0,20)+"..."}</td>
       
        <td>
            <button onClick={()=> deleteTestimonial(testimonial._id)} className='btn btn-error btn-xs'>Delete</button>
            <Link className='btn btn-info btn-xs ml-4' to={`/admin/updatetestimonial/${testimonial._id}`}>Edit</Link>
        </td>
        
      </tr>
    );
};

export default TestimonialRow;