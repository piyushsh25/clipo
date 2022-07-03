import { ClipoHeader } from "../../components/header/Header";
import {Link} from 'react-router-dom'
export function Error() {
    return <div>
        <ClipoHeader />
        <div>
            This route doesn't exist try. <Link to="/">Click here</Link> for home
        </div>
    </div>


}