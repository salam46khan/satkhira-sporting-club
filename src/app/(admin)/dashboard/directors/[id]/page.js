import UpdateManager from "@/components/dashboard/dashdirector/UpdateManager";
import { getManager } from "@/lib/data";

const page =async () => {
    const manager =await getManager();
    
    return (
        <div>
            <UpdateManager manager={manager[0]}/>
        </div>
    );
};

export default page;