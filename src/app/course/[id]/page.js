import CourseDetail from "@/components/course/CourseDetails";

const CourseDetails = async ({ params }) => {
    console.log(params);
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16">
                
                <CourseDetail />
            </div>
        </div>
    );
};

export default CourseDetails;