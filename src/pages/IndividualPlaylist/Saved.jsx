import { ClipoHeader } from "../../components/header/Header";
import { SavedArray } from "../../components/IndividualPlaylist/SavedArray";
import { SavedHeader } from "../../components/IndividualPlaylist/SavedHeader";
export function PlayListUnique() {
    return <div>
        <ClipoHeader />
       <SavedHeader/>
       <SavedArray/>
    </div>
}