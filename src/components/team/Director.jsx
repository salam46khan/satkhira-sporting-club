import Manager from "./Manager";
import Trainer from "./Trainer";

const Director = () => {
    return (
        <div>
            <div>
                <Manager />
            </div>
            <div>
                <div className="divider divider-start">
                    <p className="font-bold text-xl">Our Trainers</p>
                </div>
                <div className="flex justify-center gap-3 flex-wrap">
                    <Trainer />
                    <Trainer />
                    <Trainer />
                </div>
            </div>
        </div>
    );
};

export default Director;