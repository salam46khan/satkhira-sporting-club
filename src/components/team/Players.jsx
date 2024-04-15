import { getPlayer } from "@/lib/data";
import Player from "./Player";

const Players =async () => {
    const player = await getPlayer()
    return (
        <div>
            <div className="divider divider-start">
                <p className="font-bold text-xl">Our Famous Team</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
                {
                    player?.map(player => <Player key={player._id} player={player}></Player>)
                }
                {/* <Player/>
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player /> */}
            </div>
            
        </div>
    );
};

export default Players;