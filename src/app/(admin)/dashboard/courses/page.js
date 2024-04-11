import DashboardCourse from "@/components/dashboard/dashcourse/DashboardCourse";
import { getCourse } from "@/lib/data";

const DashCourses = async () => {
    const courses = await getCourse()
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">All Courses</p>
            </div>
            <DashboardCourse courses={courses}/>
        </div>
    );
};

export default DashCourses;