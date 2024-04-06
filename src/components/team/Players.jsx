import CricketPlayer from "./CricketPlayer";
import FootballPlayer from "./FootballPlayer";
import VolleyPlayer from "./VolleyPlayer";

const Players = () => {
    return (
        <div>
            <FootballPlayer />
            <CricketPlayer />
            <VolleyPlayer />
        </div>
    );
};

export default Players;