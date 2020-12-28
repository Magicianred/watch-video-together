import {useState} from 'react'
import axios from 'axios'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

// Styles
import './style.css'

export default function NavbarLayout(){

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
            <Navbar.Brand href="#home">Watch Video Togather</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" onChange={(e) => setSearch(e.target.value) } className="shadow-sm" placeholder="Search" className="mr-sm-2" />
            <Button onClick={onSubmit} className="shadow-sm" variant="light">Search</Button>
            </Form>
        </Navbar>
    )
}