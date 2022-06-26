import { ClipoHeader } from "../../components/header/Header";
import { WatchLaterHeader } from "../../components/WatchLater/LaterHeader";
import { WatchLaterArray } from "../../components/WatchLater/LaterVideo";

export function WatchLater() {
    return <div>
        <ClipoHeader />
        <WatchLaterHeader />
        <WatchLaterArray />
    </div>
}