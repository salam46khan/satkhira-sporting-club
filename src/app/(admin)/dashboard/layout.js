import Sitenav from "@/components/nav/Sitenav";

const layout = ({ children }) => {
    return (
        <div className="flex min-h-screen gap-5">
            <div>
                <Sitenav />
            </div>
            <div className="flex-1 mt-20 container mx-auto">
                {children}
            </div>
        </div>
    );
};

export default layout;