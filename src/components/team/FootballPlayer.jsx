import Player from "./Player";

const FootballPlayer = () => {
    return (
        <div>
            <div className="divider divider-start">
                <p className="font-bold text-xl">Our Football Team</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
            </div>
        </div>
    );
};

export default FootballPlayer;