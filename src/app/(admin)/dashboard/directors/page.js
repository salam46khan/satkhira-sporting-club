import DirectorContent from "@/components/dashboard/dashdirector/DirectorContent";

const DashDirectors = () => {
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">Directors</p>
            </div>
            <DirectorContent />
        </div>
    );
};

export default DashDirectors;