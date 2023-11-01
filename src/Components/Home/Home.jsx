/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart/Cart";



const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectCourses, setSelectCourses] = useState([]);
    const[remaining, setRemaining]= useState(0);
    const[totalCredit, setTotalCredit]= useState(0)



    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, []);



    const handleSelectCourse = (course) => {
        const isSelected = selectCourses.find((item) =>item.Id == course.Id);
        
        let count = course.Credit;


        if(isSelected){
            return alert('Already Selected This Course')
        } else{
            selectCourses.forEach((item) => {
                count = count + item.Credit;
            })
           
            const totalRemaining = 20 - count;
            
            if(count > 20){
                return alert('You reached your Credit hour')
            }else{
                setTotalCredit(count);
            setRemaining(totalRemaining);

            setSelectCourses([...selectCourses, course])
            }
            
        }
       
        
    }
   


    return (
        <div>
            <div className="Container">
                <div className="home-container   mt-12 flex gap-56 ">
                    <div className="card-container w-[600px] grid grid-cols-3 gap-x-48 gap-y-10 ">
                        {
                            allCourses.map(course => (
                                <div key={course.Id} className="card w-60 h-70 border  rounded-xl p-3 bg-slate-100">
                                    <div className="card-img">
                                        <img className="w-52 h-40" src={course.Image} alt="" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-center">{course.Course_Name}</h3>
                                    <p className="font-normal text-sm"><small>
                                        {course.Details}
                                    </small></p>
                                    <div className="flex justify-evenly">
                                        <p className="font-medium text-base">$ Price: {course.Price}</p>
                                        <p className="font-medium text-base">Credit:{course.Credit} hr</p>
                                    </div>
                                    <button
                                        onClick={() => handleSelectCourse(course)}
                                        className="bg-blue-600 text-white rounded w-3/4 my-2 mx-6 font-semibold text-lg ">Select</button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="cart">
                       <Cart selectCourses={selectCourses} remaining={remaining} totalCredit={totalCredit}></Cart>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Home;