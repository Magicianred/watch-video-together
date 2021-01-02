import { useEffect,useState,useContext } from 'react'
import {Col} from 'react-bootstrap'
import jwt from 'jsonwebtoken'

// Styles
import './style.css'

// Containers
import VideoCard from '../../container/videocard/videocard'

// Context apis 
import {linkStore} from '../../contexts/linkStore'

export default function Aside(){

    const value = useContext(linkStore)

    return (
        <Col md={4} lg={4}>
            <div className="aside p-3 shadow-sm mt-3 text-left">
                {
                    value.map((element,index) => {
                        if(element){
                            return (
                                <VideoCard 
                                key={index}
                                id={element.id}
                                title={element.subject}
                                description={element.description}
                                />
                            )
                        }
                        return null
                    })
                }
            </div>
        </Col>
    )
}