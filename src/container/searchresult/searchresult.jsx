import {Container,Row,Col} from 'react-bootstrap'

// Styles
import './style.css'

export default function SearchResult(props){
    return (
        <>
        <div className="search-result shadow rounded">
            <Container>
                <Row>
                    <Col md="4" lg="4">
                    
                    </Col>
                    <Col md="8" lg="8" className="p-2">
                        <p className="h5 pt-2">
                            {props.title}
                        </p>
                        <p>
                            {props.description}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div><br/>
        </>
    )
}