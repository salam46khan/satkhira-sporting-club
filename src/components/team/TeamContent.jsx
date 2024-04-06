
import Director from "./Director";
import Players from "./Players";

const TeamContent = () => {
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">Our Team</p>
            </div>
            <div>
                <Director />
                <hr className="my-10"/>
                <Players />
            </div>
        </div>
    );
};

export default TeamContent;