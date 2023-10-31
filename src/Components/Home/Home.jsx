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
                        <h3>{course.Course_Name
}</h3>
                        <p><small>
                        {course.Details}
                        </small></p>
                        <div className="flex justify-evenly">
                          <p>$ Price: {course.Price}</p>
                          <p>Credit:{course.Credit}</p>
                        </div>
                        <button className="bg-blue-600 text-white rounded w-3/4 my-2 mx-6  ">Select</button>
                  </div>
                    ) )
                }
                      
                  </div>
                      <div className="cart">
                        <h2>This is Cart</h2>
                      </div>

                </div>
            </div>
         </div>

         
    );
};

export default Home;