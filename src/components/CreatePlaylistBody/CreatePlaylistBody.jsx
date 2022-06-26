import { Form,Button } from "react-bootstrap"
import "./CreatePlaylist.css"
export function CreatePlaylistBody(){
    return <Form className="new-playlist-form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Create New Playlist</Form.Label>
      <Form.Control type="text" placeholder="New Playlist Name" />
    </Form.Group>
    <Button variant="primary" type="submit">
      create
    </Button>
  </Form>
}