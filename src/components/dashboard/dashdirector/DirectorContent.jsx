import { getTrainar } from "@/lib/data";
import ManagerCon from "./ManagerCon";
import TrainarCon from "./TrainarCon";

const DirectorContent =async () => {
    const trainars =await getTrainar()
    return (
        <div>
            <ManagerCon />
            <TrainarCon trainars={trainars}/>
        </div>
    );
};

export default DirectorContent;