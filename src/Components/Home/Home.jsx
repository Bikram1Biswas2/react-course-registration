/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";



const Home = () => {
    const[allCourses,setAllCourses] = useState([])

 useEffect(() =>{
    fetch('Course.json')
    .then(res => res.json())
    .then(data => setAllCourses(data))
 }, []);
 
console.log(allCourses)



    return (
        <div>
            <div className="Container">
                <div className="home-container   mt-12 flex gap-56">
                  <div className="card-container w-[600px] grid grid-cols-3 gap-x-48 gap-y-10">
                {
                    allCourses.map(course =>(
                        <div key={course.Id} className="card w-60 h-70 border border-lime-500 rounded-xl p-3">
                        <div className="card-img">
                          <img className="w-52 h-40" src={course.Image} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold text-center">{course.Course_Name}</h3>
                        <p className="font-normal text-sm"><small>
                        {course.Details}
                        </small></p>
                        <div className="flex justify-evenly">
                          <p className="font-medium text-base">$ Price: {course.Price}</p>
                          <p className="font-medium text-base">Credit:{course.Credit}</p>
                        </div>
                        <button className="bg-blue-600 text-white rounded w-3/4 my-2 mx-6 font-semibold text-lg ">Select</button>
                  </div>
                    ) )
                }
                      
                  </div>
                      <div className="cart">
                        <h2>Course Name</h2>
                      </div>

                </div>
            </div>
         </div>

         
    );
};

export default Home;