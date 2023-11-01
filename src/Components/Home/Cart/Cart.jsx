/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({selectCourses, remaining, totalCredit}) => {
    console.log(selectCourses);


    return (
        <div className="space-y-3 bg-slate-200 p-5 rounded-xl">
            <h3 className="text-blue-700 font-bold">Credit Hour Remaining: {remaining}</h3>
            <hr />
            <h4 className="font-bold">Course Name</h4>
           
            
            {
                selectCourses.map((course) =>
                    <li className="font-normal">
                        {course.Course_Name}
                    </li>
                )
            }
            <hr />
            <h3 className="font-semibold">Total Credit Hour:{totalCredit}</h3>
            <hr />
        </div>
    );
};

export default Cart;