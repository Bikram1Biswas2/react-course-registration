

const Cart = ({selectCourses}) => {
    console.log(selectCourses);


    return (
        <div>
            <h4>Course Name</h4>
            {
                selectCourses.map((course) =>
                <li>{course.Course_Name}</li>
                )
            }
        </div>
    );
};

export default Cart;