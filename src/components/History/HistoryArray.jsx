import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Recommended/Recommended.css";
export function HistoryArray() {
    const arr = [1, 2, 3, 4, 232, 4, 24, 2, 23, 32, 4323, 3234]

    return (
        <div className='recommended-videos-header'>
            <div className='recommended-videos'>
                {
                    arr.map((num) => {
                        return <Card className="card">
                            <Card.Img variant="top" src="https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png" />
                            <i className="fas fa-heart"></i>
                            {/* <i className="fas fa-heart-square"></i> */}
                            <Card.Body>
                                <Card.Title>Card Title Card</Card.Title>
                                <div className="card-description">6k views | 2.34 </div>
                                <Button variant="primary">watch now</Button>
                            </Card.Body>

                        </Card>
                    })
                }

            </div>
        </div>
    );
}
