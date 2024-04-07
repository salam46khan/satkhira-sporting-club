import AboutContent from "@/components/about/AboutContent";

const AboutPage = () => {
    const a = process.env.MONGO;
    console.log(a);
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16">
                <AboutContent />
            </div>
        </div>
    );
};

export default AboutPage;