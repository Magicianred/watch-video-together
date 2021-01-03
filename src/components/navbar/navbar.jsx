import axios from 'axios'
import { useState } from 'react'
import {Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import { parse } from "querystring"
// import toast, { Toaster } from 'react-hot-toast';

// Styles
import './style.css'

export default function NavbarLayout(props){

    const [link,setLink] = useState("https://www.youtube.com/watch?v=ytceCWsauSs")

    // Do if else for data
    async function onSubmitSent(){
        
        document.querySelector("#search-bar").value = ""
        var rawSnippts
        
        await axios({
            method: "get",
            url: `https://www.googleapis.com/youtube/v3/videos?id=${Object.values(parse(link))}`,
            params: {
                part: 'snippet',
                maxResult: 1,
                key: "AIzaSyDF4HlRKcTis3vd0DC-g-Absl8u4WmwHH8"
            }
        }).then((res) => rawSnippts = res.data)
                
        props.token({
            id: rawSnippts.items[0].id,
            title: rawSnippts.items[0].snippet.title,
            description: rawSnippts.items[0].snippet.description,
        })
    }


    return (
        <Navbar className="shadow-lg">
            <Navbar.Brand >Watch Video Together 👁</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link href="/">Exit</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" onChange={(e) => setLink(e.target.value)} className="shadow-sm" id="search-bar" placeholder="Past your link to here 📼📼📼" className="mr-sm-2" />
            <Button onClick={onSubmitSent} className="shadow-sm" variant="light">Search</Button>
            </Form>
        </Navbar>
    )
}