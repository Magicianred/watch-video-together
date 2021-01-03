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
                <Button variant="primary" size="lg" href={roomkey} className="shadow" block>
                    GO CREATE YOUR PRIVATE ROOM
                </Button>
        </div>
    )
}