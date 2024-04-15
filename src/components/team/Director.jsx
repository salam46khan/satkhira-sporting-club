import { getTrainar } from "@/lib/data";
import Manager from "./Manager";
import Trainer from "./Trainer";

const Director = async () => {
    const trainar = await getTrainar()
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
                    {
                        trainar?.map(trainar => <Trainer key={trainar._id} trainar={trainar}></Trainer>)
                    }
                    {/* <Trainer />
                    <Trainer />
                    <Trainer /> */}
                </div>
            </div>
        </div>
    );
};

export default Director;