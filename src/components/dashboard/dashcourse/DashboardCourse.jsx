import AddCourses from "./AddCourses";

const DashboardCourse = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <p>Total Courses:</p>
                <div>
                    <AddCourses />
                </div>
            </div>
            <hr className="my-3" />
        </div>
    );
};

export default DashboardCourse;