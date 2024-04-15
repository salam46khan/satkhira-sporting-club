import PlayerContent from "@/components/dashboard/dashplayer/PlayerContent";
import { getPlayer } from "@/lib/data";

const DashPlayers = async () => {
    const player = await getPlayer()
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">Players</p>
            </div>
            <PlayerContent player={player}/>
        </div>
    );
};

export default DashPlayers;