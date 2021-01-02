import { useEffect,useState,useContext } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

// Styles
import './style.css'

// Context api's
import {linkStore} from '../../contexts/linkStore'

export default function VideoCard(props){

    const value = useContext(linkStore)

    return (
        <a href="javascript:void(0)">
            <div className="m-2 shadow-sm p-3" id="videocard">
                <Container>
                    <a href="javascript:void(0)">
                    <Row>
                        <Col md="12" lg="12">
                            <p className="limit-text text-dark mb-0">
                                    {props.title}
                                <br/>
                                <small className="limit-text">
                                    {props.description}
                                </small>
                            </p>
                        </Col>
                    </Row>
                    </a>
                </Container>
            </div>
        </a>
    )
}