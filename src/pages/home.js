import {Container,Row} from 'react-bootstrap'

// Components 
import Aside from '../components/aside/aside'
import VideoSection from '../components/video-section/video-section'
import Navbar from '../components/navbar/navbar'

// Context apis
import {linkStore} from '../contexts/linkStore'

export default function Home(){
    return (
        <>
        <linkStore.Provider>
            <Navbar/>
            <center>
            <Container className="m-4">
                <Row>
                <Aside/>
                <VideoSection/>
                </Row>
            </Container>
            </center>
        </linkStore.Provider>
        </>
    )
}