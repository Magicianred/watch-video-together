import {Container,Row,Col} from 'react-bootstrap'

// Styles
import './style.css'

export default function VideoCard(){
    return (
        <a href="javascript:void(0)">
            <div className="m-2 shadow-sm p-3" id="videocard">
                <Container>
                    <Row>
                        <Col md="3" lg="3">
                            <div className="container-photo">
                                
                            </div>            
                        </Col>
                        <Col md="9" lg="9">
                            <p className="limit-text text-dark">
                                Başarı, Errrrkek, Tinder, Otobüs
                                <br/>
                                <small className="position-absolute">
                                    dlöwkqölwdqk
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="container-text text-left">
                    {/* <p className="h5 limit-text">
                        Başarı, Errrrkek, Tinder, Otobüs
                    </p>
                    <p className="limit-text">
                        Videolardan memnun kaldıysanız kanala abone olabilir, paylaşımlardan haberdar olmak için ise çanı tıklayarak bildirimleri açabilirsiniz.
                    </p> */}
                </div>
            </div>
        </a>
    )
}