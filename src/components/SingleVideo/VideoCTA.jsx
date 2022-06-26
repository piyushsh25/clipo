import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact"
import "./Video-CTA.css"
export function VideoCTA() {
    var a = false;
    return <div className='video-cta-icons-container'>
    <div className='video-cta-icons'>
        <div>
            {/* <div>
                like
            </div> */}
            {a === false ? <MDBIcon far icon="thumbs-up" /> :
                <MDBIcon icon="thumbs-up" />}
        </div>
        <div>
            {/* <div>
                dislike
            </div> */}
            {a === false ? <MDBIcon far icon="thumbs-down" /> :
                <MDBIcon icon="thumbs-down" />}

        </div>
        <div>
            {/* <div>
                watch later
            </div> */}
            {a === false ? <MDBIcon far icon="heart" />
                : <MDBIcon icon="heart" />}

        </div>
        <div>
            {/* <div>
                Playlist
            </div> */}
            <MDBIcon icon="plus-circle" />

        </div>
        

    </div>
    <div className="card-description">6k views | 2.34 </div>
    </div>
}