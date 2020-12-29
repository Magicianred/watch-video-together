import {useState} from 'react'
import axios from 'axios'
import {Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import TicketShow from '../../container/roomkey/roomkey' 

// Styles
import './style.css'

export default function NavbarLayout(props){

    const [search,setSearch] = useState("https://www.youtube.com/watch?v=AxesgN2ruHQ")

    async function onSubmit(e){
        
        axios({
            method: "post",
            url: "http://localhost:8080/search-video",
            data: {
                video_link: search
            }
        })
    }

    return (
        <Navbar className="shadow-lg m-4 rounded">
            <Navbar.Brand >Watch Video Together 📽</Navbar.Brand>
            {/* <Form.Check 
                type="switch"
                id="custom-switch"
                label="Dark mode"
            /> */}
            {/* AIzaSyDRZuk9icZ6a5cali9IuvTkr4R7sWy1pfE */}
            <Nav className="mr-auto">
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link href="/">Exit</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" onChange={(e) => setSearch(e.target.value) } className="shadow-sm" placeholder="Past your link to here 📼📼📼" className="mr-sm-2" />
            <Button onClick={onSubmit} className="shadow-sm" variant="light">Search</Button>
            </Form>
        </Navbar>
    )
}