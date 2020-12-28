import {useState} from 'react'
import {Container,Row} from 'react-bootstrap'

// Components 
import Aside from '../components/aside/aside'
import VideoSection from '../components/video-section/video-section'
import Navbar from '../components/navbar/navbar'

export default function Home(){
    return (
        <>
            <Navbar/>
            <Container className="m-4" fluid>
            <Row>
                <Aside/>
                <VideoSection/>
            </Row>
            </Container>
        </>
    )
}