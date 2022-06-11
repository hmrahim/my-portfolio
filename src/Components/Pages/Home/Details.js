import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../../../image/ss/project1.png"
import img2 from "../../../image/ss/project2.png"
import img3 from "../../../image/ss/project3.png"
import ss1 from "../../../image/ss/falcon.png"
import ss2 from "../../../image/ss/warehouse.png"
import ss3 from "../../../image/ss/fitnes.png"

const Details = () => {
    const {id} = useParams()
    const projects = [
        {
          id:"1",
            img:img3,
            ss:ss1,
            name:"Falcon-Electronics",
            tec:"Mern stact Project",
            linkf:"https://github.com/hmrahim/project-10-manufacturer-website-client",
            linkb:"https://github.com/hmrahim/-project-10-manufacturer-website-server"
        },
        {
          id:"2",
            img:img2,
            ss:ss2,
            name:"B.baria Fruit-House",
            tec:"Mern stact Project",
            linkf:"https://github.com/hmrahim/project-9-warehouse-website-client",
            linkb:"https://github.com/hmrahim/-project-9-warehouse-website-server"
        },
        {
          id:"3",
            img:img1,
            ss:ss3,
            name:"Hitup Fitness Center",
            tec:"React Application",
            linkf:"https://github.com/hmrahim/project-8.5--independent-service-provider",
            
        },
    ]

    const result = projects.find(project=> project.id == id )
    return (
        <div className='min-h-screen w-full mt-24'>
            <div className='md:w-4/5  lg:4/5 mx-auto flex'>
               
                <div className='flex justify-center items-center'>
                    <img src={result.ss} alt="" />
                    </div>
                <div>details</div>


            </div>
            
        </div>
    );
};

export default Details;