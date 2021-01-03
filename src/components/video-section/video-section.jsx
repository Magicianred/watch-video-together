// import { useState,useEffect } from 'react'
import {Col} from 'react-bootstrap'
// import jwt from 'jsonwebtoken'

// Containers
import BuyMeCoffe from '../../container/buymecoffe/buymecoffe'
import VideoBox from '../../container/videobox/videobox'

// Styles
import './style.css'

export default function VideoSection(props){

    return (
        <Col md={6} lg={8} >
            <div className="mt-3 video-section shadow-sm text-left bg-light">
                <VideoBox videoid={props.videoprops.id} className="video shadow-sm"/>
                <div className="p-4">
                    <p id="title" className="h3">
                        {props.videoprops.title}
                    </p>
                    <p id="description">
                        {props.videoprops.description}
                    </p>
                </div>
                <hr/>
                <div className="ml-4 p-2">
                    <BuyMeCoffe/>
                </div>
            </div>
        </Col>    
    )
    return null
}