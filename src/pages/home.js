import {useState,useEffect} from 'react'
import {Container,Row} from 'react-bootstrap'

// Components 
import Aside from '../components/aside/aside'
import VideoSection from '../components/video-section/video-section'
import Navbar from '../components/navbar/navbar'

// Context apis
import {linkStore} from '../contexts/linkStore'

export default function Home(){

    const [link,setLink] = useState()

    const [linkarr,setLinkArr] = useState([])

    useEffect(() => {
        setLinkArr([
            ...linkarr,
            link
        ])
    },[link]);

    return (
        <>
        <linkStore.Provider value={linkarr}>
            <Navbar token={setLink} />
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