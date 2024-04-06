import Course from "./Course";

const CourseContent = () => {
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">Our Course</p>
            </div>
            <div className="bg-white/20 p-2 py-6 w-full rounded-md">
                <div>search feald</div>
            </div>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    );
};

export default CourseContent;