import DashboardCourse from "@/components/dashboard/dashcourse/DashboardCourse";

const DashCourses = () => {
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">All Courses</p>
            </div>
            <DashboardCourse />
        </div>
    );
};

export default DashCourses;