import {useEffect,useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

// Components
import BuyMeCoffe from '../../container/buymecoffe/buymecoffe'

// Styles
import './style.css'

export default function WaitRoom(){

    const [roomkey,setRoomKey] = useState(window.location + "room/" + Math.random().toString(36).substring(2))

    useEffect(() => {
        axios({
            method:"get",
            url:"http://localhost:8080/room/getroom"
        })
    },[])

    return (
        <div id="waitroom">
            <BuyMeCoffe/>
            <p className="display-4">
                Watch Video Together 👁
            </p>
            <hr className="bg-dark" />
            <Form.Group className="text-left">
                <Form.Label>Your Privat Room: </Form.Label>
                <Form.Control type="email" value={roomkey} />
                <Form.Text className="text-muted ml-1">
                You can invite your friend with this link !
                </Form.Text><br/>
                <Button variant="primary" size="lg" href={roomkey} className="shadow" block>
                    Go In To Your Private Room
                </Button>
            </Form.Group>
        </div>
    )
}