import axios from 'axios'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react'
import {Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import urlParser from "js-video-url-parser";
import toast, { Toaster } from 'react-hot-toast';

// Styles
import './style.css'

export default function NavbarLayout(props){

    const [link,setLink] = useState("https://www.youtube.com/watch?v=ytceCWsauSs")      

    async function onSubmitSent(){
        
        document.querySelector("#search-bar").value = ""
        
        if(urlParser.parse(link)){
            return await axios({
                method: "get",
                url: `https://www.googleapis.com/youtube/v3/videos?id=` + urlParser.parse(link).id,
                params: {
                    part: 'snippet',
                    maxResult: 1,
                    key: "AIzaSyDF4HlRKcTis3vd0DC-g-Absl8u4WmwHH8"
                }
            }).then((res) => {
                props.token({
                    id: res.data.items[0].id,
                    title: res.data.items[0].snippet.title,
                    description: res.data.items[0].snippet.description,
                })

                return toast('✔️ Your video added succesfully')
            })
        }

        return toast('❌ Link is invalid')
        
    }

    return (
        <Navbar className="shadow-lg position-fixed w-100" expand="lg">
        <Navbar.Brand >Watch Video Together 👁</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link href="mailto: nedima.akar53411@gmail.com">Feedback</Nav.Link>
            <Nav.Link href="/">Exit</Nav.Link>
            </Nav>
        <Form inline>
            <FormControl type="text" onChange={(e) => setLink(e.target.value)} className="shadow-sm" id="search-bar" placeholder="Past your link to here 📼📼📼" className="mr-sm-2" />
            <Button id="search-btn" onClick={onSubmitSent} className="shadow-sm mr-3" variant="light">Search</Button>
            <CopyToClipboard text={window.location}>
                <Button id="invite-btn" onClick={() => toast('✔️ Succesfully link copied to clipboard')} className="shadow-sm rounded-pill" variant="light">
                    Invite your friend 👫🏽
                </Button>
            </CopyToClipboard>
            <Toaster position="top-center"/>            
        </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}