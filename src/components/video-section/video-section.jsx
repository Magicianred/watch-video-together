import {Col} from 'react-bootstrap'

// Containers
import BuyMeCoffe from '../../container/buymecoffe/buymecoffe'

// Styles
import './style.css'

export default function VideoSection(){
    return (
        <Col md={6} lg={7} >
            <div className="p-5 mt-5 video-section shadow-lg">
                <iframe src="https://www.youtube.com/watch?v=IMWOxfNlOLw" className="video shadow-sm"></iframe>
                <div className="mt-4">
                    <p className="h3">
                        Başarı, Errrrkek, Tinder, Otobüs
                    </p>
                    <p>
                        Videolardan memnun kaldıysanız kanala abone olabilir, paylaşımlardan haberdar olmak için ise çanı tıklayarak bildirimleri açabilirsiniz
                    </p>
                </div>
                <BuyMeCoffe/>
            </div>
        </Col>
    )
}