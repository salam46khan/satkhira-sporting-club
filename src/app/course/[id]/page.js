import CourseDetail from "@/components/course/CourseDetails";
import { getSingleCourse } from "@/lib/data";

const CourseDetails = async ({ params }) => {
    // console.log(params);
    const {id} = params;
    const singleCourse =await getSingleCourse(id);
    console.log(singleCourse);
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16">
                
                <CourseDetail singleCourse={singleCourse}/>
            </div>
        </div>
    );
};

export default CourseDetails;