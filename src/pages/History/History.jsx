import { ClipoHeader } from "../../components/header/Header";
import { HistoryArray } from "../../components/History/HistoryArray";
import { HistoryHeader } from "../../components/History/historyHeader";

export function History() {
    return <div>
        <ClipoHeader/>
        <HistoryHeader/>
        <HistoryArray/>
    </div>
}