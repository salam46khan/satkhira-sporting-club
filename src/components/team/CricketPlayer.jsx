import Player from "./Player";

const CricketPlayer = () => {
    return (
        <div className="mt-10">
            <div className="divider divider-start">
                <p className="font-bold text-xl">Our Cricket Team</p>
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

export default CricketPlayer;