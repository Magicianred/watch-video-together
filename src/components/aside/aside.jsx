import { useContext } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

// Styles
import './style.css'

// Context apis 
import {linkStore} from '../../contexts/linkStore'

export default function Aside(props){

    const value = useContext(linkStore)

    return (
        <Col md={4} lg={4}>
            <div className="aside shadow-sm mt-3 text-left">
                {
                    value.map((element,index) => {
                        if(element){
                            return (
                                <div key={index} className="p-3 border-bottom" id="videocard">
                                    <Container>
                                        <a onClick={() => props.videoprops({
                                            "id": element.id,
                                            "title": element.title,
                                            "description": element.description
                                        })} href="javascript:void(0)">
                                        <Row>
                                            <Col md="12" lg="12">
                                                <p className="limit-text text-dark mb-0">
                                                        {element.title}
                                                    <br/>
                                                    <small className="limit-text">
                                                        {element.description}
                                                    </small>
                                                </p>
                                            </Col>
                                        </Row>
                                        </a>
                                    </Container>
                                </div>                    
                            )
                        }
                        return null
                    })
                }
            </div>
        </Col>
    )
}