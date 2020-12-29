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

    const [search,setSearch] = useState(null)

    function onSubmit(e){
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
            <Navbar.Brand >Watch Video Togather 📽</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="/">Exit</Nav.Link>
            </Nav>
            <TicketShow ticket={window.location.pathname.substring(6)} />
            <Form inline>
            <FormControl type="text" onChange={(e) => setSearch(e.target.value) } className="shadow-sm" placeholder="Search something 📼📼📼" className="mr-sm-2" />
            <Button onClick={onSubmit} className="shadow-sm" variant="light">Search</Button>
            </Form>
        </Navbar>
    )
}