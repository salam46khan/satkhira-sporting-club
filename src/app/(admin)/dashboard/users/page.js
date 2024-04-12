import UserContent from "@/components/dashboard/dashuser/UserContent";
import { getUsers } from "@/lib/data";

const DashUsers =async () => {
    const users =await getUsers()
    console.log(users);
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">All Users</p>
            </div>
            <UserContent users={users} />
        </div>
    );
};

export default DashUsers;